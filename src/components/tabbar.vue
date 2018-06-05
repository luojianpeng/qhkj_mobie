<template>
  <div class="tabbar">
    <item txt="首页" mark="home" :selected="selected" @getvle="markvle">
      <img slot="selectImg" src="../assets/images/home-select.png" alt="">
      <img slot="normalImg" src="../assets/images/home.png" alt="">
    </item>

    <item txt="购物车" mark="shopping" :selected="selected" @getvle="markvle">
      <img slot="selectImg" src="../assets/images/shoping-select.png" alt="">
      <img slot="normalImg" src="../assets/images/shoping.png" alt="">
    </item>

    <item txt="找需求" mark="need" :selected="selected" @getvle="markvle">
      <img slot="selectImg" src="../assets/images/need-select.png" alt="">
      <img slot="normalImg" src="../assets/images/need.png" alt="">
    </item>

    <item txt="找服务" mark="service" :selected="selected" @getvle="markvle">
      <img slot="selectImg" src="../assets/images/service-select.png" alt="">
      <img slot="normalImg" src="../assets/images/service.png" alt="">
    </item>

    <item txt="会员" mark="member" :selected="selected" @getvle="markvle">
      <img slot="selectImg" src="../assets/images/member-select.png" alt="">
      <img slot="normalImg" src="../assets/images/member.png" alt="">
    </item>
  </div>
</template>

<script>
  import Item from './item.vue'
  export default {
    components:{
      Item
    },
    data:function () {
      return{
        selected:'home'
      }
    },
    methods:{
      markvle:function (val) {
        this.selected = val;
        /*console.log(this.selected);
        console.log(val);*/
      }
    }
  }
</script>

<style>
  .tabbar{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #ffffff;
    box-sizing: border-box;
    padding-top: 5px;
    border-top:1px solid #EEEEEE;
  }
</style>
