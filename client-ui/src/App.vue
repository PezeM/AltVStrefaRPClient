<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script>
if (!global.alt) {
    global.alt = {
        uiDebug: true,
        on(ev, cb) {
            console.log('Alt on', ev, cb);
        },
        emit(ev, ...args) {
            console.log('Event triggered', ev, args);
        },
    };
}

import router from './router';

export default {
    name: 'App',
};

window.onload = function() {
    alt.emit('viewLoaded');
};

alt.on('openLoginView', () => {
    console.log('Open login view inside App.vue');
    router.push('/login');
});

alt.on('openBankMenuView', bankMenuInformation => {
    console.log('openBankMenuView inside App.vue');
    router.push({ name: 'bank', params: { bankData: JSON.parse(bankMenuInformation) } });
});

alt.on('openBusinessMenu', businessInformation => {
    console.log(`Open business menu inside App.vue`);
    router.push({ name: 'businessMenu', params: { businessMenuInfo: JSON.parse(businessInformation) } });
});

alt.on('testMenu', someData => {
    router.push({ name: 'testMenu', params: { testData: JSON.parse(someData) } });
});

alt.on('openVehicleShop', (vehicleData, vehicleShopId) => {
    router.push({ name: 'vehicleShop', params: { shopId: vehicleShopId, vehicleShopData: JSON.parse(vehicleData) } });
});

alt.on('openFractionMenu', (fractionType, fractionData) => {
    console.log(`Inside openFractionMenu with fractionType = ${fractionType} and data ${JSON.stringify(fractionData, null, 4)}`);
    switch (fractionType) {
        case 1:
            router.push({ name: 'policeMenu', params: { data: JSON.parse(fractionData) } });
            break;
        case 2:
            router.push({ name: 'samsMenu', params: { data: JSON.parse(fractionData) } });
            break;
        case 3:
            router.push({ name: 'townHallMainPage', params: { data: fractionData } });
            break;

        default:
            console.log(`Error in opening fraction menu with type: ${fractionType}`);
            break;
    }
});

alt.on('closeMenu', () => {
    console.log('Changing the router to emtpy');
    router.push('/empty');
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
    padding: 0;
    margin: 0;
    outline: none;
}

*:focus {
    outline: none !important;
}

html,
body {
    background-color: transparent !important;
    user-select: none;
    font-family: 'Roboto', sans-serif !important;
}

#app {
    height: 100%;
    width: 100%;
}
</style>
