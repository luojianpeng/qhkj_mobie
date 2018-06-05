<template>
  <div class="news_list">

    <router-link to="/xinwenshow">
      <div class="news_xl">
        <img src="../assets/images/two_line_four_1.png" alt="">
        <div class="news_xl_right">
          <h4>推荐栏目一</h4>
          <p>推荐栏目内容</p>
        </div>
      </div>
    </router-link>

    <router-link to="/xinwenshow">
    <div class="news_l" v-for="item in obj">
      <p>{{item.bt}}</p>
      <span>{{item.time}}</span>
    </div>
    </router-link>

    <router-link to="/xinwenzx">
    <div class="news_m" v-if="moreshow" @click="fn">
      <span>查看更多</span>
      <img src="../assets/images/right_icon.png" alt="">
    </div>
    </router-link>
  </div>
</template>

<script>

  export default {
    props:{
      moreshow:{
        type:String,
        default:false
      }
    },
    data:function () {
      return {
        obj:{
          username1:{
            bt:'标题1',
            zw:'正文1',
            time:'08-19'
          },
          username2:{
            bt:'标题2',
            zw:'正文2',
            time:'08-18'
          },
          username3:{
            bt:'标题3',
            zw:'正文3',
            time:'08-17'
          },
          username4:{
            bt:'标题4',
            zw:'正文4',
            time:'08-16'
          },
          username5:{
            bt:'标题5',
            zw:'正文5',
            time:'08-15'
          },
          username6:{
            bt:'标题6',
            zw:'正文6',
            time:'08-14'
          }
        }
      }
    },
    methods:{
      fn:function () {
        console.log(this.moreshow)
      }
    }
  }
</script>


<style>
  .news_list{
    width: 100%;
    background-color: #ffffff;
  }
  .news_list .news_xl,.news_l,.news_m{
    width: 90%;
    margin: 0 auto;
  }
  .news_list .news_xl{
    height: 75px;
    padding: 10px 0;
  }
  .news_list .news_xl img{
    width: 70px;
    height: 70px;
    float: left;
    display: inline-block;
    margin-right: 10px;
  }
  .news_list .news_xl div h4{
    font-size: 14px;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }
  .news_list .news_xl div p{
    font-size: 14px;
    line-height: 20px;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news_l,.news_m{
    border-top:1px solid #eeeeee;
    height: 45px;
  }
  .news_l span{
    float: right;
    font-size: 12px;
    color: #999999;
    display: inline-block;
    line-height: 45px;
  }
  .news_l p{
    width: 80%;
    display: inline-block;
    font-size: 12px;
    line-height: 45px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .news_m img{
    width: 15px;
    margin-top: 15px;
    float: right;
    display: inline-block;
  }
  .news_m span{
    font-size: 12px;
    line-height: 45px;
    display: inline-block;
    color: #588FC8;
  }
</style>
