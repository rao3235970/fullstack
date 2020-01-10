import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleList from '../views/ArticleList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    children:[
      {path: '/categories/edit/:id', component: CategoryEdit, props: true},
      {path: '/categories/create', component: CategoryEdit},
      {path: '/categories/list', component: CategoryList},

      {path: '/items/edit/:id', component: ItemEdit, props: true},
      {path: '/items/create', component: ItemEdit},
      {path: '/items/list', component: ItemList},

      {path: '/heroes/edit/:id', component: HeroEdit, props: true},
      {path: '/heroes/create', component: HeroEdit},
      {path: '/heroes/list', component: HeroList},

      {path: '/articles/edit/:id', component: ArticleEdit, props: true},
      {path: '/articles/create', component: ArticleEdit},
      {path: '/articles/list', component: ArticleList},
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
