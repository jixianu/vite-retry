import { createRouter, createWebHistory } from 'vue-router';
// import IndexPage from '../views/index.vue';
// import HomePage from '../views/home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            title: '首页1',
            component: () => import('../views/index.vue'),
            // component: IndexPage,
        },
        {
            path: '/home',
            name: 'home',
            title: '首页',
            component: () => import('../views/home.vue'),
            // component: HomePage
        },
    ],
});

export default router;
