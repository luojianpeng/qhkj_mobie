<template>
  <div style="background-color: #EDF0F2">

    <Search headerT="知产交易" bol="true">
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

    <Program program_name="热门推荐" style="margin-top: 8px;background-color: white">
      <img slot="program-left-img" src="../../../assets/images/fire.png" alt="">
    </Program>

    <Zhichanrm name1="商标转让" name2="专利持有" name3="版权转移" name4="域名转让" name5="高新科技产品">
      <img slot="img1" src="../../../assets/images/zhichanrm5.png" alt="">
      <img slot="img2" src="../../../assets/images/zhichanrm3.png" alt="">
      <img slot="img3" src="../../../assets/images/zhichanrm_1.png" alt="">
      <img slot="img4" src="../../../assets/images/zhichanrm_2.png" alt="">
      <img slot="img5" src="../../../assets/images/zhichanrm4.png" alt="">
    </Zhichanrm>

    <Program program_name="今日优选" style="margin-top: 8px;background-color: white">
      <img slot="program-left-img" src="../../../assets/images/fire.png" alt="">
    </Program>

    <ServiceList></ServiceList>
  </div>
</template>

<script>
  import Search from '../../../components/search.vue'
  import Program from '../../../components/program.vue'
  import Carousel from '../../../components/carousel.vue'
  import Zhichanrm from '../../../components/zhichanrm.vue'
  import ServiceList from '../../../components/serviceList.vue'

  export default {
    components:{
      Program,Carousel,Zhichanrm,ServiceList,Search
    },
    props:[]
  }
</script>
