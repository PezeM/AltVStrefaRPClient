var loginApp = new Vue({
    el: "#login",
    data: {
        loggedIn: false,
        activeMenu: "login",
        userName: '',
        userPassword: '',
        userNameRegister: '',
        userPasswordRegister: '',
        userPasswordRegisterRetry: '',
        showErrorWindow: false,
        errorMessage: '',
        registerDisabled: false,
        loginDisabled: false,
    },
    methods: {
        switchToRegister: function () {
            this.activeMenu = "register";
        },
        switchToLogin: function () {
            this.activeMenu = "login";
        },
        setAsLogged: function () {
            this.loggedIn = true;
            this.loginDisabled = false;
        },
        login: function () {
            if ((this.userName == '' || this.userName === undefined) || (this.userPassword == '' || this.userName === undefined)) {
                return this.showError('Uzupełnij wszystkie pola.');
            }
            if (typeof this.userName !== 'string' || typeof this.userPassword !== 'string') {
                return this.showError('Podano złe dane.');
            }

            if (this.loginDisabled) return;

            alt.emit('tryToLogin', this.userName, this.userPassword);
            this.loginDisabled = true;
        },
        register: function () {
            if ((this.userNameRegister == '' || this.userPasswordRegister == '' || this.userPasswordRegisterRetry == '') ||
                this.userNameRegister === undefined || this.userPasswordRegister === undefined || this.userPasswordRegisterRetry === undefined) {
                return this.showError('Uzupełnij wszystkie pola');
            }
            if (typeof this.userNameRegister !== 'string' || typeof this.userPasswordRegister !== 'string'
                || typeof this.userPasswordRegisterRetry !== 'string') {
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

            alt.emit('tryToRegister', this.userNameRegister, this.userPasswordRegister);
            this.registerDisabled = true;
        },
        showError: function (message) {
            if (!message || typeof message !== 'string') return;
            this.errorMessage = message;
            this.showErrorWindow = true;
        },
        hideErrorWindow: function () {
            this.showErrorWindow = false;
            this.errorMessage = '';
            if (this.registerDisabled) this.registerDisabled = false;
            if (this.loginDisabled) this.loginDisabled = false;
        },
    },
});

alt.on('showError', (message) => {
    console.log('Showing error in login.js ' + message);
    loginApp.showError(message);
});

alt.on('registeredSuccessfully', () => {
    console.log('Registered successfully');
    loginApp.showError(`Pomyślnie założono konto z loginem ${loginApp.userNameRegister}. Możesz się teraz zalogować.`);
    loginApp.switchToLogin();
});

alt.on('loggedIn', (characterList) => {
    if (characterList) {
        loginApp.setAsLogged();
        characterSelect.populateCharacterList(characterList);
    }
});