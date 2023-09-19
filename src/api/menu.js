const navbarInfo = [
  { address: '/products', menu: '전체상품' },
  {
    address: '/products/outer',
    menu: '아우터',
    dropMenus: [
      { address: '/products/outer/jacket', name: '자켓' },
      { address: '/products/outer/coat', name: '코트' },
      { address: '/products/outer/cardigan', name: '가디건' },
    ],
  },
  {
    address: '/products/top',
    menu: '상의',
    dropMenus: [
      { address: '/products/top/shortsleeve', name: '반팔' },
      { address: '/products/top/hood', name: '후드티' },
      { address: '/products/top/tshirt', name: '티셔츠' },
      { address: '/products/top/knit', name: '니트' },
    ],
  },
  {
    address: '/products/pants',
    menu: '팬츠',
    dropMenus: [
      { address: '/products/pants/jeans', name: '청바지' },
      { address: '/products/pants/shorts', name: '반바지' },
      { address: '/products/pants/slacks', name: '슬랙스' },
      { address: '/products/pants/longtrousers', name: '긴바지' },
    ],
  },
  {
    address: '/products/accessory',
    menu: '액세사리',
    dropMenus: [
      { address: '/products/accessory/hat', name: '모자' },
      { address: '/products/accessory/belt', name: '벨트' },
      { address: '/products/accessory/glasses', name: '안경' },
    ],
  },
  { address: '/products/bag', menu: '가방' },
  { address: '/products/shoes', menu: '신발' },
];

export function loadAllMenus() {
  return navbarInfo;
}

export function loadSomeDropmenu(navbarName) {
  const menu = navbarInfo.filter((navbar) => navbar.menu === navbarName);
  return menu[0].dropMenus;
}
