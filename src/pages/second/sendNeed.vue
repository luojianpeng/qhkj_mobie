<template>
  <div class="sendneed">
    <Program program_name="选择项目类型">
      <img slot="program-left-img" src="../../assets/images/addition_fill.png" alt="">
    </Program>

    <TabbarTwo></TabbarTwo>

    <Program program_name="项目信息">
      <img slot="program-left-img" src="../../assets/images/setting.png" alt="">
    </Program>

    <FrojectForm>
      <span slot="txt1">项目名称</span><input type="text" slot="input1" placeholder="项目名称">
      <span slot="txt2">项目预算</span><input type="text" slot="input2" placeholder="项目预算">
      <span slot="txt3">项目周期</span><input type="text" slot="input3" placeholder="项目周期">
      <span slot="txt4">其他要求</span><input type="text" slot="input4" placeholder="项目要求">
      <textarea slot="textarea1" name="" id="" cols="30" rows="10" placeholder="请输入您的详细需求信息"></textarea>
    </FrojectForm>

    <Program program_name="发布者信息">
      <img slot="program-left-img" src="../../assets/images/Head_Poetraits.png" alt="">
    </Program>

    <FrojectForm>
      <span slot="txt1">姓名</span><input type="text" slot="input1" placeholder="项目名称">
      <span slot="txt2">手机</span><input type="text" slot="input2" placeholder="项目预算">
      <span slot="txt3">公司</span><input type="text" slot="input3" placeholder="项目周期">

    </FrojectForm>

    <button class="btn">发布</button>

  </div>
</template>

<script>
  import Program from '../../components/program.vue'
  import TabbarTwo from '../../components/tabbarTwo.vue'
  import FrojectForm from '../../components/projectForm.vue'
  export default {
    components:{
      Program,TabbarTwo,FrojectForm
    }

  }
</script>

<style>
  .sendneed{
    background-color: #EDF0F2;
    padding-bottom: 5px;
  }
  .btn{
    display: block;
    width: 150px;
    line-height: 40px;
    margin: 20px auto;
    background-color: #ff9900;
    border-radius: 10px;
    color: #ffffff;
  }
</style>
