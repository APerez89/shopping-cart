<template>
  <div>
    <div class="top-bar">
      <router-link class="go-home" to="/">{{ header }}</router-link>
      <div class="button" @click="$store.state.scopen = !$store.state.scopen">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
    <ProductList/>
    <ShoppingCart :class="$store.state.scopen ? 'open' : ''"/>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
  name: 'ProductHome',
  components: {
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      header: 'Shoe LaLa',
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  .top-bar {
    width: 100%;
    height: 90px;
    background-color: #191c1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .go-home {
      font-family: 'Righteous', cursive;
      text-decoration: none;
      font-size: 40px;
      color: #fff;
      margin: 0 40px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .button {
      background-color: #19cc9f;
      border-radius: 30px;
      font-size: 25px;
      margin: 0 40px;
      padding: 13px;
      color: #fff;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
      z-index: 999;
      &:hover {
        transform: scale(1.1);
        background-color: #69e7c4;
        cursor: pointer;
      }
    }
  }
}

</style>
