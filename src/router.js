import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue';
import PostPage from './pages/PostPage.vue';

const routes = [
    {path: '/', name:'HomePage', component: HomePage},
    {path: '/:day', name:'Post', component: PostPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  
export default router