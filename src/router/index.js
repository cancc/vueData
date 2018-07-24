import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import PartOne from '@/pages/home/components/PartOne'
import PartTwo from '@/pages/home/components/PartTwo'
import PartThree from '@/pages/home/components/PartThree'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      // alias: '/city',
      component: Home,
      children: [{
        path: 'partOne',
        component: PartOne,
        // redirect: 'PartThree',
       
      },{
        path: 'partTwo',
        component: PartTwo
      },{
        path: 'partThree',
        component: PartThree
      }]
    },{
      path:'/city',
      name: 'City',
      component: City
    }],
    scrollBehavior(to, from, savedPosition) {
      return {x:0,y:0}
    }
})
