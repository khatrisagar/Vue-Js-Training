import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



// pages
import userLogin from  '@/pages/auth/user-login.page.vue'
import viewPostsPage from  '@/pages/post/view-posts.page.vue'
import viewSinglePostPage from '@/pages/post/view-single-post.page.vue'
import pageNotFOund from '@/pages/common/page-not-found.page.vue'
import addPost from  '@/pages/post/post-upsert.page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: viewPostsPage
  },
  {
    path: '/auth',
    name: 'login',
    component: userLogin
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: viewSinglePostPage
  },
  {
    path: '/add-post',
    name: 'addPost',
    component: addPost
  },
  {
    path: '/edit-post/:postId',
    name: 'editPost',
    component: addPost
  },
  {
    name: "404",
    path: "/404",
    component: pageNotFOund,
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
