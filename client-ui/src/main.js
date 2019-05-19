/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

if (!global.alt) {
    global.alt = {
        uiDebug: true,
        on(ev, cb) {
            console.log('Alt on', ev, cb);
        },
        emit(ev, ...args) {
            console.log('Event triggered', ev, args);
        }
    };
}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
