<template>
  <div>
    <Search headerT="招标先知" bol="true">
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

    <Zhaobiaoicon></Zhaobiaoicon>

    <Program program_name="热门推荐" hot-style=true style="background-color: #eeeeee">
    <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
  </Program>

    <Zhaobiaoitem></Zhaobiaoitem>
    <Zhaobiaoitem></Zhaobiaoitem>
    <Zhaobiaoitem></Zhaobiaoitem>
    <Zhaobiaoitem></Zhaobiaoitem>

  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Carousel from '../../../components/carousel.vue'
  import Zhaobiaoicon from '../../../components/zhaobiaoicon.vue'
  import Program from '../../../components/program.vue'
  import Zhaobiaoitem from '../../../components/zhaobiaoitem.vue'

  export default {
    components:{
     Carousel,Search,Zhaobiaoicon,Program,Zhaobiaoitem
    },
    props:[]
  }
</script>
