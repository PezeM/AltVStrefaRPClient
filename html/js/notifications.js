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


alt.on('showConfirmModal', (title, message, confirmCallback, cancelCallback) => {
    showConfirmModal(title, message, confirmCallback, cancelCallback);
});

function showNotification(type, title, message, duration = 5000, icon = true) {
    PNotify.alert({
        title: title,
        text: message,
        type: type,
        icon: icon,
        styling: "bootstrap4",
        animation: 'fade',
        hide: true,
        delay: duration,
        mouseReset: true,
        stack: stackInfo,
    });
}

function showConfirmModal(title, message, confirmCallback, cancelCallback) {
    var notice = PNotify.notice({
        title: title,
        text: message,
        styling: "bootstrap4",
        animation: 'fade',
        // icon: 'fas fa-question-circle',
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
    if (typeof confirmCallback === 'function') {
        notice.on('pnotify.confirm', () => {
            console.log('Confirm callback');
            confirmCallback();
        });
    }
    if (typeof cancelCallback === 'function') {
        notice.on('pnotify.cancel', () => {
            console.log('Cancell callback');
            cancelCallback();
        });
    }
}

function showTestNotification() {
    showNotification('error', 'Testowa dłuższa wiadomość.', 'Tytuł', 5000);
}


// alt.on('showNotification', (type, message, time) => {
//     showNotification(type, message, time);
// });

// function showNotification(type, message, time) {
//     var types = ['info', 'success', 'warning', 'error'];
//     $.toast({
//         text: message,
//         showHideTransition: 'fade',
//         icon: types[type],
//         hideAfter: time,
//         stack: 3,
//         position: 'bottom-right',
//     })
// }




