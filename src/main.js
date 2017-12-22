// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VURouter from 'vue-router'
import apple from './components/apple.vue'
import bannan from './components/bannan.vue'
import redApple from './components/redApple.vue'
Vue.config.productionTip = false
 Vue.use(VURouter)
 let router = new VURouter({
    mode:'history',
    routes:[
      {path:'/bannan',
      component:{template:'<p>i am bannan</p>'}
      },
      {
        path:'/apple',
        component:apple,
        children:[
            {
              path:'red',
              component:redApple
            }
         ]
      }
    ]
 })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
