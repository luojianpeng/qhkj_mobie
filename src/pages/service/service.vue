<template>
  <div>
    <Search bol="true">
      <img src="../../assets/images/info_icon.png" slot="rightImg" class="rightImg">
      <div slot="search" class="search-box">
        <input type="text" placeholder="请输入关键字"/>
        <img src="../../assets/images/service.png" class="search-gray">
      </div>
    </Search>

    <Select>
    </Select>

    <serviceList></serviceList>
  </div>
</template>

<script>
  import Search from '../../components/search.vue'
  import Select from '../../components/select.vue'
  import ServiceList from '../../components/serviceList.vue'

  export default {
    components:{
      Search,Select,ServiceList
    },
  }

</script>
