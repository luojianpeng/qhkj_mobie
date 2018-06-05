<template>
  <div class="nav_four" @click>
    <div class="icon" >
      <router-link to="/zscqlist">
      <slot  name="nav_four_img_1" ></slot>
      <span>{{nav_name1}}</span>
      </router-link>
    </div>

    <div class="icon">
      <router-link to="/zwlsList">
      <slot  name="nav_four_img_2" ></slot>
      <span>{{nav_name2}}</span>
      </router-link>
    </div>

    <div class="icon">
      <router-link to="/rjdkList">
      <slot  name="nav_four_img_3" ></slot>
      <span>{{nav_name3}}</span>
      </router-link>
    </div>

    <div class="icon">
      <router-link to="/jrfwList">
      <slot  name="nav_four_img_4" ></slot>
      <span>{{nav_name4}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props:['nav_name1','nav_name2','nav_name3','nav_name4'],
  }
</script>

<style>
  .nav_four{
    background-color: #ffffff;
    height: 100px;
    font-size: 0;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    margin: 8px 0 0;
  }
  .nav_four .icon{
    width: 24%;
    display: inline-block;
    margin: auto 0;
  }
  .nav_four .icon img{
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto 10px;
  }
  .nav_four .icon span{
    font-size: 12px;
  }
  .home{
    background-color: #EDF0F2;
  }
</style>
