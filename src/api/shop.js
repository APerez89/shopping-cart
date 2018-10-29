/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 1, title: 'Red Chestnut Shoes', info: 'Our most elegant brand of shoe. Perfect for the day that you get married!', price: 199.99, inventory: 3, img_url: 'shoe-1.jpg',
  },
  {
    id: 2, title: 'Brown Rodeo Shoes', info: 'Big interview coming up? Look your very best on the day your wife has a baby!', price: 99.99, inventory: 13, img_url: 'shoe-2.jpg',
  },
  {
    id: 3, title: 'Elegator Shoes', info: 'Our most unique brand of shoe. These elegant alligator shoes are perfect lounging around the house!', price: 119.99, inventory: 7, img_url: 'shoe-3.jpg',
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
