var vehicleShop = new Vue({
    el: "#vehicleShop",
    data: {
        vehicleShopVisible: true,
        shopData: null,
    },
    methods: {
        populateShopData: function (shopData) {
            if (shopData) {
                console.log('Populating shop data');
                this.shopData = JSON.parse(shopData);
                this.vehicleShopVisible = true;
            } else {
                // Event to client to close vehicle shop
                console.log('Shop data was null');
            }
        }
    }
});

alt.on('openVehicleShop', (shopData) => {
    vehicleShop.populateShopData(shopData);
});