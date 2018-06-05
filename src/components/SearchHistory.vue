<template>
  <div class="searchHistory">
    <div class="searchHistory_box">
      <div class="top">
        <span>历史搜索</span>
        <img src="../assets/images/trash_can.png" alt="">
      </div>
      <div class="bottom">
        <ul>
          <li>历史搜索1</li>
          <li>历史搜索2</li>
          <li>历史搜索3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  .searchHistory{
    width: 100%;
    background-color: #EDF0F2;
    padding: 10px 0;
  }
  .searchHistory_box{
    width: 90%;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
  }
  .searchHistory_box .top{
    line-height: 30px;
    margin-bottom: 10px;
  }
  .searchHistory_box .top span{
    font-size: 14px;
  }
  .searchHistory_box .top img{
    float: right;
    width: 20px;
    margin-top: 5px;
  }
  .searchHistory_box .bottom ul{
    line-height: 40px;
    font-size: 0;
    text-align: center;
  }
  .searchHistory_box .bottom ul li{
    width: 80px;
    display: inline-block;
    font-size: 14px;
    background-color: #EDF0F2;
    margin-right: 20px;
    border-radius: 10px;
  }
</style>
