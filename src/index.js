import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../src/pages/NotFound';
import Home from '../src/pages/Home';
import AllProducts from '../src/pages/AllProducts';
import NewProduct from '../src/pages/NewProduct';
import Cart from './pages/Cart';
import ProtectedRoute from './pages/ProtectedRoute';
import ProductDetail from './pages/ProductDetail';
import Top from './pages/clothes/Top';
import Pants from './pages/clothes/Pants';
import Outer from './pages/clothes/Outer';
import Accessory from './pages/clothes/Accessory';
import Bag from './pages/clothes/Bag';
import Shoes from './pages/clothes/Shoes';
import Jacket from './pages/clothes/outer/Jacket';
import Coat from './pages/clothes/outer/Coat';
import Cardigan from './pages/clothes/outer/Cardigan';
import ShortSleeve from './pages/clothes/top/ShortSleeve';
import Hood from './pages/clothes/top/Hood';
import Tshirt from './pages/clothes/top/Tshirt';
import Knit from './pages/clothes/top/Knit';
import Jeans from './pages/clothes/pants/Jeans';
import Shorts from './pages/clothes/pants/Shorts';
import Slacks from './pages/clothes/pants/Slacks';
import Hat from './pages/clothes/accessory/Hat';
import Belt from './pages/clothes/accessory/Belt';
import Glasses from './pages/clothes/accessory/Glasses';
import LongTrousers from './pages/clothes/pants/LongTrousers';
import Shirt from './pages/clothes/top/Shirt';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/search/:searchText', element: <Search /> },

      { path: '/products/outer', element: <Outer /> },
      { path: '/products/outer/jacket', element: <Jacket /> },
      { path: '/products/outer/coat', element: <Coat /> },
      { path: '/products/outer/cardigan', element: <Cardigan /> },

      { path: '/products/top', element: <Top /> },
      { path: '/products/top/shortsleeve', element: <ShortSleeve /> },
      { path: '/products/top/hood', element: <Hood /> },
      { path: '/products/top/tshirt', element: <Tshirt /> },
      { path: '/products/top/knit', element: <Knit /> },
      { path: '/products/top/shirt', element: <Shirt /> },

      { path: '/products/pants', element: <Pants /> },
      { path: '/products/pants/jeans', element: <Jeans /> },
      { path: '/products/pants/shorts', element: <Shorts /> },
      { path: '/products/pants/slacks', element: <Slacks /> },
      { path: '/products/pants/longtrousers', element: <LongTrousers /> },

      { path: '/products/accessory', element: <Accessory /> },
      { path: '/products/accessory/hat', element: <Hat /> },
      { path: '/products/accessory/belt', element: <Belt /> },
      { path: '/products/accessory/glasses', element: <Glasses /> },

      { path: '/products/bag', element: <Bag /> },
      { path: '/products/shoes', element: <Shoes /> },

      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
