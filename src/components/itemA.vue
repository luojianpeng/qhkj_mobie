<template>
  <div class="ItemA">
    <slot  name="ItemA_img_1" ></slot>
    <slot  name="ItemA_changImg_1" ></slot>
    <span>{{nav_name1}}</span>
  </div>
</template>

<script>
  export default {
    props:['nav_name1']
  }
</script>

<style>
  .ItemA{
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 15px 0;
    text-align: center;
    border-right: solid 1px #eeeeee;
    border-bottom:solid 1px #eeeeee;
  }
  .ItemA img{
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto 10px;
  }
  .ItemA span{
    font-size: 12px;
  }
</style>
