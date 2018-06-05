<template>
  <div>

    <Search headerT="知识产权" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
      <img src="../../../assets/images/search_wirte.png" slot="rightImg" class="rightImg">
    </Search>

    <!--二级路由-->
    <div class="zscqlistPage">
      <span :class="{active:navIndex==0}" @click="navIndex=0">
        <router-link to="/zscqlist/trademark">商标业务</router-link>
      </span>

      <span :class="{active:navIndex==1}" @click="navIndex=1">
        <router-link to="/zscqlist/patent">专利业务</router-link>
      </span>
      <span :class="{active:navIndex==2}" @click="navIndex=2">
        <router-link to="/zscqlist/copyright">版权业务</router-link>
      </span>
    </div>

    <Carousel swiperid="swiper-container" paginationdesition="right">
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../../assets/images/banner/banner_home.jpg" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../../assets/images/banner/banner_home1.jpg" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../../assets/images/banner/banner_home2.png" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../../assets/images/banner/banner_home3.jpg" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../../assets/images/banner/banner_home4.jpg" alt="">
      </div>
    </Carousel>

    <div>
      <router-view>

      </router-view>
    </div>

  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Carousel from '../../../components/carousel.vue'


  export default {
    components:{
      Search,Carousel
    },
    data:function () {
      return{
        navIndex:0
      }
    }
  }

</script>

<style>
  .zscqlistPage{
    height: 40px;
    text-align: center;
    font-size: 0;
    box-sizing: border-box;
  }
  .zscqlistPage span a{
    width: 100%;
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    box-sizing: border-box;
  }
  .zscqlistPage span{
    display: inline-block;
    width: 33.33%;
    font-size: 14px;
    height: 40px;
    box-sizing: border-box;
  }
  .zscqlistPage .active{
    border-bottom: 2px solid #ff9900;

  }
  .zscqlistPage .active a{
  color: #ff9900 !important ;
  }
</style>
