<template>
  <div id="login-window">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../../router';
import EventBus from '@/event-bus.js';

export default {
    name: 'login'
};

alt.on('succesfullyLoggedIn', characterList => {
    router.push('/login/characters');
    console.log(
        'Inside Login.vue succesfullyLoggedIn with data ' +
            JSON.stringify(characterList)
    );
    let newCharacterList = JSON.parse(characterList);
    EventBus.$emit('succesfullyLoggedIn', newCharacterList);
});

alt.on('hideCharacterSelectWindow', () => {
    router.push('/empty');
});
</script>

<style scoped>
#login-window {
    height: 100%;
    width: 100%;
}
</style>


