<template>
  <div id="login">
    <!-- Errow window -->
    <error-modal v-bind:errorMessage="errorMessage" v-on:hide-error-window="hideErrorWindow"></error-modal>

    <div class="login-box" v-if="activeMenu == 'login'">
      <h1 class="login-header-text">Zaloguj się</h1>
      <div class="group">
        <input class="inputMaterial" type="text" v-model="userName" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Nazwa użytkownika</label>
      </div>
      <div class="group">
        <input class="inputMaterial" type="password" v-model="userPassword" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Hasło</label>
      </div>
      <button @click="login()" v-bind:class="{ disabled: loginDisabled }">Zaloguj się</button>
      <p class="change-window" @click="switchToRegister()">Rejestracja</p>
    </div>

    <div class="login-box" v-if="activeMenu == 'register'">
      <h1 class="login-header-text">Rejestracja</h1>
      <div class="group">
        <input class="inputMaterial" type="text" v-model="userNameRegister" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Nazwa użytkownika</label>
      </div>
      <div class="group">
        <input class="inputMaterial" type="password" v-model="userPasswordRegister" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Hasło</label>
      </div>
      <div class="group">
        <input class="inputMaterial" type="password" v-model="userPasswordRegisterRetry" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Powtórz hasło</label>
      </div>

      <button @click="register()" v-bind:class="{ disabled: registerDisabled }">Zarejestuj się</button>
      <p class="change-window" @click="switchToLogin()">Logowanie</p>
    </div>
  </div>
</template>

<script>
import ErrorModal from '@/components/Login/ErrorModal.vue';
import EventBus from '@/event-bus.js';

let loginApp = {
    name: 'login',
    components: {
        ErrorModal
    },
    data() {
        return {
            loggedIn: false,
            activeMenu: 'login',
            userName: '',
            userPassword: '',
            userNameRegister: '',
            userPasswordRegister: '',
            userPasswordRegisterRetry: '',
            errorMessage: '',
            registerDisabled: false,
            loginDisabled: false
        };
    },
    methods: {
        switchToRegister() {
            this.activeMenu = 'register';
        },
        switchToLogin() {
            this.activeMenu = 'login';
            this.userPasswordRegister = '';
            this.userPasswordRegisterRetry = '';
            this.userNameRegister = '';
        },
        setAsLogged() {
            this.loggedIn = true;
            this.loginDisabled = false;
        },
        login() {
            if (
                this.userName == '' ||
                this.userName === undefined ||
                (this.userPassword == '' || this.userName === undefined)
            ) {
                return this.showError('Uzupełnij wszystkie pola.');
            }
            if (
                typeof this.userName !== 'string' ||
                typeof this.userPassword !== 'string'
            ) {
                return this.showError('Podano złe dane.');
            }

            if (this.loginDisabled) return;

            alt.emit('tryToLogin', this.userName, this.userPassword);
            EventBus.$emit('loggedIn');
            this.loginDisabled = true;
        },
        register() {
            if (
                this.userNameRegister == '' ||
                this.userPasswordRegister == '' ||
                this.userPasswordRegisterRetry == '' ||
                this.userNameRegister === undefined ||
                this.userPasswordRegister === undefined ||
                this.userPasswordRegisterRetry === undefined
            ) {
                return this.showError('Uzupełnij wszystkie pola');
            }
            if (
                typeof this.userNameRegister !== 'string' ||
                typeof this.userPasswordRegister !== 'string' ||
                typeof this.userPasswordRegisterRetry !== 'string'
            ) {
                return this.showError('Podano zły typ danych');
            }

            if (this.userPasswordRegister !== this.userPasswordRegisterRetry) {
                return this.showError('Oba hasła muszą być identyczne');
            }

            // 6-18 characters, one numeric digit, atleast one special character
            // var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,18}$/;
            // if (!this.userPasswordRegister.match(passwordPattern)) {
            //     return this.showError('Hasło musi mieć 6-18 znaków, jedną cyfrę i jeden znak specjalny.')
            // }

            if (this.registerDisabled) return;

            alt.emit(
                'tryToRegister',
                this.userNameRegister,
                this.userPasswordRegister
            );
            this.registerDisabled = true;
        },
        showError(message) {
            this.errorMessage = message;
        },
        hideErrorWindow() {
            this.errorMessage = '';
            if (this.registerDisabled) this.registerDisabled = false;
            if (this.loginDisabled) this.loginDisabled = false;
        }
    },
    mounted() {
        EventBus.$on('showError', message => {
            this.showError(message);
        });
        EventBus.$on('registeredSuccesfully', message => {
            this.showError(JSON.parse(message));
            this.switchToLogin();
        });
    }
};

alt.on('registeredSuccessfully', () => {
    console.log('Registered successfully');
    EventBus.$emit(
        'registeredSuccesfully',
        JSON.stringify(`Pomyślnie założono konto. Możesz się teraz zalogować`)
    );
});

alt.on('showError', message => {
    EventBus.$emit('showError', message);
});
export default loginApp;
</script>

<style scoped>
#login {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-header-text {
    padding-bottom: 24px;
    margin-bottom: 8px;
}

.login-box {
    min-height: 30vh;
    min-width: 20vh;
    width: 400px;
    color: #666;
    padding: 10px 0px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    border-top: 2px solid #c0c0c0;
    border-bottom: 2px solid #f00;
}

.login-box h1 {
    text-align: center;
    font-size: 30px;
}

.show {
    display: none;
}

.login-box button {
    background: #ff4747;
    border: 0;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    width: 330px;
    margin: 20px auto;
    display: block;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 10px;
}

.disabled {
    background: rgb(0, 0, 0) !important;
    color: rgb(255, 255, 255) !important;
    cursor: auto !important;
}

.disabled:hover {
    background: rgb(53, 34, 34);
    color: red;
    box-shadow: none !important;
}

.login-box button:hover {
    background: #ff2020;
    color: rgb(224, 224, 224);
    box-shadow: 0 0.5rem 1.3rem rgba(0, 0, 0, 0.8);
    transition: all 0.4s;
}

.login-box p {
    font-size: 14px;
    text-align: center;
}

.change-window {
    cursor: pointer;
    color: #666;
    font-size: 15px;
    text-align: center;
}

.group {
    position: relative;
    margin-bottom: 35px;
    margin-left: 40px;
}

.inputMaterial {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;
}

.inputMaterial:focus {
    outline: none;
}

label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.inputMaterial:focus ~ label,
.inputMaterial:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #ff0000;
}

.bar {
    position: relative;
    display: block;
    width: 315px;
}

.bar:before,
.bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #ff0000;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.bar:before {
    left: 50%;
}

.bar:after {
    right: 50%;
}

.inputMaterial:focus ~ .bar:before,
.inputMaterial:focus ~ .bar:after {
    width: 50%;
}

.inputMaterial:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
    from {
        background: #5264ae;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@-moz-keyframes inputHighlighter {
    from {
        background: #5264ae;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@keyframes inputHighlighter {
    from {
        background: #5264ae;
    }

    to {
        width: 0;
        background: transparent;
    }
}
</style>
