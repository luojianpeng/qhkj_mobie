<template>
  <div class="xinwenzx">
    <Search headerT="新闻资讯" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
    </Search>

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
    </Carousel>

    <Program program_name="最新资讯" hot-style=true style="background-color: #ffffff;border-bottom: solid 1px #eeeeee" ></Program>

    <Newslist></Newslist>
  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Carousel from '../../../components/carousel.vue'
  import Program from '../../../components/program.vue'
  import Newslist from '../../../components/newslist.vue'

  export default {
    components:{
      Carousel,Search,Program,Newslist
    }
  }
</script>
