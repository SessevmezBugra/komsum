import Vue from "vue";
import VueRouter from "vue-router";

import App from './App.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import PostList from './components/post/PostList.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";
import Keycloak from "keycloak-js";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.use(VueAxios, axios)


const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Home },
    { path: '/post', component: PostList },
]


const router = new VueRouter({
    routes // short for `routes: routes`
});

let initOptions = {
    url: process.env.VUE_APP_KEYCLOAK_URI + '/auth', realm: 'komsumdannehaber', clientId: 'ui-app', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        console.log("Authenticated");

        new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App, { props: { keycloak: keycloak } })
        }).$mount("#app");
    }


    //Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log('Token refreshed' + refreshed);
            } else {
                console.log('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.log('Failed to refresh token');
        });
    }, 6000)

}).catch(() => {
    console.log("Authenticated Failed");
});