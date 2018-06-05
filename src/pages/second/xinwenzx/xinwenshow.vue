<template>
  <div class="tuijianhd">
    <Search headerT="新闻资讯" bol="true">
      <img src="../../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
    </Search>

    <Xinwenhead></Xinwenhead>

    <Program program_name="网友评论" hot-style=true style="background-color: #ffffff;margin-top: 8px" ></Program>

    <Comment></Comment>

  </div>
</template>
<script>
  import Search from '../../../components/search.vue'
  import Xinwenhead from '../../../components/xinwenhead.vue'
  import Comment from '../../../components/comment.vue'
  import Program from '../../../components/program.vue'

  export default {
    components:{
      Search,Xinwenhead,Comment,Program
    }
  }
</script>
<style>
  .tuijianhd{
    background-color: #e9e9e9;
  }
</style>
