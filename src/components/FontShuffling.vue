<template>
  <div class="FontShuffling">
    <marquee>{{marqueeTxt}}</marquee>
  </div>
</template>

<script>
  export default {
    props:['marqueeTxt']
  }
</script>
<style>
  .FontShuffling{
    height: 40px;
  }
  .FontShuffling marquee{
    line-height: 40px;
    font-size: 14px;
    color: #999999;
  }
</style>
