/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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

import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/litera/bootstrap.min.css';
import Vue from 'vue';
import EventBus from './event-bus';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
