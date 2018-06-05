<template>
  <div class="commenshow">
    <div class="left">
      <img src="../assets/images/head_portrait.png" alt="">
    </div>
    <div class="right">
      <div>
        <span class="user">匿名用户</span>
        <span class="time">2017/5/4 星期四 0:14:44</span>
      </div>
      <p>这是第一条测试过后的评论哦！</p>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .commenshow{
    padding: 10px 20px;
  }
  .commenshow .left{
    display: inline-block;
    margin-right: 10px;
  }
  .commenshow .left img{
    width: 40px;
    height: 40px;
  }
  .commenshow .right{
    display: inline-block;
    width: 80%;
  }
  .commenshow .right div{
    height: 25px;

  }
  .commenshow .right .user{
     font-size: 12px;
     color: #09bb07;
    line-height: 20px;
    float: left;
   }
  .commenshow .right .time{
    font-size: 12px;
    color: #999999;
    float: right;
    line-height: 20px;
  }
  .commenshow .right p{
    font-size: 14px;
  }
</style>
