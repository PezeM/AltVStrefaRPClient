<template>
  <div id="login-window">
    <!-- <login-window></login-window> -->
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../../router';
import { EventBus } from '@/event-bus.js';

export default {
    name: 'login'
};

alt.on('succesfullyLoggedIn', characterList => {
    router.push('/login/characters');
    EventBus.$emit('succesfullyLoggedIn', characterList);
});
</script>

