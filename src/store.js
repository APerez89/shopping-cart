import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import cart from './modules/cart';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products,
  },
  state: {
    scopen: false,
    // = data
    // {id, quantity}
  },
  getters: { // = computed properties
    // ... length of products array
    // perfect when we need to filter or calculate something at runtime.
  },
  actions,
  mutations: { // = single state changes
  },
});
