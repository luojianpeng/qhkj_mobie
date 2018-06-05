<template>
  <div class="home">
    <!--<Header txt="企汇空间">
      <img slot="header_left_img" src="../../assets/images/location_white.png" alt="">
      <img slot="header_right_img" src="../../assets/images/info_icon.png" alt="">
    </Header>-->

     <Search headerT="企汇空间" bol="true">
          <img src="../../assets/images/location_white.png" slot="leftImg" class="leftImg">
          <img src="../../assets/images/info_icon.png" slot="rightImg" class="rightImg">
     </Search>


    <Carousel swiperid="swiper-container" paginationdesition="right">
        <div class="swiper-slide" slot="swiper-icon">
          <img src="../../assets/images/banner/banner_home.jpg" alt="">
        </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../assets/images/banner/banner_home1.jpg" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../assets/images/banner/banner_home2.png" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../assets/images/banner/banner_home3.jpg" alt="">
      </div>
      <div class="swiper-slide" slot="swiper-icon">
        <img src="../../assets/images/banner/banner_home4.jpg" alt="">
      </div>
    </Carousel>

    <Navfour nav_name1="知识产权" nav_name2="知委律师" nav_name3="软件大咖" nav_name4="金融服务">
      <img slot="nav_four_img_1" src="../../assets/images/nav_four_1.png" alt="">
      <img slot="nav_four_img_2" src="../../assets/images/nav_four_2.png" alt="">
      <img slot="nav_four_img_3" src="../../assets/images/nav_four_3.png" alt="">
      <img slot="nav_four_img_4" src="../../assets/images/nav_four_4.png" alt="">
    </Navfour>

    <Navtwolinefour nav_name1="标准服务" nav_name2="定制服务" nav_name3="悬赏发布" nav_name4="企业查询" nav_name5="知产交易" nav_name6="招标先知" nav_name7="礼通天下" nav_name8="推荐活动">
      <img slot="line_four_img_1" src="../../assets/images/two_line_four_1.png" alt="">
      <img slot="line_four_img_2" src="../../assets/images/two_line_four_2.png" alt="">
      <img slot="line_four_img_3" src="../../assets/images/two_line_four_3.png" alt="">
      <img slot="line_four_img_4" src="../../assets/images/two_line_four_4.png" alt="">
      <img slot="line_four_img_5" src="../../assets/images/two_line_four_5.png" alt="">
      <img slot="line_four_img_6" src="../../assets/images/two_line_four_6.png" alt="">
      <img slot="line_four_img_7" src="../../assets/images/two_line_four_7.png" alt="">
      <img slot="line_four_img_8" src="../../assets/images/two_line_four_8.png" alt="">
    </Navtwolinefour>

    <Navtwolinethree nav_name1="新闻资讯" nav_name2="服务商城" nav_name3="会员中心" nav_name4="关于我们" nav_name5="会员反馈" nav_name6="联系我们">
      <img slot="line_three_img_1" src="../../assets/images/line_three_1.png" alt="">
      <img slot="line_three_img_2" src="../../assets/images/line_three_2.png" alt="">
      <img slot="line_three_img_3" src="../../assets/images/line_three_3.png" alt="">
      <img slot="line_three_img_4" src="../../assets/images/line_three_4.png" alt="">
      <img slot="line_three_img_5" src="../../assets/images/line_three_5.png" alt="">
      <img slot="line_three_img_6" src="../../assets/images/line_three_6.png" alt="">
    </Navtwolinethree>

    <Program program_name="新闻资讯" style="margin-top: 8px" hot-style=true></Program>

    <Newslist  moreshow=true></Newslist>

    <Program program_name="服务商城" style="margin-top: 8px" hot-style=true ></Program>

    <Shoplist></Shoplist>
  </div>

</template>

<script>
  import Search from '../../components/search.vue'
  import Carousel from '../../components/carousel.vue'
  import Navfour from '../../components/navfour.vue'
  import Navtwolinefour from '../../components/navtwolinefour.vue'
  import Navtwolinethree from '../../components/navtwolinethree.vue'
  import Program from '../../components/program.vue'
  import Newslist from '../../components/newslist.vue'
  import Shoplist from '../../components/shoplist.vue'
  export default {
    components:{
     Carousel,Navfour,Navtwolinefour,Navtwolinethree,Program,Newslist,Shoplist,Search
    },
  }

</script>

<style>

</style>
