<template>
  <div>
    <!-- <img
      v-if="loading"
      src="//i.imgur.com/QxmpMd5.gif"
    > the loading gif. don't really need-->
    <div class="list-container">
      <ul> <!-- would need a v-else in the ul -->
        <li v-for="product in products" :key="product['.key']">
          <div class="list-img" :style="`background-image: url(img/${product.img_url})`">
            <!-- <img :src="`img/${product.img_url}`"> -->
          </div>
          <div class="list-info">
            <span class="product-title">{{ product.title }}</span> <br>
            <span class="product-info">{{ product.info }}</span> <br>
            <span class="product-price">{{ product.price | currency }}
              <span class="product-quantity">{{ product.inventory }} remaining</span>
            </span>
            <br>
            <button
              class="btn"
              :disabled="!productIsInStock(product)"
              @click="addProductToCart(product)">Add to cart
            </button>
          </div>
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
    margin-top: 30px;
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
      text-align: left;
      li {
        width: 450px;
        box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 25px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.03);
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
        }
        .list-img {
          height: 420px;
          background-size: cover;
          background-position-x: 50%;
        }
        .list-info {
          display: flex;
          padding: 25px;
          color: #191e20;
          .product-title {
            font-family: serif;
            font-size: 40px;
            font-weight: bold;
            letter-spacing: 1.5px;
            // color: #191e20;
          }
          .product-info {
            font-family: sans-serif;
          }
          .product-price {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-family: serif;
            font-size: 18px;
            font-weight: bold;
            // color: #191e20;
          }
          .btn {
            width: 100%;
            border: 1.5px solid #19cc9f;
            padding: 10px 23px;
            font-size: 16px;
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
}
</style>
