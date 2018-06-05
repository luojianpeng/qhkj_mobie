<template>
  <div class="zhichanrm">
    <ul class="oneLine">
      <li>
        <slot name="img1"></slot>
        <span>{{name1}}</span>
      </li>
      <li>
        <slot name="img2"></slot>
        <span>{{name2}}</span>
      </li>
      <li>
        <slot name="img3"></slot>
        <span>{{name3}}</span>
      </li>
    </ul>
    <ul class="twoLine">
      <li>
        <slot name="img4"></slot>
        <span>{{name4}}</span>
      </li>
      <li>
        <slot name="img5"></slot>
        <span>{{name5}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['name1','name2','name3','name4','name5']
  }
</script>

<style>
  .zhichanrm{
    background-color: white;
  }
  .zhichanrm .oneLine{
    font-size: 0;
    padding: 0 10px 10px;
  }
  .zhichanrm .oneLine li{
    width: 31%;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .zhichanrm .oneLine li img{
    width: 45px;
    height: 45px;
    display: block;
    margin: 0 auto 10px;
  }
  .zhichanrm .oneLine li span{
    color: white;
  }
  .zhichanrm .oneLine li:nth-child(1){
    background-color: #99cc99;
  }
  .zhichanrm .oneLine li:nth-child(2){
    background-color: #ffcc66;
    margin-left: 12px;
  }
  .zhichanrm .oneLine li:nth-child(3){
    background-color: #6699cc;
    float: right;
  }

  .zhichanrm .twoLine{
    font-size: 0;
    padding: 0 10px 10px;
  }
  .zhichanrm .twoLine li{
    width: 49%;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .zhichanrm .twoLine li img{
    width: 45px;
    height: 45px;
    display: block;
    margin: 0 auto 10px;
  }
  .zhichanrm .twoLine li span{
    color: white;
  }
  .zhichanrm .twoLine li:nth-child(1){
    background-color: #ff6666;
  }
  .zhichanrm .twoLine li:nth-child(2){
    background-color: #ff9966;
    float: right;
  }
</style>
