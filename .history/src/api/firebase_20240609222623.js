import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
  localStorage.removeItem('user');
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database), 'admins')
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      } else {
        console.log('No data available');
      }
      return user;
    })
    .catch(console.error);
}

export async function addNewProduct(product, imgURL) {
  const id = uuid();
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imgURL,
    category: product.category.split(','),
    color: product.color.split(','),
    size: product.size.split(','),
  });
}

export async function getProducts(mainMenu, subMenu) {
  return get(ref(database, 'products'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const products = snapshot.val() || {};
        if (mainMenu) {
          const mainMenuProducts = Object.values(products).filter(
            (product) => product.category[0] === mainMenu
          );
          if (subMenu) {
            const subMenuProducts = mainMenuProducts.filter(
              (product) => product.category[1] === subMenu
            );
            return subMenuProducts;
          } else {
            return mainMenuProducts;
          }
        } else {
          return Object.values(products);
        }
      }
      return [];
    })
    .catch(console.error);
}

export async function addProductToCart(userId, product, selectedOptions) {
  const { options, quantity } = selectedOptions;
  return set(
    ref(
      database,
      `carts/${userId}/${product.id + options.color + options.size}`
    ),
    {
      ...product,
      id: product.id + options.color + options.size,
      color: options.color,
      size: options.size,
      quantity: quantity,
    }
  );
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`))
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    })
    .catch(console.error);
}

export async function removeItemInCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

export async function updateCartItem(userId, productId, product, quantity) {
  return set(ref(database, `carts/${userId}/${productId}`), {
    ...product,
    quantity: quantity,
  });
}

export async function getSearchedItem(searchText) {
  return get(ref(database, `products`))
    .then((snapshot) => {
      const products = snapshot.val() || {};
      const searched = Object.values(products).filter(
        (product) => product.title.includes(searchText) === true
      );
      return searched;
    })
    .catch(console.error);
}
