<template>
  <div :class="{headerWrap:true, green:bol}">
    <span>{{headerT}}</span>
    <div class="leftImg"><slot name="leftImg"></slot></div>
    <div class="rightImg"><slot name="rightImg"></slot></div>
    <div class="search"><slot name="search"></slot></div>
  </div>
</template>

<script>
  export default {
    props:['headerT','bol']
  }
</script>


<style>
  *{margin: 0;padding: 0}
  .headerWrap{
    width:100%;
    height: 45px;
    background-color: #F7F7F7;
    position: relative;
    text-align: center;
  }
  .green{
    background: #ff9900;
  }
  .headerWrap span{
    line-height: 45px;
    color: white;
    font-size: 16px;
  }
  .leftImg{
    left: 15px;
  }
  .rightImg{
    right: 15px;
  }
  .headerWrap div img{
    width: 22px;
    position: absolute;
    top:12px;
  }
  .headerWrap .search input{
    width: 80%;
    height: 30px;
    text-indent: 2em;
    position: absolute;
    left: 15px;
    top: 8px;
    border:none;
    border-radius: 5px;
    font-size: 14px;
  }
  .headerWrap .search img{
    height: 20px;
    width: 20px;
    position: absolute;
  }
  .headerWrap .search-gray{
    top: 13px;
    left: 20px;
  }
  .headerWrap .scan-gray{
    top: 13px;
    right: 65px;
  }
</style>
