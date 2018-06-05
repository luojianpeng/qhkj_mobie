<template>
  <div class="zhaobiaomore">
    <Search headerT="更多分类" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
    </Search>

    <Program program_name="全部分类" hot-style=true style="background-color: #F7F7F7">
    </Program>

    <Program program_name="免费公告">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_1.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="招标项目">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_2.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="招标公告">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_3.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="公告变更">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_4.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="中标信息">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_5.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="招标答疑">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_6.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="资审结果">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_7.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="招标文件">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_8.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="法律法规">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_9.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="中标数据库">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_10.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="企业数据库">
      <img slot="program-left-img" src="../../../assets/images/zhaobiaomore_11.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="我的收藏">
      <img slot="program-left-img" src="../../../assets/images/five_pointed_select.png" alt="">
      <img slot="program-right-img" src="../../../assets/images/right_icon.png" alt="">
    </Program>


  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Program from '../../../components/program.vue'

  export default {
    components:{
      Search,Program
    },
    props:[]
  }
</script>

<style>
  .zhaobiaomore .program{
    color: black;
    border-bottom: 1px solid #eeeeee;
  }

</style>
