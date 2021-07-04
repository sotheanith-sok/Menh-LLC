import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TermsAndConditionsPage from '../views/TermsAndConditionsPage.vue';
import PrivacyPolicyPage from '../views/PrivacyPolicyPage.vue';
import PageNotFoundPage from '../views/PageNotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/terms-and-conditions',
        name: 'TermsAndConditionsPage',
        component: TermsAndConditionsPage,
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicyPage',
        component: PrivacyPolicyPage,
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFoundPage',
        component: PageNotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        // Always scroll to the top when direct to a next page
        return { left: 0, top: 0 };
    },
});

export default router;
