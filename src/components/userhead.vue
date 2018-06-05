<template>
  <div class="userhead">

    <div class="img">
      <img src="../assets/images/head_portrait.png" alt="">
      <p>13055294254</p>
    </div>

    <div class="bottom">
      <div>
        <span>钻石</span>
        <p>会员等级</p>
      </div>
      <div>
        <span>50点</span>
        <p>个人成长值</p>
      </div>
    </div>

  </div>
</template>

<style>
  .userhead{
    padding: 10px 15px;
    font-size: 0;
    background-color: #ff9900;
    color: white;
  }
  .userhead .img{
    margin: 5px auto 10px;
    text-align: center;
    margin-bottom: 20px;
  }
  .userhead .img img{
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto 8px;
  }
  .userhead .img p{
    font-size: 16px;
  }
  .userhead .bottom{
    font-size: 0;
  }
  .userhead .bottom div{
    width: 50%;
    display: inline-block;
    text-align: center;
  }
  .userhead .bottom span{
    color: white;
    font-size: 14px;
  }
  .userhead .bottom p{
    color: white;
    font-size: 14px;
  }
</style>
