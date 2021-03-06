import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Waiting from '../views/Waiting.vue';
import Ranking from '../views/Ranking.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Ranking,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/Waiting',
        name: 'Waiting',
        component: Waiting,
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

export default router;
