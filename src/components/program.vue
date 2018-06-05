<template>
  <div class="program" :class="{'hot':hotStyle}">
    <div class="program-left">
      <slot name="program-left-img"></slot>
      <span>
        {{program_name}}
      </span>
    </div>
    <div class="program-right">
      <slot name="program-right-img"></slot>
    </div>
  </div>
</template>


<script>
  export default {
    props:{
      program_name:{
        type:String,
        default:""
      },
      hotStyle:{
        type:String,
        default:false
      }
    }
  }
</script>

<style>
  .program{
    width: 100%;
    height: 40px;
    position: relative;
    font-size: 12px;
    color: #ff9900;
  }
  .program-left{
    padding-left: 10px;
    line-height: 40px;
    text-indent: 2em;
  }
  .program .program-left img{
    width: 18px;
    position: absolute;
    top:10px;
    left: 5px;
  }
  .program .program-right img{
    width: 15px;
    position: absolute;
    top:12px;
    right: 15px;
  }
  .hot{
    border-bottom: none;
    color: orange;
  }
  .hot :before{
    content: "";
    width: 5px;
    height: 25px;
    background: orange;
    position: absolute;
    left: 0;
    top:8px;
  }
</style>
