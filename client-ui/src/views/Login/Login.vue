<template>
  <div class="login-window">
    <login-window></login-window>
  </div>
</template>

<script>
import LoginWindow from '@/components/Login/LoginWindow.vue';
import { EventBus } from '@/event-bus.js';

alt.on('showError', message => {
    console.log('Showing error in login.js ' + message);
    LoginWindow.showError(message);
});

alt.on('registeredSuccessfully', () => {
    console.log('Registered successfully');
    LoginWindow.showError(
        `Pomyślnie założono konto z loginem ${
            loginApp.userNameRegister
        }. Możesz się teraz zalogować.`
    );
    LoginWindow.switchToLogin();
});

alt.on('loggedIn', characterList => {
    if (characterList) {
        console.log('Setting as logged and changing route');
        EventBus.$emit('loggedIn');
        LoginWindow.setAsLogged();
        // this.$router.push('/');
        // characterSelect.populateCharacterList(characterList);
    }
});

export default {
    name: 'login',
    components: {
        LoginWindow
    }
};
</script>

