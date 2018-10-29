import shop from '@/api/shop';

export default {
  namespaced: true,
  state: {
    items: [],
    checkoutStatus: null,
  },
  getters: {
    // eslint-disable-next-line
    cartProducts(state, getters, rootState, rootGetters) {
      return state.items.map((cartItem) => {
        // eslint-disable-next-line
        const product = rootState.products.items.find(product => product.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
        };
      });
    },
    cartTotal(state, getters) {
      // eslint-disable-next-line
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
      // let total = 0;
      // getters.cartProducts.forEach((product) =>) {
      //   total += product.price * product.quantity
      // }); forEach used to get total price
    },
  },
  mutations: {
    pushProductToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, cartItem) {
      // eslint-disable-next-line
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
    // eslint-disable-next-line
      state.checkoutStatus = status;
    },
    emptyCart(state) {
    // eslint-disable-next-line
      state.items = [];
    },
  },
  actions: {
    // eslint-disable-next-line
    addProductToCart({ state, getters, commit, rootState, rootGetters }, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          // pushProductToCart
          commit('pushProductToCart', product.id);
        } else {
          // incrementItemQuantity
          commit('incrementItemQuantity', cartItem);
        }
        commit('products/decrementProductInventory', product, { root: true });
      }
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.items,
        () => {
          commit('emptyCart');
          commit('setCheckoutStatus', 'Awesome, you have checked out successfully!');
        },
        () => {
          commit('setCheckoutStatus', 'There was a problem processing your order. Please try again.');
        },
      );
    },
  },
};
