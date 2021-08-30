import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Post from '../views/PostForm.vue'

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/post',
        name: 'Post',
        component: Post,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router