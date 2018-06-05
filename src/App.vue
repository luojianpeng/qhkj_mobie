<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar.vue'
  export default {
    name: 'App',
    components:{
      Tabbar
    },
    beforeCreate:function () {
      this.$router.push('/')
    }
  }
</script>

<style>
  *{word-wrap:break-word}
  html,body,h1,h2,h3,h4,h5,h6,hr,p,iframe,dl,dt,dd,ul,ol,li,pre,form,button,input,textarea,th,td,fieldset{margin:0;padding:0}
  ul,ol,dl{list-style-type:none}
  html,body{*position:static;width: 100%;height: 100%;}
  table { border-collapse: collapse; border-spacing: 0; border:0; }
  input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}
  textarea{outline: none;resize: none;}
  input,button{overflow: visible;vertical-align:middle;outline:none;border: 0;}
  a{text-decoration: none!important;color: black!important;}
  img{max-width: 100%;height: auto;width: auto;display: block;}
  li{list-style: none;}
  a{-webkit-tap-highlight-color: rgba(255, 255, 255, 0);-webkit-user-select: none;-moz-user-focus: none;-moz-user-select: none;-webkit-tap-highlight-color: transparent;}
  ._left-{float: left;}._right-{float: right;}
  .page{position: relative;min-height: 100%;overflow: hidden;}
  ._footer{margin-top: 13px;font-size: 12px;text-align: center;position: absolute;bottom: 15px;left: 0px;width: 100%;}
  #app{
    margin-bottom: 50px;
  }
</style>
