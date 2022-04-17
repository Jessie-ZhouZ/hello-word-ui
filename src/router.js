import Vue from 'vue';
import Router from 'vue-router';
import LoginIn from './components/LoginIn.vue';
import HomePage from './components/HomePage.vue';
import WelcomePage from './components/WelcomePage.vue';
import UsersPage from './components/user/UsersPage.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginIn },
    {
      path: '/home',
      component: HomePage,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: WelcomePage },
        { path: '/users', component: UsersPage },
        { path: '/roles', component: UsersPage },
        { path: '/rights', component: UsersPage },
        { path: '/users', component: UsersPage },
      ],
    },
  ],
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从那个路径跳转而来
  // next 是一个函数，表示放行
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
});
export default router;
