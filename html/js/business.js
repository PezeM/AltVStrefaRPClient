var businessApp = new Vue({
    el: "#businessApp",
    data: {
        businessMenuVisible: false,
        businessInfo: null,
    },
    methods: {
        showBusinessMenu: function (businessInfo) {
            this.businessInfo = businessInfo;
            this.businessMenuVisible = true;

            console.log(`Business info: ${JSON.stringify(this.businessInfo)}`);
        }
    }
});

alt.on('openBusinessMenu', (businessInfo) => {
    console.log('Opening business menu');
    businessApp.showBusinessMenu(businessInfo);
});