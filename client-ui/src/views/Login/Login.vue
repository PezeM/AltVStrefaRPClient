<template>
    <div id="login-window">
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../../router';
import EventBus from '@/event-bus.js';

export default {
    name: 'login',
};

alt.on('succesfullyLoggedIn', characterList => {
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
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
