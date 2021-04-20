import Vue from "vue";
import VueRouter from "vue-router";

import App from './App.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import PostList from './components/PostList.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Home },
    { path: '/post', component: PostList },
]


const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");