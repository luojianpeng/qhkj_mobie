<template>
  <div class="two_line_four">
    <div class="line_one">
      <div class="icon">
        <router-link to="/biaozhunfw">
        <slot  name="line_four_img_1" ></slot>
        <span>{{nav_name1}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/dingzhifw">
        <slot  name="line_four_img_2" ></slot>
        <span>{{nav_name2}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/xuanshangfb">
        <slot  name="line_four_img_3" ></slot>
        <span>{{nav_name3}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/qiyecx">
        <slot  name="line_four_img_4" ></slot>
        <span>{{nav_name4}}</span>
        </router-link>
      </div>

    </div>
    <div class="line_two">
      <div class="icon">
        <router-link to="/zhichanjy">
        <slot  name="line_four_img_5" ></slot>
        <span>{{nav_name5}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/zhaobiaoxz">
        <slot  name="line_four_img_6" ></slot>
        <span>{{nav_name6}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/litongtx">
        <slot  name="line_four_img_7" ></slot>
        <span>{{nav_name7}}</span>
        </router-link>
      </div>

      <div class="icon">
        <router-link to="/tuijianhd">
        <slot  name="line_four_img_8" ></slot>
        <span>{{nav_name8}}</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props:['nav_name1','nav_name2','nav_name3','nav_name4','nav_name5','nav_name6','nav_name7','nav_name8',],
  }
</script>

<style>
  .two_line_four{
    width: 100%;
    padding: 10px 0;
    background-color: #ffffff;
    font-size: 0;
    margin-top: 8px;
  }
  .two_line_four .line_one{
    padding: 0 10px;
  }
  .two_line_four .line_two{
    padding: 0 10px;
  }
  .two_line_four .line_one .icon{
     width: 25%;
     display: inline-block;
    font-size: 12px;
    text-align: center;
    padding: 10px 0;
   }
  .two_line_four .line_two .icon{
    width: 25%;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    padding: 10px 0;
  }
  .two_line_four .line_one .icon img{
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto 8px;
  }
  .two_line_four .line_two .icon img{
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto 8px;
  }
</style>
