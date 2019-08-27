<template></template>

<script>
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyCallbacks from 'pnotify/dist/es/PNotifyCallbacks.js';
import PNotifyConfirm from 'pnotify/dist/es/PNotifyConfirm.js';
import PNotifyHistory from 'pnotify/dist/es/PNotifyHistory.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import EventBus from '@/event-bus.js';

export default {
    name: 'notificationComponent',
    mounted() {
        EventBus.$on('showNotification', showNotification);
    },
    beforeDestroy() {
        EventBus.$off('showNotification', showNotification);
    },
};

const notificationTypes = ['info', 'success', 'notice', 'error'];
const stackInfo = {
    dir1: 'down',
    dir2: 'left',
    firstpos1: 20,
    firstpos2: 20,
    spacing1: 16,
    push: 'top',
    context: document.body,
};

alt.on('showNotification', (type, title, message, duration, icon) => {
    showNotification(type, title, message, duration, icon);
});

alt.on('showConfirmModal', (title, message, confirmCallback, cancelCallback, args) => {
    console.log(`[CONFIRM MODAL UI] ConfirmCallback = ${JSON.stringify(confirmCallback)} type = ${typeof confirmCallback} 
                CancelCallback = ${JSON.stringify(cancelCallback)} type = ${typeof cancelCallback} 
                args = ${JSON.stringify(args)}`);
    showConfirmModal(title, message, confirmCallback, cancelCallback, args);
});

function showNotification(type, title, message, duration = 5000, icon = true) {
    PNotify.alert({
        title: title,
        text: message,
        type: notificationTypes[type],
        styling: 'bootstrap4',
        addClass: 'notification-style',
        icons: 'material',
        icon: true,
        animation: 'fade',
        hide: true,
        delay: duration,
        mouseReset: true,
        shadow: true,
        stack: stackInfo,
        modules: {
            Buttons: {
                sticker: false,
            },
            History: {
                maxInStack: 3,
            },
        },
    });
}

function showConfirmModal(title, message, confirmCallback, cancelCallback, args) {
    let notice = PNotify.alert({
        title: title,
        text: message,
        type: 'info',
        styling: 'bootstrap4',
        addClass: 'confirm-notification-style',
        animation: 'fade',
        icons: 'material',
        hide: false,
        shadow: true,
        stack: {
            modal: true,
        },
        modules: {
            Confirm: {
                confirm: true,
            },
            Buttons: {
                closer: false,
                sticker: false,
            },
            History: {
                history: false,
            },
        },
    });

    if (confirmCallback !== null) {
        notice.on('pnotify.confirm', () => {
            console.log('Confirm callback');
            if (args == null) {
                console.log('Triggered confirm callback without args');
                alt.emit(confirmCallback);
            } else {
                console.log('Triggered confirm callback with args ' + args);
                alt.emit(confirmCallback, args);
            }
        });
    } else {
        console.log('Confirm callback is null');
    }

    if (cancelCallback !== null) {
        notice.on('pnotify.cancel', () => {
            if (args == null) {
                console.log('Triggered cancel callback without args');
                alt.emit(cancelCallback);
            } else {
                console.log('Triggered cancel callback with args ' + args);
                alt.emit(cancelCallback, args);
            }
        });
    } else {
        notice.on('pnotify.cancel', () => {
            alt.emit('defaultCancelModalCallback');
        });
    }
}

// function showTestNotification() {
//     showNotification(1, 'Testowa dłuższa wiadomość.', 'Tytuł', 5000);
// }

// function showTestConfirmationModal() {
//     showConfirmModal('Jakiś tam tyyuł', 'Dłuższa wiadomość', null, null, 1);
// }
</script>

<style>
.notification-style .ui-pnotify-container {
    border-radius: 4px;
    padding: 10px;
}

.confirm-notification-style {
    border-radius: 8px;
    padding: 10px;
}
</style>
