<template>
  <div class="member">

    <Search headerT="个人中心" bol="true">
      <img src="../../assets/images/left_icon.png" slot="leftImg" class="leftImg">
    </Search>

    <Userhead></Userhead>
    <Program program_name="我的订单" style="border-bottom: 1px solid #eeeeee; margin-top: 8px">
      <img slot="program-left-img" src="../../assets/images/member_1.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="收货地址" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_2.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>

    <Program program_name="账户余额" style="border-bottom: 1px solid #eeeeee; margin-top: 8px">
      <img slot="program-left-img" src="../../assets/images/member_3.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="我的积分" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_4.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="站内短信" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_5.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="最近访客" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_6.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>

    <Program program_name="个人资料" style="border-bottom: 1px solid #eeeeee; margin-top: 8px">
      <img slot="program-left-img" src="../../assets/images/member_7.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="修改密码" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_8.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
    <Program program_name="退出登录" style="border-bottom: 1px solid #eeeeee">
      <img slot="program-left-img" src="../../assets/images/member_9.png" alt="">
      <img slot="program-right-img" src="../../assets/images/right_icon.png" alt="">
    </Program>
  </div>
</template>
<script>
  import Userhead from '../../components/userhead.vue'
  import Program from '../../components/program.vue'
  import Search from '../../components/search.vue'

  export default {
    components:{
      Userhead,Program,Search
    },
  }

</script>

<style>
  .member{
    background-color: #f3f0f0;
  }
  .member .program{
    background-color: white;
  }
  .member .program span{
    color: #222222;
  }
</style>
