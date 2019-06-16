<template>
    <div id="login-window" @click="clickOnLogin">
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../../router';
import EventBus from '@/event-bus.js';

export default {
    name: 'login',
    methods: {
        clickOnLogin() {
            console.log(`Click inside Login.vue`);
        },
    },
};

alt.on('succesfullyLoggedIn', characterList => {
    console.log('Inside Login.vue succesfullyLoggedIn with data ' + JSON.stringify(characterList));
    router.push({
        name: 'characters',
        params: { charactersList: JSON.parse(characterList) },
    });
});

alt.on('hideCharacterSelectWindow', () => {
    router.push('/empty');
});

EventBus.$on('loggedIn', () => {
    var data = [
        {
            Id: 15,
            FirstName: '2',
            LastName: '2',
            BackgroundImage: 'profile-card-background.jpg',
            ProfileImage: 'default-profile-image.jpg',
            TimePlayed: 55,
        },
    ];

    router.push({ name: 'characters', params: { charactersList: data } });
});
</script>

<style scoped>
#login-window {
    height: 100%;
    width: 100%;
}
</style>
