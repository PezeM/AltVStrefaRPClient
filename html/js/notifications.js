alt.on('showNotification', (type, message, time) => {
    showNotification(type, message, time);
});

function showNotification(type, message, time) {
    var types = ['info', 'success', 'warning', 'error'];
    $.toast({
        text: message,
        showHideTransition: 'fade',
        icon: types[type],
        hideAfter: time,
        stack: 3,
        position: 'bottom-right',
    })
}
