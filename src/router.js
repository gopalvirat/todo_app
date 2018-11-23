
import VueRouter from 'vue-router';

import Home from './components/Home'
import Add  from './components/Todo/Add'
import ViewTodo from './components/Todo/ViewTodo'
import EditTodo from './components/Todo/EditTodo'
// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
const routes = [
  { path: '/', component: Home,name: 'home' },
  { path:'/todo/add',component:Add},
  { path:'/todo/:id', name: 'todo',component:ViewTodo},
  { path:'/todo/edit/:id', name: 'todoEdit',component:EditTodo},
  
  { path: '/bar', component: Bar }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})


export default router;