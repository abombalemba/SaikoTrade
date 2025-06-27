function detectDeviceType() {
    var width = window.innerWidth;
    var deviceType;
    if (width <= 768) {
        deviceType = 'mobile';
    }
    else if (width <= 1024) {
        deviceType = 'tablet';
    }
    else {
        deviceType = 'desktop';
    }
    document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    document.body.classList.add("device-".concat(deviceType));
    return deviceType;
}
function handleDOMContentLoaded() {
    var deviceType = detectDeviceType();
    if (window.location.search.indexOf('width=') === -1) {
        var url = new URL(window.location.href);
        url.searchParams.set('width', window.innerWidth.toString());
        window.history.replaceState({}, '', url);
    }
}
function handleResize() {
    var newDeviceType = detectDeviceType();
    var currentDeviceType = document.body.classList.contains('device-mobile') ? 'mobile' :
        document.body.classList.contains('device-tablet') ? 'tablet' : 'desktop';
    if (newDeviceType !== currentDeviceType) {
        window.location.reload();
    }
}
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
window.addEventListener('resize', handleResize);
