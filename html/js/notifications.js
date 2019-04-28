const notificationTypes = ['info', 'success', 'notice', 'error'];
const stackInfo = {
    dir1: 'down',
    dir2: 'left',
    firstpos1: 20,
    firstpos2: 20,
    spacing1: 16,
    push: 'top',
    context: document.body
}


alt.on('showNotification', (type, title, message, duration, icon) => {
    showNotification(type, title, message, duration, icon);
});


alt.on('showConfirmModal', (title, message, confirmCallback, cancelCallback, args) => {
    console.log('Alt on show confirm ui ' + typeof confirmCallback + ' ' + JSON.stringify(confirmCallback) + ' args: ' + JSON.stringify(args));
    showConfirmModal(title, message, confirmCallback, cancelCallback, args);
});

function showNotification(type, title, message, duration = 5000, icon = true) {
    PNotify.alert({
        title: title,
        text: message,
        type: notificationTypes[type],
        styling: "bootstrap4",
        addClass: 'own-style',
        icons: 'fontawesome5',
        icon: icon,
        animation: 'fade',
        hide: true,
        delay: duration,
        mouseReset: true,
        stack: stackInfo,
        modules: {
            Buttons: {
                sticker: false
            },
            History: {
                maxInStack: 3
            },
        }
    });
}

function showConfirmModal(title, message, confirmCallback, cancelCallback, args) {
    var notice = PNotify.alert({
        title: title,
        text: message,
        type: 'info',
        styling: "bootstrap4",
        addClass: 'own-style',
        animation: 'fade',
        icons: 'fontawesome5',
        icon: 'fas fa-question-circle',
        hide: false,
        stack: {
            'modal': true,
        },
        modules: {
            Confirm: {
                confirm: true
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            },
        }
    });

    if (confirmCallback !== null) {
        notice.on('pnotify.confirm', () => {
            console.log('Confirm callback');
            if (args == null) {
                console.log('Triggered confirm callback without args');
                alt.emit(confirmCallback);
            } else {
                console.log('Triggered confirm callback with args ' + args);
                alt.emit(confirmCallback, JSON.stringify(args));
            }
        });
    }
    else {
        console.log('Confirm callback is null');
    }

    if (cancelCallback !== null) {
        notice.on('pnotify.cancel', () => {
            if (args == null) {
                console.log('Triggered cancel callback without args');
                alt.emit(cancelCallback);
            } else {
                console.log('Triggered cancel callback with args ' + args);
                alt.emit(cancelCallback, JSON.stringify(args));
            }
        });
    }
}

function showTestNotification() {
    showNotification(1, 'Testowa dłuższa wiadomość.', 'Tytuł', 5000);
}