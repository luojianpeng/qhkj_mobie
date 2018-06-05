<template>
  <div class="select_box">
    <select class="border">
      <option>信息服务</option>
      <option>服务1</option>
      <option>服务2</option>
    </select>

    <select class="border">
      <option>上门服务</option>
      <option>服务1</option>
      <option>服务2</option>
    </select>

    <select>
      <option>地市级</option>
      <option>福州</option>
      <option>厦门</option>
    </select>

  </div>
</template>

<style>
  .select_box{
    font-size: 0;
    border-bottom:1px solid #eeeeee;
  }
  .select_box select{
    width: 33.33%;
    font-size: 14px;
    height:40px;
    border:none;
  }
  .select_box .border{
    border-right: 1px solid #eeeeee;
  }
</style>
