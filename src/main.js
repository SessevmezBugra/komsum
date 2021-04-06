import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Register },
    { path: '/home', component: Home }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
