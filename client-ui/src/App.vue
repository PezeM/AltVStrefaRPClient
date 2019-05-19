<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
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
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
