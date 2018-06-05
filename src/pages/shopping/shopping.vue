<template>
  <div class="shopping">
    <Search headerT="购物车" bol="true">
      <img src="../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
      <img src="../../assets/images/herder_house.png" slot="rightImg" class="rightImg">
    </Search>

    <div class="cartnone" v-if="false">
      <img src="../../assets/images/cart_none.png" alt="">
      <button>去逛逛</button>
    </div>

    <Cart></Cart>

  </div>
</template>

<script>
  import Search from '../../components/search.vue'
  import Cart from '../../components/cart.vue'

  export default {
    components:{
      Search,Cart
    },
  }

</script>

<style>
  .cartnone{

  }
  .cartnone img{
    width: 150px;
    display: block;
    margin: 150px auto 0;
  }
  .cartnone button{
    width: 150px;
    height: 40px;
    display: block;
    margin: 80px auto;
    border-radius: 10px;
    border: 1px solid #ff9900;
    background-color: white;
    color: #ff9900;
  }
</style>
