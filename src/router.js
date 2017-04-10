import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)

import Login from './pages/login.vue'
import Home from './pages/home.vue'

export const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        { path: '/login', name:'login', component: Login},
        { path: '/home', name:'home', component: Home },
        
    ]
});

