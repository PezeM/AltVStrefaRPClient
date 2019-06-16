<template>
  <div id="town-hall-view">
    <div class="town-hall-view container-fluid">
      <div class="row h-100">
        <div class="col-3 side-menu">
          <div class="row">
            <div class="col">
              <div class="name-header">
                <h2 class="name-text">Urząd Miasta</h2>
              </div>
              <div class="logo-container">
                <img src="@/assets/images/townHallLogo.png" class="town-hall-logo">
              </div>
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
          <div class="row">Tutaj bedzie stronka</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TownHallNavbar from '@/components/Fractions/TownHallNavbar.vue';

export default {
    name: 'townHallView',
    data() {
        return {
            searchQueries: [
                { id: 1, displayName: 'Pracownicy', action: 'employeesPage', description: 'Przejdź do strony z pracownikami' },
                { id: 2, displayName: 'Role', action: 'rolesPage', description: 'Przejdź do strony z rolami' },
                { id: 3, displayName: 'Wyjdź', action: 'closeMenu', description: 'Wyjdź z menu' },
            ],
        };
    },
    components: {
        TownHallNavbar,
    },
    methods: {
        onNavbarSearch(action) {
            console.log(`Action = ` + action);
            switch (action) {
                case 'employeesPage':
                    alt.emit('tryToOpenFractionEmployeesPage');
                    break;
                case 'rolesPage':
                    alt.emit('tryToOpenFractionRolesPage');
                    break;
                case 'closeMenu':
                    this.closeMenu();
                    break;
            }
        },
        closeMenu() {
            alt.emit('closeFractionMenu');
        },
    },
};
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
    width: 75rem;
    height: 45rem;
    position: relative;
    background-color: #f8f9fa;
    color: rgb(0, 0, 0);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.1);
}

.town-hall-view .side-menu {
    height: 100%;
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
</style>
