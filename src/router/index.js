import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Page from '@/content/page.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children:[{
         path:'/page',
         name:'page',
         component:Page
      }]
    }
  ]
})
