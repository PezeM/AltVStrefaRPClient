/* eslint-disable no-console */
/* eslint-disable no-undef */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Empty.vue'),
        },
        {
            path: '/login',
            component: () => import('./views/Login/Login.vue'),
            children: [
                {
                    path: '',
                    name: 'loginWindow',
                    component: () => import('@/components/Login/LoginWindow.vue'),
                },
                {
                    path: 'characters',
                    name: 'characters',
                    component: () => import('@/components/Login/CharacterSelect.vue'),
                    props: true,
                },
            ],
        },
        {
            path: '/bank',
            name: 'bank',
            component: () => import('./views/BankView.vue'),
            props: true,
        },
        {
            path: '/businessMenu',
            name: 'businessMenu',
            component: () => import('./views/BusinessMenuView.vue'),
            props: true,
        },
        {
            path: '/testMenu',
            name: 'testMenu',
            component: () => import('./views/TestMenuView.vue'),
            props: true,
        },
        {
            path: '/vehicleShop',
            name: 'vehicleShop',
            component: () => import('./views/VehicleShopView.vue'),
            props: true,
        },
        {
            path: '/policeMenu',
            name: 'policeMenu',
            component: () => import('./views/Empty.vue'),
            props: true,
        },
        {
            path: '/samsMenu',
            name: 'samsMenu',
            component: () => import('./views/Empty.vue'),
            props: true,
        },
        {
            path: '/townHallMenu',
            component: () => import('./views/Fractions/TownHall/TownHallView.vue'),
            props: true,
            children: [
                {
                    path: '',
                    name: 'townHallMainPage',
                    component: () => import('./views/Fractions/TownHall/MainPage.vue'),
                    props: true,
                },
                {
                    path: 'registrationPage',
                    name: 'townHallRegistrationPage',
                    component: () => import('./views/Fractions/TownHall/RegistrationPage.vue'),
                    props: true,
                },
                {
                    path: 'employeesPage',
                    name: 'townHallEmployeesPage',
                    component: () => import('./views/Fractions/TownHall/EmployeesPage.vue'),
                    props: true,
                },
                {
                    path: 'ranksPage',
                    name: 'townHallRanksPage',
                    component: () => import('./views/Fractions/TownHall/RanksPage.vue'),
                    props: true,
                },
                {
                    path: 'residentsPage',
                    name: 'townHallResidentsPage',
                    component: () => import('./views/Fractions/TownHall/ResidentsPage.vue'),
                    props: true,
                },
                {
                    path: 'taxesPage',
                    name: 'townHallTaxesPage',
                    component: () => import('./views/Fractions/TownHall/TaxesPage.vue'),
                    props: true,
                },
            ],
        },
        {
            path: '/empty',
            name: 'empty',
            component: () => import('./views/Empty.vue'),
        },
    ],
});
