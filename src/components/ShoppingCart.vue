<template>
  <div class="cart-container">
    <div class="cart-list">
      <ul class="cart-ul">
        <li class="cart-li" v-for="product in products" :key="product['.key']">
          <div class="list-info">
            <span class="product-title">{{ product.title }}</span> <br>
            <span class="product-price">{{ product.price | currency }}
              <span class="product-quant">{{ product.quantity }} item/s</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="total-checkout">
      <p class="total">Total: {{ total | currency }}</p>
      <button class="btn-checkout" @click="checkout">Checkout</button>
      <p class="status-alert" v-if="checkoutStatus">{{ checkoutStatus }}</p>
    </div>
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
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transform: translateX(500px);
  transition: 0.3s all;
  &.open {
    transform: translateX(0);
  }
  .cart-list {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .cart-ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      text-align: left;
      .cart-li {
        width: 100%;
        display: flex;
        list-style: none;
        font-family: serif;
        color: #19cc9f;
        margin: 14px;
        .list-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          .product-title {
            font-size: 25px;
            font-weight: bold;
          }
          .product-price {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
          }
        }
      }
    }
  }
  .total-checkout {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    .total {
      font-size: 45px;
      font-weight: 800;
      color: #19cc9f;
    }
    .status-alert {
      padding: 10px;
      font-size: 25px;
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
}
</style>
