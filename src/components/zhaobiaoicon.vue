<template>
  <div class="zhaobiaoicon">
    <itemA nav_name1="免费广告">
      <img slot="ItemA_img_1" src="../assets/images/ten_1.png" alt="">
    </itemA>
    <itemA nav_name1="中标信息">
      <img slot="ItemA_img_1" src="../assets/images/ten_2.png" alt="">
    </itemA>
    <itemA nav_name1="定制推送">
      <img slot="ItemA_img_1" src="../assets/images/ten_3.png" alt="">
    </itemA>
    <router-link to="/zhaobiaomore">
      <itemA nav_name1="更多分类">
        <img slot="ItemA_img_1" src="../assets/images/ten_4.png" alt="">
      </itemA>
    </router-link>
  </div>
</template>

<script>
  import itemA from '../components/itemA.vue'

  export default {
    components:{
      itemA
    },
    props:['nav_name1']
  }
</script>

<style>
  .zhaobiaoicon{
    height: 106px;
  }
  .zhaobiaoicon .ItemA{
    width: 25%;
    float: left;
    box-sizing: border-box;
    padding: 15px 0;
    text-align: center;
    border:none;
  }
  .zhaobiaoicon .ItemA img{
    width: 45px;
    height: 45px;
  }
</style>
