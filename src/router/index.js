import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import {
  Home,
  ListMenuCategory, AddMenuCategory, EditMenuCategory,
  ListMenu, AddMenu, EditMenu
} from '../views'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, layout: 'default-layout' },
  { path: '/menu-category/list', name: 'List Menu Category', component: ListMenuCategory, layout: 'default-layout' },
  { path: '/menu-category/add', name: 'Add Menu Category', component: AddMenuCategory, layout: 'default-layout' },
  { path: '/menu-category/edit/:id', name: 'Edit Menu Category', component: EditMenuCategory, layout: 'default-layout' },
  { path: '/menu/list', name: 'List Menu', component: ListMenu, layout: 'default-layout' },
  { path: '/menu/add', name: 'Add Menu', component: AddMenu, layout: 'default-layout' },
  { path: '/menu/edit/:id', name: 'Edit Menu', component: EditMenu, layout: 'default-layout' },
]

const router = new VueRouter({
  routes: routes.map(function(route) {
    return {
      path: route.path,
      name: route.name,
      component: route.component,
      beforeEnter(to, from, next) {
        store.dispatch("LayoutModule/updateLayout", route.layout)
        next()
      }
    }
  })
})

export default router
