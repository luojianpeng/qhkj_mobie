<template>
  <div class="zhaobiaoitem">
    <div class="left_box">
      <p class="head">福州花海公园转让</p>
      <div class="content">
        <span>福州</span>
        <span style="margin-left: 20px">物业</span>
        <p><img src="../assets/images/clock.png" alt="">2018-5-30</p>
      </div>
    </div>
    <div class="right_box" @click="bol=!bol">
      <img v-show="bol" src="../assets/images/five_pointed.png" alt="">
      <img v-show="!bol" src="../assets/images/five_pointed_select.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data:function () {
      return{
        bol:true
      }
    },

  }
</script>
<style>
  .zhaobiaoitem{
    position: relative;
    padding: 10px;
  }
  .zhaobiaoitem .left_box .head{
    font-size: 14px;
    margin-bottom: 20px;
  }
  .zhaobiaoitem .left_box .content span{
    display: inline-block;
    font-size: 12px;
    line-height: 20px;
    padding: 0 5px;
    background-color: #ff9900;
    color: white;
    border-radius: 5px;
  }
  .zhaobiaoitem .left_box .content p{
    display: inline-block;
    font-size: 12px;
    color: #999999;
    line-height: 15px;
    margin-left: 20px;
    position: relative;
    padding: 0 0 0 15px;
  }
  .zhaobiaoitem .left_box .content img{
    width: 12px;
    display: inline-block;
    margin-right: 2px;
    position: absolute;
    top:1px;
    left: 0;
  }
  .zhaobiaoitem .right_box{
    float: right;
  }
  .zhaobiaoitem .right_box img{
    width: 25px;
    display: inline-block;
    position: absolute;
    top:26px;
    right: 20px;
  }
</style>
