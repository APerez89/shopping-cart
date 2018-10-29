<template>
  <div class="welcome">
    <div class="dark-bkg">
      <h1>Welcome to <br> <span>Shoe La La</span></h1>
      <p>"Just Men's shoes for a <i>special</i> occasion in a Man's life" - <i>M. Scott</i></p>
      <router-link class="wel-btn" to="/product">shop shoes</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100vw;
  height: 100vh;
  background-image: url('/img/storedark.jpg');
  background-size: 100vw;
  background-position-x: 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .dark-bkg {
    padding: 25px;
    background-color: rgba(0,0,0,0.8);
    h1 {
      font-size: 5rem;
      color: #fff;
      text-shadow: 1px 0px 1px rgb(102, 102, 102);
      margin: 0;
      span {
        font-family: 'Righteous', cursive;
        font-size: 10rem;
        color: #19cc9f;
        text-shadow: 1px 0px 1px rgba(134, 134, 134, 0.7);
      }
    }
    p {
      font-size: 1.3rem;
      color: #fff;
      margin: 0 0 50px;
      font-family: 'Times New Roman', Times, serif;
      letter-spacing: 2px;
      i {
        color: #19cc9f;
      }
    }
    .wel-btn {
      font-size: 1.3rem;
      font-weight: 700;
      border: 3px solid #fff;
      padding: 20px 80px;
      text-decoration: none;
      color: #fff;
      transition: all 0.2s ease;
      &:hover {
        background-color: #fff;
        color: #343a3d;
        cursor: pointer;
      }
    }
  }
}
</style>
