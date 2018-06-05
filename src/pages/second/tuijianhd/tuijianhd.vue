<template>
  <div class="tuijianhd">
    <Search headerT="推荐活动" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
      <img src="../../../assets/images/search_wirte.png" slot="rightImg" class="rightImg">
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

    <Tuijianicon></Tuijianicon>

    <Program program_name="推荐活动" hot-style=true style="background-color: #ffffff;border-bottom: solid 1px #eeeeee" >
    </Program>

    <ServiceList></ServiceList>

  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Carousel from '../../../components/carousel.vue'
  import Tuijianicon from '../../../components/tuijianicon.vue'
  import Program from '../../../components/program.vue'
  import ServiceList from '../../../components/serviceList.vue'

  export default {
    components:{
      Carousel,Search,Tuijianicon,Program,ServiceList
    }
  }
</script>

<style>
  .tuijianhd{
    background-color: #e9e9e9;
  }
</style>
