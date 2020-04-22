import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import {
  Home, PropertySetup,
  ListRoomCategory, AddRoomCategory, EditRoomCategory,
  ListRoom, AddRoom, EditRoom
} from '../views'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, layout: 'default-layout' },
  { path: '/property-setup', name: 'Property Setup', component: PropertySetup, layout: 'default-layout' },
  { path: '/room-category/list', name: 'List Room Category', component: ListRoomCategory, layout: 'default-layout' },
  { path: '/room-category/add', name: 'Add Room Category', component: AddRoomCategory, layout: 'default-layout' },
  { path: '/room-category/edit/:id', name: 'Edit Room Category', component: EditRoomCategory, layout: 'default-layout' },
  { path: '/room/list', name: 'List Room', component: ListRoom, layout: 'default-layout' },
  { path: '/room/add', name: 'Add Room', component: AddRoom, layout: 'default-layout' },
  { path: '/room/edit/:id', name: 'Edit Room', component: EditRoom, layout: 'default-layout' },
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
