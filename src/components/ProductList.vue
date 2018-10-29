<template>
  <div>
    <!-- <img
      v-if="loading"
      src="//i.imgur.com/QxmpMd5.gif"
    > the loading gif. don't really need-->
    <div class="list-container">
      <ul> <!-- would need a v-else in the ul -->
        <li v-for="product in products" :key="product['.key']">
          <img :src="`img/${product.img_url}`">
          {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
          <button
            class="btn"
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)">Add to cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.items,
    }),
    ...mapGetters('products', {
      productIsInStock: 'productIsInStock',
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart',
    }),
  },
  created() {
    this.loading = true;
    this.fetchProducts()
    // eslint-disable-next-line
      .then(() => this.loading = false);
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list-container {
    width: 80%;
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
      text-align: left;
      li {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
        font-family: -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.3rem;
        list-style: none;
        color: #19cc9f;
        margin: 14px;
        img {
          width: 100%;
        }
        .btn {
          border: 1.5px solid #19cc9f;
          padding: 10px 23px;
          font-size: .9rem;
          font-weight: 500;
          color: #19cc9f;
          transition: all 0.3s ease;
          &:hover {
            background-color: #19cc9f;
            color: #fff;
            cursor: pointer;
          }
          &:disabled {
          border-color: #acdacd;
          color: #acdacd;
            &:hover {
              background-color: rgba(0,0,0,0);
              cursor: default;
            }
          }
        }
      }
    }
  }
}
</style>
