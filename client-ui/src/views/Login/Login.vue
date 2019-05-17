<template>
  <div class="login">
    <login-window></login-window>
  </div>
</template>

<script>
import LoginWindow from '@/components/Login/LoginWindow.vue';

export default {
    name: 'login',
    components: {
        LoginWindow
    }
};
</script>

