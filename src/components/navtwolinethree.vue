<template>
  <div class="two_line_three">
    <div class="line_one">
      <div class="icon border_right">
        <router-link to="/xinwenzx">
            <slot  name="line_three_img_1" ></slot>
            <slot  name="line_three_changImg_1" ></slot>
          <span>{{nav_name1}}</span>
        </router-link>
      </div>
      <div class="icon border_right">
          <slot  name="line_three_img_2" ></slot>
          <slot  name="line_three_changImg_2" ></slot>
        <span>{{nav_name2}}</span>
      </div>
      <div class="icon">
          <slot  name="line_three_img_3" ></slot>
          <slot  name="line_three_changImg_3" ></slot>
        <span>{{nav_name3}}</span>
      </div>
    </div>
    <div class="line_two">
      <div class="icon border_right">
          <slot  name="line_three_img_4" ></slot>
          <slot  name="line_three_changImg_4" ></slot>
        <span>{{nav_name4}}</span>
      </div>
      <div class="icon border_right">
          <slot  name="line_three_img_5" ></slot>
          <slot  name="line_three_changImg_5" ></slot>
        <span>{{nav_name5}}</span>
      </div>
      <div class="icon">
          <slot  name="line_three_img_6"></slot>
          <slot  name="line_three_changImg_6" ></slot>
        <span>{{nav_name6}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['nav_name1','nav_name2','nav_name3','nav_name4','nav_name5','nav_name6',]
  }
</script>

<style>
  .two_line_three{
    width: 100%;
    background-color: #ffffff;
    font-size: 0;
    text-align: center;
    margin-top: 8px;
  }
  .two_line_three .line_one{
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }
  .two_line_three .line_two{
    width: 100%;
  }
  .two_line_three .line_one .icon{
    width: 33%;
    display: inline-block;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .two_line_three .line_one .icon span{
    font-size: 12px;

  }

  .two_line_three .line_two .icon{
    width: 33%;
    display: inline-block;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .two_line_three .line_two .icon span{
    font-size: 12px;
  }
  .two_line_three img{
    width: 30px;
    height: 30px;
    display: block;
    margin: 10px auto;
  }
  .two_line_three .border_right{
    border-right: 1px solid #eeeeee;
  }
</style>
