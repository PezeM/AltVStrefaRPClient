<template>
  <div id="app">
    <router-view/>
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
        }
    };
}

import router from './router';

export default {
    name: 'App'
};

window.onload = function() {
    alt.emit('viewLoaded');
};

alt.on('openLoginView', () => {
    console.log('Open login view inside App.vue');
    router.push('/login');
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
    font-family: 'Roboto', sans-serif;
}

#app {
    height: 100%;
    width: 100%;
}
</style>
