<template>
  <div class="cart-container">
    <h2>header here</h2>
    <ul class="cart-ul">
      <li class="cart-li" v-for="product in products" :key="product['.key']">
        {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button class="btn-checkout" @click="checkout">Checkout</button>
    <p class="status-alert" v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotal',
    }),
    ...mapState('cart', {
      checkoutStatus: state => state.checkoutStatus,
    }),
  },
  methods: {
    ...mapActions('cart', ['checkout']),
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #445;
  transform: translateX(500px);
  transition: 0.3s all;
  &.open {
    transform: translateX(0);
  }

  .cart-ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    text-align: left;
    .cart-li {
      width: 100%;
      display: flex;
      font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.3rem;
      list-style: none;
      color: #19cc9f;
      margin: 14px;
    }
  }
  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #19cc9f;
  }
  .status-alert {
    font-size: 2.3rem;
    text-transform: uppercase;
    color: #19cc9f;
  }
  .btn-checkout {
    width: 300px;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 35px;
    border: none;
    background-color: #19cc9f;
    color: #fff;
    transition: all 0.3s ease;
    &:hover {
      background-color: #fff;
      border: 1.5px solid #19cc9f;
      color: #19cc9f;
      cursor: pointer;
    }
  }
}
</style>
