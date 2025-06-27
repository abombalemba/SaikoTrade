type DeviceType = 'mobile' | 'tablet' | 'desktop';

function detectDeviceType(): DeviceType {
    const width = window.innerWidth;
    let deviceType: DeviceType;
    
    if (width <= 768) {
        deviceType = 'mobile';
    } else if (width <= 1024) {
        deviceType = 'tablet';
    } else {
        deviceType = 'desktop';
    }
    
    document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    document.body.classList.add(`device-${deviceType}`);
    
    return deviceType;
}

function handleDOMContentLoaded(): void {
    const deviceType = detectDeviceType();
    
    if (window.location.search.indexOf('width=') === -1) {
        const url = new URL(window.location.href);
        url.searchParams.set('width', window.innerWidth.toString());
        window.history.replaceState({}, '', url);
    }
}

function handleResize(): void {
    const newDeviceType = detectDeviceType();
    const currentDeviceType = document.body.classList.contains('device-mobile') ? 'mobile' : 
                             document.body.classList.contains('device-tablet') ? 'tablet' : 'desktop';
    
    if (newDeviceType !== currentDeviceType) {
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
window.addEventListener('resize', handleResize);