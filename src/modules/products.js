import shop from '@/api/shop';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    // eslint-disable-next-line
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
    },
    productIsInStock() {
      return product => product.inventory > 0;
    },
  },
  mutations: {
    setProducts(state, products) {
      // responsible for updating a piece of the state & setting products array
      // update products
      // eslint-disable-next-line
      state.items = products;
    },
    decrementProductInventory(state, product) {
      // eslint-disable-next-line
      product.inventory--;
    },
  },
  actions: {
    fetchProducts({ commit }) { // responsible for making AJAX call
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        shop.getProducts((products) => {
          commit('setProducts', products);
          resolve();
        });
      });
      // make the call
      // complex but never update the state
      // run setProducts
    },
  },
};
