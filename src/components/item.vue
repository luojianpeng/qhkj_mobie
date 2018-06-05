<template>
  <div class="Item" @click="markvul()">
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
        this.$router.push('/'+this.mark)
      }
    }
  }
</script>

<style>
  .Item{
    width: 20%;
    height: 50px;
    float: left;
  }
  .Item div {
    text-align: center;
  }
  .Item div img{
    width: 22px;
    display: block;
    margin: 0 auto;
  }
  .Item span{
    font-size: 12px;
    color: #999;
  }
  .Item .fontColor{
    color:#ff9900;
  }
</style>
