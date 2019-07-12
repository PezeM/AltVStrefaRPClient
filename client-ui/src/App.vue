<template>
  <div id="app">
    <MainUiView id="overlay" />
    <transition name="fade" mode="out-in">
      <router-view class="menus" />
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
import MainUiView from './views/MainUiView.vue';

export default {
    name: 'App',
    components: {
        MainUiView,
    },
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

alt.on('openFractionMenu', (fractionType, fractionDatas) => {
    console.log(`Inside openFractionMenu with fractionType = ${fractionType} and data ${JSON.stringify(fractionDatas, null, 4)}`);
    switch (fractionType) {
        case 1:
            router.push({ name: 'policeMenu', params: { data: JSON.parse(fractionDatas) } });
            break;
        case 2:
            router.push({ name: 'samsMenu', params: { data: JSON.parse(fractionDatas) } });
            break;
        case 3:
            router.push({ name: 'townHallMainPage', params: { fractionProp: fractionDatas } });
            break;

        default:
            console.log(`Error in opening fraction menu with type: ${fractionType}`);
            break;
    }
});

alt.on('openPlayerInventory', (inventoryData, equippedItems, otherInventory) => {
    console.log(`Inventory data on UI ${inventoryData} equippedItems ${equippedItems} otherInventory ${otherInventory}`);
    router.push({
        name: 'inventory',
        params: { initialItems: inventoryData, initialEquippedItems: equippedItems, initialExtraInventory: otherInventory },
    });
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

#overlay,
.menus {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.menus {
    z-index: 10;
}
</style>
