<template>
  <div class="serviceList">
    <div class="serviceList_show" v-for="item in obj">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div class="shop_particulars">
        <div class="particulars_left">
          <p class="title">&nbsp;{{item.gs}}</p>
          <p class="intro">&nbsp;{{item.zw}}</p>
          <!--<p class="money"><span>￥{{item.money}}</span>元 <span class="shop_people">{{item.people}}人</span></p>-->
          <p class="service_bq"><span>&nbsp;信息服务</span> <span class="city">{{item.city}}</span></p>
        </div>

      </div>
    </div>
    <!--<div class="serviceList_more">
      <span>查看更多</span>
      <img src="../assets/images/right_icon.png" alt="">
    </div>-->
  </div>
</template>

<script>

  export default {
    props:['bol'],
    data:function () {
      return {
        obj:{
          username1:{
            gs:'企汇信息科技有限公司',
            zw:'企汇信息科技有限公司介绍',
            city:'福州市',
          },
          username2:{
            gs:'企汇信息科技有限公司',
            zw:'企汇信息科技有限公司介绍',
            city:'福州市',
          },
            username3:{
              gs:'企汇信息科技有限公司',
              zw:'企汇信息科技有限公司介绍',
              city:'福州市',
          }
        }
      }
    },
    methods:{

    }
  }
</script>

<style>
  .serviceList{
    width: 100%;
    background-color: #ffffff;
  }
  .serviceList .serviceList_show,.serviceList_more{
    width: 90%;
    font-size: 0;
    display: block;
    margin: 0 auto;
  }
  .serviceList .serviceList_show{
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0;
    font-size: 0;
  }
  .serviceList .serviceList_show .logo{
    width: 70px;
    height: 70px;
    display: inline-block;
    float: left;
    margin: 5px 20px 0 0;
  }
  .serviceList .serviceList_show .shop_particulars{
    width: 70%;
    font-size: 0;
    display: inline-block;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left{
    float: left;
    display: inline-block;
    width: 100%;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .title{
    font-size: 14px;
    font-weight: bold;
    line-height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .intro{
    font-size: 14px;
    line-height: 40px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .money{
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .money span{
    color: #FF2C29;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .money .shop_people{
    font-size: 12px;
    float: right;
    color: #999;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .service_bq{
    font-size: 14px;
    color: #ff9900;
    line-height: 20px;
    width: 100%;
  }
  .serviceList .serviceList_show .shop_particulars .particulars_left .service_bq .city{
    float: right;
    color:#999
  }

 /* .serviceList_more img{
    width: 15px;
    margin-top: 15px;
    float: right;
    display: inline-block;
  }
  .serviceList span{
    font-size: 12px;
    line-height: 45px;
    display: inline-block;
    color: #588FC8;
  }*/
</style>
