// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
//import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from '@/components/home'
import Start from '@/components/start'

import About from '@/components/about'
import Daily from '@/components/daily'
import Disclaimer from '@/components/disclaimer'
import Spread from '@/components/spread'
import SpreadResult from '@/components/spreadresult'

import Storage from 'vue-ls'

import { XButton,Divider,Flexbox,FlexboxItem } from 'vux'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.component('XButton', XButton)
Vue.component('divider', Divider)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

Vue.use(Storage)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},{
  path: '/start',
  component:Start,
},{
	path: '/about',
	component:About,
},{
	path: '/daily',
	component:Daily,
},{
	path: '/disclaimer',
	component:Disclaimer,
},{
	path: '/spread',
	component:Spread,
},{
	name:'result',
	path: '/result/:num',
	component:SpreadResult
}
]
const router = new VueRouter({
  routes
})


//FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
