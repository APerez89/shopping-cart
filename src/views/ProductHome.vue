<template>
  <div>
    <h2>{{ header }}</h2>
    <div class="button" @click="$store.state.scopen = !$store.state.scopen"><i class="fas fa-shopping-cart"></i></div>
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
      header: 'header here',
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3rem;
    color: #343a3d;
  }
  .button {
    background-color: #343a3d;
    border-radius: 30px;
    position: fixed;
    font-size: 25px;
    top: 0;
    right: 0;
    margin: 25px;
    padding: 13px;
    color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    z-index: 999;
    &:hover {
      transform: translateY(-3px);
      color: #19cc9f;
      background-color: #474e50;
      cursor: pointer;
    }
  }
}

</style>
