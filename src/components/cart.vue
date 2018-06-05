<template>
  <div class="cart">

    <p class="title">商品列表</p>

    <div v-for="(data,index) in items">
      <!--<input type="checkbox" :value="data.id">--><span>{{data.shopname}}</span>

      <div class="bottom" v-for="(item,index) in data.listgoods" >
        <div class="content">
          <input type="checkbox" class="iteminput" v-model="shopitem" :value="item.id" @click="checkOdd($event)">
          <img src="../assets/images/two_line_four_2.png" alt="">
        </div>

        <div class="right">
          <p>{{item.name}}</p>
          <div class="cont">
            <span class="money">¥<span class="moneyPrice">{{item.price}}</span></span>
            <div class="count">
              <span class="sub" @click="sub($event)">-</span>
              <input type="text" :value="item.count" class="countNum">
              <span class="add" @click="add($event)">+</span>
            </div>
            <button class="def">删除</button>
          </div>
        </div>
      </div>

    </div>


    <div class="settleAccounts">
      <div class="all">
        <input type="checkbox" v-model="shopAll" @click="shopCheck()" class="checAll">
        <span>全选</span>
      </div>
      <div class="close">
        <p class="inall">
          共计：￥<span>{{moneyPrice}}</span>元
        </p>
        <button>去结算 (<span>0</span>)</button>
      </div>
    </div>

  </div>

</template>

<script>
  import '../../static/swiper/js/jquery1.7'

  export default {
    methods:{
     //全选设置
      shopCheck:function(){
        //判断是否选中然后全选
        let len = $(".iteminput").length; //选中的数组
        let cheA = $(".checAll").is(':checked');//获取全选是否选中

        if (this.shopitem.length !== len){
          this.shopitem = [];
          for (let i = 0; i < len;i++){
            this.shopitem.push($(".iteminput")[i].value);
            $(".checAll").attr("checked", true);
          }
        }else{
          this.shopitem = [];
          $(".checAll").attr('checked',false);
        }
      },
      //设置商品数量加减
      sub:function (e) {
        let I = e.srcElement.index;
        $(".countNum")[I].value--;
        this.checkOdd(e)
      },
      add:function (e) {
        let I = e.srcElement.index;
        $(".countNum")[I].value++;
        this.checkOdd(e)
      },
      //单选之后显示加减总价
      checkOdd:function (e) {
        let I = e.srcElement.index;
        let checkBool = $('.iteminput').eq(I).is(':checked');
        let limit = parseFloat($('.moneyPrice')[I].innerText).toFixed(2);
        let num = parseInt(($('.countNum')[I].value));
        if (checkBool === true){
          let price = this.moneyPrice;
          this.moneyPrice += parseFloat(price + (parseFloat(limit) * num)).toFixed(2)
        }else {
          let price = this.moneyPrice;
          this.moneyPrice -= parseFloat(price - (parseFloat(limit) * num)).toFixed(2)
        }

      }


    },
    created:function(){

      //dom渲染完成后执行下列函数
       this.$nextTick(

      //设置商品数量值和设置加减两个按钮的index值
       function coutNum() {
          let arr = []; //产品数量数组
          let len = $(".countNum").length;
          for (let i = 0; i < len;i++){
            arr.push($(".countNum")[i].value);
            $(".sub")[i].index = i;
            $(".add")[i].index = i;
            $(".iteminput")[i].index = i;
          }
        },


      )

    },
    computed:{
      shopBol:function () {
        shopBol
      }
    },
    data: function () {
      return{
      moneyPrice:0,
      shopAll:[],//商铺model
      shopitem:[],//所有商品model ID
      OrderTotal:0,
      items: [//加入购物车商品
        {
          id:1,
          shopname:'内蒙古原产牛奶',
          shopselected:false,
          listgoods:[
            {
              id:101,
              name: '奶片',
              price:1.3,
              count:2,
              selected:false
            },
            {
              id:102,
              name: '小辣椒',
              price:100,
              count:1,
              selected:false
            },
            {
              id:103,
              name: '小辣椒22222',
              price:100,
              count:1,
              selected:false
            }
          ]
        },
        {
          id:2,
          shopname:'云端电子',
          shopselected:false,
          listgoods:[
            {
              id:201,
              name: '三星',
              price:4000,
              count:2,
              selected:false
            },
            {
              id:202,
              name: '华为1',
              price:100,
              count:1,
              selected:false
            },
            {
              id:203,
              name: '华为2',
              price:100,
              count:1,
              selected:false
            },
            {
              id:204,
              name: '华为3',
              price:100,
              count:1,
              selected:false
            }
          ]
        },
        {
          id:3,
          shopname:'小米官方商店',
          shopselected:false,
          listgoods:[
            {
              id:301,
              name: '小米4',
              price:1.3,
              count:2,
              selected:false
            }
          ]
        }
      ]
      }

    },

  }
</script>

<style>
  .settleAccounts{
    font-size: 0;
    height: 45px;
  }
  .settleAccounts .all,.close{
    font-size: 14px;
    display: inline-block;
    line-height: 45px;
  }
  .settleAccounts .close{
    float: right;
  }
  .settleAccounts .close .inall{
    color: #999999;
    display: inline-block;
  }
  .settleAccounts .close .inall span{
    color: #f00;
  }
  .settleAccounts .close button{
    display: inline-block;
    line-height: 45px;
    background-color: #f60;
    color: white;
    padding: 0 15px;
  }

  .cart{
    padding: 0 10px;
  }
  .cart .title{

    line-height: 40px;
    color: #999999;
    font-size: 14px;
    border-bottom: 1px solid #eeeeee;
  }
  .cart .content{
    display: inline-block;
    width: 80px;
    font-size: 0;
    position: relative;
  }
  .cart .content input,img{
    display: inline-block;
  }
  .cart .content input{
    position: absolute;
    top:40%;
    left: 0;
  }
  .cart .content img{
    width: 70px;
    height: 70px;
    margin-left: 20px;
  }
  .cart .right {
    width: 70%;
    display: inline-block;
    height: 70px;
    font-size: 14px;
    float: right;
  }
  .cart .right div input{
    width: 25px;
    text-align: center;
  }
  .cart .right p{
    margin-bottom: 30px;
  }
  .cart .right .money{
    color: #f00;
    margin-right: 25px;
  }
  .cart .right .cont .count{
    height: 23px;
    border: 1px solid #eeeeee;
    display: inline-block;
    margin-right: 5px;
    float: right;
  }
  .cart .right .cont .count span{
    width: 25px;
    height: 23px;
    display: inline-block;
    text-align: center;
  }
  .cart .right .cont .count .add{
    border-left: 1px solid #eeeeee;
  }
  .cart .right .cont .count .sub{
    border-right: 1px solid #eeeeee;
  }
  .cart .right .cont .def{
    background-color: white;
    display: inline-block;
    float: right;
    line-height: 25px;
  }
  .cart .bottom{
    width: 100%;
    display: inline-block;
    height: 70px;
    font-size: 0;
    padding: 20px 0;
    border-bottom: 1px solid #eeeeee;
  }
</style>
