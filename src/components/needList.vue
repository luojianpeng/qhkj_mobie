<template>
  <div class="needList">
    <div class="item" v-for="item in obj">
      <p class="headline"><span>[设计]</span>{{item.headline}}</p>
      <p class="article">{{item.article}}</p>
      <div class="bottom">
        <img src="../assets/images/head_portrait.png" alt="">
        <span class="name">{{item.name}}</span>
        <span class="time">{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        obj: {
          username1: {
            headline: '标题1',
            article: '正文1',
            time: '2018-06-23',
            name: '张三'
          },
          username2: {
            headline: '标题2',
            article: '正文2',
            time: '2018-04-24',
            name: '张三'
          },
          username3: {
            headline: '标题3',
            article: '正文3',
            time: '2018-02-22',
            name: '张三'
          },
          username4: {
            headline: '标题4',
            article: '正文4',
            time: '2018-06-23',
            name: '张三'
          },
          username5: {
            headline: '标题5',
            article: '正文5',
            time: '2018-06-23',
            name: '张三'
          },
          username6: {
            headline: '标题6',
            article: '正文6',
            time: '2018-06-23',
            name: '张三'
          }
        }
      }
    }
  }

</script>

<style>
  .needList{
    width: 100%;
    background-color: #EDF0F2;
    padding: 10px 0;
  }
  .needList .item{
    width: 90%;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .needList .item .headline{
    line-height: 30px;
    background-color: white;
    font-size: 14px;
    font-weight: bold;
  }
  .needList .item .headline span{
    color:#ff9900;
    margin-right:5px;
  }
  .needList .item .article{
    font-size: 12px;
    color: #999999;
    line-height: 30px;
  }
  .needList .item .bottom img{
    float: left;
    margin-right: 10px;
  }
  .needList .item .bottom .name{
    font-size: 12px;
    color: #999999;
    line-height: 30px;
  }
  .needList .item .bottom .time{
    display: inline-block;
    float: right;
    font-size: 12px;
    color: #999999;
    line-height: 30px;
  }
</style>
