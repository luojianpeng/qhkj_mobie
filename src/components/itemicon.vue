<template>
  <div class="tabbarItem" @click="markvul()">
    <div v-show="bol"> <slot  name="selectImg" ></slot></div>
    <div v-show="!bol"> <slot name="normalImg"></slot></div>
    <span  :class="{fontColor:bol}">{{txt}}</span>
  </div>
</template>

<script>
  export default {
    props:['txt','selected','mark'],
    computed:{
      bol:function () {
        if ( this.mark == this.selected ){
          return true
        }
        return false
      }
    },
    methods:{
      markvul:function () {
        this.$emit("getvle",this.mark)
      }
    }
  }
</script>

<style>
  .tabbarItem{
    width: 20%;
    display: inline-block;
  }
  .tabbarItem div {
    text-align: center;
  }
  .tabbarItem div img{
    width: 22px;
    display: block;
    margin: 0 auto;
  }
  .tabbarItem span{
    font-size: 12px;
    color: #999;
    margin: 10px 0 0;
    line-height: 30px;
  }
  .tabbarItem .fontColor{
    color:#ff9900;
  }
</style>
