<template>
  <div id="town-hall-view">
    <div class="town-hall-view container">
      <div class="row h-100">
        <div class="col-3 side-menu">
          <div class="row">
            <div class="col p-0">
              <div class="name-header">
                <h2 class="name-text">Urząd Miasta</h2>
              </div>
              <div class="logo-container">
                <img src="@/assets/images/townHallLogo.png" class="town-hall-logo">
              </div>
              <ul class="side-menu-list">
                <li
                  v-for="item in sideMenuItems"
                  :key="item.page"
                  :class="{ active: item.page == currentMenuName}"
                >
                  <div class="menu-item" @click="sideMenuPage(item)">
                    <v-icon :name="item.icon"/>
                    <span>{{ item.page }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="row">
            <town-hall-navbar
              v-bind:searchQueries="searchQueries"
              v-on:close-menu="closeMenu"
              v-on:search-result="onNavbarSearch"
            ></town-hall-navbar>
          </div>
          <div class="row no-gutters fraction-town-hall-content">
            <router-view :data="fractionData" @update-menu-name="updateMenuName"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/dollar-sign';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/university';
import 'vue-awesome/icons/user-tag';
import 'vue-awesome/icons/money-bill-wave';
import 'vue-awesome/icons/city';
import Icon from 'vue-awesome/components/Icon';
import TownHallNavbar from '@/components/Fractions/TownHallNavbar.vue';
import router from '@/router';

export default {
    name: 'townHallView',
    components: {
        TownHallNavbar,
        'v-icon': Icon,
    },
    props: {
        fractionData: {
            type: Object,
            default: function() {
                return {
                    id: 2,
                    money: 10000.32,
                    employeesCount: 4,
                    rolesCount: 5,
                    creationDate: '2019-06-08',
                    vehicleTax: 0.3,
                    propertyTax: 0.25,
                    gunTax: 0.18,
                    globalTax: 0.1,
                };
            },
        },
    },
    data() {
        return {
            searchQueries: [
                { id: 1, displayName: 'Pracownicy', action: 'employeesPage', description: 'Przejdź do strony z pracownikami' },
                { id: 2, displayName: 'Stanowiska', action: 'rolesPage', description: 'Przejdź do strony z rolami' },
                { id: 3, displayName: 'Wyjdź', action: 'closeMenu', description: 'Wyjdź z menu' },
                { id: 4, displayName: 'Podatki i finanse', action: 'taxesPage', description: 'Przejdź do strony z podatkami i finansami' },
                { id: 5, displayName: 'Mieszkańcy', action: 'residentsPage', description: 'Przejdź do strony z listą mieszkańców' },
                { id: 6, displayName: 'Główna', action: 'mainPage', description: 'Przejdź do strony głównej' },
                { id: 7, displayName: 'Rejestracja', action: 'registrationPage', description: 'Przejdź do strony rejestracji' },
            ],
            sideMenuItems: [
                { icon: 'home', page: 'Strona główna', action: 'mainPage' },
                { icon: 'university', page: 'Rejestracja', action: 'registrationPage' },
                { icon: 'users', page: 'Pracownicy', action: 'employeesPage' },
                { icon: 'user-tag', page: 'Stanowiska', action: 'rolesPage' },
                { icon: 'dollar-sign', page: 'Podatki i finanse', action: 'taxesPage' },
                { icon: 'city', page: 'Spis mieszkańców', action: 'residentsPage' },
                { icon: 'times', page: 'Wyjdź', action: 'closeMenu' },
            ],
            currentMenuName: 'Strona główna',
        };
    },
    methods: {
        onNavbarSearch(action) {
            this.changePage(action);
        },
        sideMenuPage(newPage) {
            this.changePage(newPage.action);
        },
        changePage(action) {
            switch (action) {
                case 'mainPage':
                    router.push({ name: 'townHallMainPage', params: { data: this.fractionData } });
                    break;
                case 'registrationPage':
                    alt.emit('tryToOpenFractionRegistrationPage', this.fractionData.id);
                    break;
                case 'employeesPage':
                    alt.emit('tryToOpenFractionEmployeesPage', this.fractionData.id);
                    break;
                case 'rolesPage':
                    alt.emit('tryToOpenFractionRolesPage', this.fractionData.id);
                    break;
                case 'taxesPage':
                    alt.emit('tryToOpenFractionTaxesPage', this.fractionData.id);
                    break;
                case 'residentsPage':
                    alt.emit('tryToOpenFractionResidentsPage', this.fractionData.id);
                    break;
                case 'closeMenu':
                    this.closeMenu();
                    break;
            }
        },
        updateMenuName(menuName) {
            this.currentMenuName = menuName;
        },
        closeMenu() {
            alt.emit('closeFractionMenu');
        },
    },
};

alt.on('openFractionsResidentsPage', onlineResidents => {
    router.push({ name: 'townHallResidentsPage', params: { residentsData: JSON.parse(onlineResidents) } });
});
</script>

<style>
#town-hall-view {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.town-hall-view {
    /* width: 75rem;
    height: 45rem; */
    max-height: 45rem;
    position: relative;
    background-color: #f8f9fa;
    color: rgb(0, 0, 0);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.1);
}

.fraction-town-hall-content {
    /* padding: 16px; */
    margin: 16px;
    height: 100%;
}

.town-hall-view .side-menu {
    background-color: #191f28;
}

.town-hall-view .name-header {
    text-align: center;
    padding-top: 2em;
}

.name-header .name-text {
    color: #f8f9fa;
    margin-bottom: 1em;
}

.side-menu .logo-container {
    text-align: center;
    padding-bottom: 2em;
}

.logo-container .town-hall-logo {
    width: 9em;
    height: 8em;
}

.side-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.side-menu ul li {
    display: block;
}

.side-menu .menu-item {
    text-decoration: none;
    letter-spacing: 0.03em;
    color: #8e8e8e;
    display: block;
    padding: 18px 25px;
    font-size: 0.8em;
}

.side-menu .menu-item span {
    margin-left: 12px;
}

.side-menu .menu-item:hover {
    cursor: pointer;
    color: #fff;
    background: linear-gradient(
        to right,
        rgba(239, 160, 50, 0.51) 0%,
        rgba(212, 166, 94, 0) 24%,
        rgba(191, 171, 127, 0) 42%,
        rgba(125, 185, 232, 0) 100%
    );
}

.side-menu-list .active {
    background: linear-gradient(
        to right,
        rgba(239, 160, 50, 0.51) 0%,
        rgba(212, 166, 94, 0) 24%,
        rgba(191, 171, 127, 0) 42%,
        rgba(125, 185, 232, 0) 100%
    );
}

.side-menu-list .active span {
    color: #fff;
    font-weight: 500;
}

.side-menu-list .active .fa-icon {
    background: linear-gradient(to right, rgba(254, 163, 82, 1) 0%, rgba(255, 99, 124, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 100;
    color: white;
}
</style>
