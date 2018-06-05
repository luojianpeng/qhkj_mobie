import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '../components/tabbar.vue'
Vue.use(Router);
/*一级页面*/
import Home from '../pages/home/home.vue'
import Member from '../pages/member/member.vue'
import Need from '../pages/need/need.vue'
import Shoping from '../pages/shopping/shopping.vue'
import Service from '../pages/service/service.vue'
/*二级页面*/
import SendNeed from '../pages/second/sendNeed.vue'
import CollectNeed from '../pages/second/CollectNeed.vue'
/*知识产权跳转页面*/
import Zscqlist from '../pages/second/zscq/zscqlist.vue'
import Trademark from '../pages/second/zscq/trademark.vue'
import Patent from '../pages/second/zscq/patent.vue'
import Copyright from '../pages/second/zscq/copyright.vue'
/*知委律师跳转页面*/
import ZwlsList from '../pages/second/zwls/zwlsList.vue'
import RjdkList from '../pages/second/rjdk/rjdkList.vue'
import JrfwList from '../pages/second/jrfw/jrfwList.vue'

import Zhichanjy from '../pages/second/Zhichanjy/Zhichanjy.vue'
import Dingzhifw from '../pages/second/dingzhifw/dingzhifw.vue'
import Xuanshangfb from '../pages/second/xuanshangfb/xuanshangfb.vue'
import Qiyecx from '../pages/second/qiyecx/qiyecx.vue'

import Biaozhunfw from '../pages/second/biaozhunfw/biaozhunfw.vue'
import Zhaobiaoxz from '../pages/second/zhaobiaoxz/zhaobiaoxz.vue'
import Tuijianhd from '../pages/second/tuijianhd/tuijianhd.vue'
import Litongtx from '../pages/second/litongtx/litongtx.vue'
import Zhaobiaomore from '../pages/second/zhaobiaoxz/zhaobiaomore.vue'

import Xinwenzx from '../pages/second/xinwenzx/xinwenzx.vue'
import Xinwenshow from '../pages/second/xinwenzx/xinwenshow.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/need',
      name: 'Need',
      component: Need,
      children:[
        {path:'',component:CollectNeed},
        {path:'sendNeed',component:SendNeed},
        {path:'collectNeed',component:CollectNeed}
      ]
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shoping

    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/zscqlist',
      name: 'Zscqlist',
      component: Zscqlist,
      children:[
        {path:'',component:Trademark},
        {path:'trademark',component:Trademark},
        {path:'patent',component:Patent},
        {path:'copyright',component:Copyright}
      ]
    },
    {
      path: '/zwlsList',
      name: 'ZwlsList',
      component: ZwlsList,
    },
    {
      path: '/rjdkList',
      name: 'RjdkList',
      component: RjdkList,
    },
    {
      path: '/jrfwList',
      name: 'JrfwList',
      component: JrfwList,
    },
    {
      path: '/biaozhunfw',
      name: 'Biaozhunfw',
      component: Biaozhunfw,
    },
    {
      path: '/dingzhifw',
      name: 'Dingzhifw',
      component: Dingzhifw,
    },
    {
      path: '/xuanshangfb',
      name: 'Xuanshangfb',
      component: Xuanshangfb,
    },
    {
      path: '/qiyecx',
      name: 'Qiyecx',
      component: Qiyecx,
    },
    {
      path: '/zhichanjy',
      name: 'Zhichanjy',
      component: Zhichanjy,
    },
    {
      path: '/zhaobiaoxz',
      name: 'Zhaobiaoxz',
      component: Zhaobiaoxz,
    },
    {
      path: '/zhaobiaomore',
      name: 'Zhaobiaomore',
      component: Zhaobiaomore,
    },
    {
      path: '/tuijianhd',
      name: 'Tuijianhd',
      component: Tuijianhd,
    },
    {
      path: '/litongtx',
      name: 'Litongtx',
      component: Litongtx,
    },
    {
      path: '/xinwenzx',
      name: 'Xinwenzx',
      component: Xinwenzx,
    },
    {
      path: '/xinwenshow',
      name: 'Xinwenshow',
      component: Xinwenshow,
    },
  ]
})
