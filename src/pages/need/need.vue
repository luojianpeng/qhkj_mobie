<template>
  <div class="need">
    <Search bol="true">
      <img src="../../assets/images/info_icon.png" slot="rightImg" class="rightImg">
      <div slot="search" class="search-box">
        <input type="text" placeholder="搜索"/>
        <img src="../../assets/images/service.png" class="search-gray">
      </div>
    </Search>
    <div v-if="true">
      <SearchHistory>
      </SearchHistory>
    </div>

    <!--二级路由-->
    <div class="secondPage">
      <span :class="{active:navIndex==0}" @click="navIndex=0">
        <router-link to="/need/collectNeed">找需求</router-link>
      </span>

      <span :class="{active:navIndex==1}" @click="navIndex=1">
        <router-link to="/need/sendNeed">发需求</router-link>
      </span>

    </div>
    <div>
      <router-view>
      </router-view>
    </div>

  </div>
</template>

<script>
  import Search from '../../components/search.vue'
  import SearchHistory from '../../components/searchHistory.vue'

  export default {
    components:{
      Search,SearchHistory
    },
    data:function () {
      return{
        navIndex:0
      }
    }
  }

</script>

<style>
  .secondPage{
    height: 40px;
    text-align: center;
    font-size: 0;
    box-sizing: border-box;
  }
  .secondPage span a{
    width: 100%;
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    box-sizing: border-box;
  }
  .secondPage span{
    display: inline-block;
    width: 50%;
    font-size: 14px;
    height: 40px;
    box-sizing: border-box;
  }
  .secondPage .active{
    border-bottom: 2px solid #ff9900;
  }
  .secondPage .active a{
    color:#ff9900 !important;
  }
</style>
