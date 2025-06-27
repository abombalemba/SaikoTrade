// Определяем тип устройства при загрузке и изменении размера
function detectDeviceType() {
    const width = window.innerWidth;
    let deviceType;
    
    if (width <= 768) {
        deviceType = 'mobile';
    } else if (width <= 1024) {
        deviceType = 'tablet';
    } else {
        deviceType = 'desktop';
    }
    
    // Добавляем класс к body
    document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    document.body.classList.add(`device-${deviceType}`);
    
    return deviceType;
}

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const deviceType = detectDeviceType();
    
    // Можно отправить на сервер информацию о ширине экрана
    if (window.location.search.indexOf('width=') === -1) {
        const url = new URL(window.location.href);
        url.searchParams.set('width', window.innerWidth);
        window.history.replaceState({}, '', url);
    }
});

// При изменении размера окна
window.addEventListener('resize', () => {
    const newDeviceType = detectDeviceType();
    const currentDeviceType = document.body.classList.contains('device-mobile') ? 'mobile' : 
                             document.body.classList.contains('device-tablet') ? 'tablet' : 'desktop';
    
    if (newDeviceType !== currentDeviceType) {
        window.location.reload();
    }
});