import Vue from "vue";
import VueRouter from "vue-router";

import App from './App.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
<<<<<<< HEAD
import Post from './pages/Post.vue'
=======
import PostList from './components/PostList.vue'
>>>>>>> f80c18755ba417940360da881658f5835fa1836d

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
<<<<<<< HEAD
    { path: '/post', component: Post },
=======
    { path: '/post', component: PostList },
>>>>>>> f80c18755ba417940360da881658f5835fa1836d
]


const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App)
<<<<<<< HEAD
}).$mount("#app");
=======
}).$mount("#app");
>>>>>>> f80c18755ba417940360da881658f5835fa1836d
