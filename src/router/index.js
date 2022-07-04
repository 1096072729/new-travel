import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/city',
    name: 'City',

    component: () => import('../views/city/CityView.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',

    component: () => import('../views/detail/DetailView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
