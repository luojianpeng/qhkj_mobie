<template>
  <div class="carousel">
    <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
        <slot name="swiper-icon"></slot>
      </div>
      <div :class='{"swiper-pagination":paginationshow}' :style="{'text-align':paginationdesition}"></div>
    </div>
  </div>
</template>

<script>
  import '../../static/swiper/js/swiper'
  export default {
    props:{
      swiperid:{//设置轮播id
        type:String,
        default:''
      },
      paginationshow:{//设置分页是否显示
        type:Boolean,
        default:true
      },
      paginationdesition:{//设置分页器显示位置
        type:String,
        default:'center'
      },
      paginationType:{//设置分页器类型
        type:String,
        default:'bullets'
      },
      autoplay:{//设置轮播时间
        type:Number,
        default:3000
      },
      loop:{//设置是否循环
        type:Boolean,
        default:true
      },
      direction:{ //设置轮播方向
        type:String,
        default:'horizontal'
      },
      effect:{
        type:String,
        default:'slide'
      },
    },
    mounted:function () { //钩子函数提前加载
      var that = this;
      new Swiper('.'+that.swiperid,{
        direction: that.direction,
        loop: that.loop,
        pagination:'.swiper-pagination',
        paginationType:that.paginationType,
        autoplay: that.autoplay,
        effect: that.effect
      })
    }
  }
</script>

<style>
  @import "../../static/swiper/css/swiper.css";
  .carousel{
    width: 100%;
    height: 190px;
    overflow: hidden;
    margin-top: -1px;
    background-color: #ff9900;
  }
  .carousel .swiper-container .swiper-wrapper img{
    width: 100%;
    height: 190px;
  }
  .swiper-pagination-bullet-active{
    background: white;
  }
</style>
