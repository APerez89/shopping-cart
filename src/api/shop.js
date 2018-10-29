/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2, img_url: 'shoe-1.jpg',
  },
  {
    id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10, img_url: 'shoe-2.jpg',
  },
  {
    id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5, img_url: 'shoe-3.jpg',
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 100);
  },

  // eslint-disable-next-line
  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      // eslint-disable-next-line
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb();
    }, 100);
  },
};
