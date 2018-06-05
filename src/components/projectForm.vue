<template>
  <div class="projectForm">
    <div class="input_text">
      <div class="inputbox">
        <slot name="txt1"></slot><slot name="input1"></slot>
      </div>

      <div class="inputbox">
        <slot name="txt2"></slot><slot name="input2"></slot>
      </div>

      <div class="inputbox">
        <slot name="txt3"></slot><slot name="input3"></slot>
      </div>

      <div class="inputbox">
        <slot name="txt4"></slot><slot name="input4"></slot>
      </div>

    </div>

    <div class="input_textarea">
      <slot name="textarea1"></slot>
    </div>


  </div>
</template>
<script>
  export default {
    props:[],
    data:function () {
      return{
        bol:true
      }
    }

  }
</script>
<style>
  .projectForm{

  }
  .projectForm .input_text .inputbox{
    position: relative;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: white;
  }
  .projectForm .input_text .inputbox span{
    line-height: 40px;
    margin-left: 20px;
    font-size: 14px;
  }
  .projectForm .input_text .inputbox input{
    position: absolute;
    left: 120px;
    line-height: 40px;
    font-size: 14px;
    width: 60%;
  }
  .projectForm .input_textarea textarea{
    width: 100%;
    height: 130px;
    box-sizing: border-box;
    border-radius: 5px;
    border:none;
    padding: 15px;
    font-size: 14px;
  }
</style>
