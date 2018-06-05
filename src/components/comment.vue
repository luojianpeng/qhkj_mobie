<template>
  <div class="comment">
    <div class="top">
      <textarea name="" id="" cols="30" rows="10" placeholder="吐槽一下"></textarea>
    </div>
    <div class="bottom">
      <input type="text" placeholder="验证码">
      <img src="" alt="">
      <button>发表</button>
    </div>

    <CommentShow>

    </CommentShow>

  </div>
</template>

<script>
  import CommentShow from './commentShow.vue'

  export default {
    components:{
      CommentShow
    }
  }
</script>

<style>
  .comment{
    background-color: #ffffff;
  }
  .comment .top{
    width: 100%;
    padding-top: 10px;
  }
  .comment .top textarea{
    width: 90%;
    height: 80px;
    margin: 0 auto 10px;
    display: block;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    border-color: #ddd;
    font-size: 14px;
  }
  .comment .bottom{
    padding: 10px 20px;
    border-bottom: 1px solid #eeeeee;
  }
  .comment .bottom input{
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 70px;
    padding: 5px;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }
  .comment .bottom img{
    display: inline-block;
  }
  .comment .bottom button{
    width: 50px;
    height: 30px;
    display: inline-block;
    background-color: #007aff;
    color: #ffffff;
    font-size: 14px;
    float: right;
    border-radius: 10px;
  }
</style>
