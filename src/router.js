import Vue from 'vue';
import Router from 'vue-router';
import LoginIn from './components/LoginIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginIn },
  ],
});
