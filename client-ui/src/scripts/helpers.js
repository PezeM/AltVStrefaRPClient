export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}

export function getRemainingCooldown(cooldownTime, lastTime) {
    return ((cooldownTime - (new Date().getTime() - lastTime)) / 1000).toFixed(2);
}