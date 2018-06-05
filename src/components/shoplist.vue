<template>
  <div class="shop_list">
    <div class="shoplist_show" v-for="item in obj">
      <img class="logo" src="../assets/images/two_line_four_1.png" alt="">
      <div class="shop_particulars">
        <div class="particulars_left">
          <p class="title">&nbsp;{{item.bt}}</p>
          <p class="intro">&nbsp;{{item.zw}}</p>
          <p class="money"><span>￥{{item.money}}</span>元 <span class="shop_people">{{item.people}}人</span></p>
        </div>

      </div>
    </div>
    <div class="shoplist_more">
      <span>查看更多</span>
      <img src="../assets/images/right_icon.png" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    props:['bol'],
    data:function () {
      return {
        obj:{
          username1:{
            bt:'商品1',
            zw:'正文1',
            money:'123',
            people:106
          },
          username2:{
            bt:'商品2',
            zw:'正文2',
            money:'99',
            people:33
          },
            username3:{
            bt:'商品3',
            zw:'正文3',
            money:'111',
            people:36
          }
        }
      }
    },
    methods:{

    }
  }
</script>

<style>
  .shop_list{
    width: 100%;
    background-color: #ffffff;
  }
  .shop_list .shoplist_show,.shoplist_more{
    width: 90%;
    font-size: 0;
    display: block;
    margin: 0 auto;
  }
  .shop_list .shoplist_show{
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0;
    font-size: 0;
  }
  .shop_list .shoplist_show .logo{
    width: 70px;
    height: 70px;
    display: inline-block;
    float: left;
    margin: 5px 20px 0 0;
  }
  .shop_list .shoplist_show .shop_particulars{
    width: 70%;
    font-size: 0;
    display: inline-block;
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left{
    float: left;
    display: inline-block;
    width: 100%;
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .title{
    font-size: 14px;
    font-weight: bold;
    line-height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .intro{
    font-size: 14px;
    line-height: 40px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .money{
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .money span{
    color: #FF2C29;
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .money .shop_people{
    font-size: 12px;
    float: right;
    color: #999;
  }
  .shop_list .shoplist_show .shop_particulars .particulars_left .service_bq{
    font-size: 14px;
    color: #ff9900;
    line-height: 20px;
    width: 100%;
  }

  .shoplist_more img{
    width: 15px;
    margin-top: 15px;
    float: right;
    display: inline-block;
  }
  .shoplist_more span{
    font-size: 12px;
    line-height: 45px;
    display: inline-block;
    color: #588FC8;
  }
</style>
