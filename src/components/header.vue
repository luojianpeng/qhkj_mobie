<template>
  <div class="header">
    <div class="header_left">
      <slot  name="header_left_img" ></slot>
    </div>
    <h3>{{txt}}</h3>
    <div class="header_right">
      <slot  name="header_right_img" ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:['txt'],

  }
</script>
<style>
  .header{
    width: 100%;
    height: 50px;
    background-color: #ff9900;
    text-align: center;
  }
  .header h3{
    color: #ffffff;
    line-height: 45px;
    display: inline-block;
    font-size: 18px;
  }
  .header .header_left{
    float: left;
    display: inline-block;
    margin: 10px 10px;
  }
  .header .header_right{
    float: right;
    display: inline-block;
    margin: 10px 10px;
  }
  .header .header_left img{
    width: 25px;
  }
  .header .header_right img{
    width: 25px;
  }
</style>
