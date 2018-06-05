<template>
  <div class="tabbarTwo">
      <Itemicon txt="文案" mark="wenan" :selected="selected" @getvle="markvle" @push="routerpush">
        <img slot="selectImg" src="../assets/images/wenben2.png" alt="">
        <img slot="normalImg" src="../assets/images/wenben.png" alt="">
      </Itemicon>

      <Itemicon txt="设计" mark="sheji" :selected="selected" @getvle="markvle">
        <img slot="selectImg" src="../assets/images/sheji2.png" alt="">
        <img slot="normalImg" src="../assets/images/sheji.png" alt="">
      </Itemicon>

      <Itemicon txt="品牌" mark="pinpai" :selected="selected" @getvle="markvle">
        <img slot="selectImg" src="../assets/images/pingpai2.png" alt="">
        <img slot="normalImg" src="../assets/images/pingpai.png" alt="">
      </Itemicon>
      <Itemicon txt="宣传" mark="xuanchuan" :selected="selected" @getvle="markvle">
        <img slot="selectImg" src="../assets/images/xuanchuan2.png" alt="">
        <img slot="normalImg" src="../assets/images/xuanchuan.png" alt="">
      </Itemicon>

      <Itemicon txt="影漫" mark="yingman" :selected="selected" @getvle="markvle">
        <img slot="selectImg" src="../assets/images/yingshidm2.png" alt="">
        <img slot="normalImg" src="../assets/images/yingshidm.png" alt="">
      </Itemicon>
      <Itemicon txt="其他" mark="qita" :selected="selected" @getvle="markvle">
        <img slot="selectImg" src="../assets/images/qita2.png" alt="">
        <img slot="normalImg" src="../assets/images/qita.png" alt="">
      </Itemicon>




  </div>
</template>

<script>
  import Itemicon from './itemicon.vue'
  export default {
    components:{
      Itemicon
    },
    data:function () {
      return{
        selected:'wenan'
      }
    },
    methods:{
      markvle:function (val) {
        this.selected = val;
      }
    }
  }
</script>

<style>
  .tabbarTwo{
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    font-size: 0;
    margin: 0 auto;
    background-color: white;
    padding: 10px 0;
    border-radius: 8px;
  }
  .tabbarTwo .tabbarItem{
    width: 33%;
  }
  .tabbarTwo .tabbarItem div img{
    width: 60px;
    display: block;
    margin: 0 auto;
  }
</style>
