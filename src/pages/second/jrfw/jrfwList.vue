<template>
  <div>

    <Search headerT="金融服务" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
      <img src="../../../assets/images/search_wirte.png" slot="rightImg" class="rightImg">
    </Search>
    <FontShuffling marqueeTxt="企汇空间帮助企业解决企业运营资金瓶颈，打造企业生态金融链，助力企业生态桥！">
    </FontShuffling>

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

    <ItemA nav_name1="一对一咨询">
      <img slot="ItemA_img_1" src="../../../assets/images/line_three_1.png" alt="">
    </ItemA>
    <ItemA nav_name1="电话咨询">
      <img slot="ItemA_img_1" src="../../../assets/images/line_three_1.png" alt="">
    </ItemA>
    <ItemA nav_name1="代写文本">
      <img slot="ItemA_img_1" src="../../../assets/images/line_three_1.png" alt="">
    </ItemA>
    <ItemA nav_name1="律师函">
      <img slot="ItemA_img_1" src="../../../assets/images/line_three_1.png" alt="">
    </ItemA>

  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Carousel from '../../../components/carousel.vue'
  import FontShuffling from '../../../components/FontShuffling.vue'
  import ItemA from '../../../components/itemA.vue'

  export default {
    components:{
      Search,Carousel,FontShuffling,ItemA
    },
    data:function () {
      return{
        navIndex:0
      }
    }
  }

</script>

