<template>
    <div class="error-frame" v-if="isErrorMessage">
        <div class="center">
            <div class="notification" v-bind:class="{ open: isErrorMessage }">
                <div class="notification-content">
                    <h3 class="notification-title">{{ errorMessage }}</h3>
                    <p class="notification-text"></p>
                </div>
                <button class="notification-button" @click="hideErrorWindow()">Okej</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'errorModal',
    props: {
        errorMessage: String,
    },
    methods: {
        hideErrorWindow() {
            this.$emit('hide-error-window');
        },
    },
    computed: {
        isErrorMessage() {
            return this.errorMessage.length > 1;
        },
    },
};
</script>

<style scoped>
.error-frame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    overflow: hidden;
    color: #333;
}

.center {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.notification {
    --padding: 3rem 4rem 1rem 4rem;
    color: #eee;
    position: relative;
    text-align: center;
    width: 30rem;
    background: -webkit-linear-gradient(45deg, #17171b 0%, #191d30 100%);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 10px 12px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: transform 0.5s ease 0.4s;
    transition: transform 0.5s ease 0.4s, -webkit-transform 0.5s ease 0.4s;
    transform-origin: 50% 0%;
    transform: scaleY(0);
}

.notification.open {
    transition: all 0.5s ease;
    transform-origin: 50% 50%;
    transform: scale(1);
}

.notification.open::before {
    transition: all 0.4s cubic-bezier(0.75, 0.21, 0.25, 0.78) 0.4s;
    transform: scaleY(0);
}

.notification.open .notification-button {
    color: #fff;
    transition: color 0.3s ease 0.8s, background-color 0.3s ease;
}

.notification::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-origin: 0% 100%;
    transition: all 0.5s cubic-bezier(0.75, 0.21, 0.25, 0.78);
    border-radius: 5px;
}

.notification-content {
    box-sizing: border-box;
    padding: 3rem 4rem 1rem 4rem;
    width: 100%;
    margin: 0 auto;
}

.notification-title,
.notification-text {
    margin-top: 0;
}

.notification-title {
    font-weight: 600;
    margin-bottom: 1rem;
}

.notification-text {
    font-size: 2em;
}

.notification-button {
    background: #ff3f3f;
    color: white;
    width: 100%;
    border: none;
    padding: 1.1rem 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    transition: color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    outline: none;
    position: relative;
    top: 1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.no-display {
    display: none;
}
</style>
