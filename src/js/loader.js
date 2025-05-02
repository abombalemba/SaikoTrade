export function loadHTML(elementId, filePath) {
    return new Promise((resolve, reject) => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                resolve();
            })
            .catch(error => reject(error));
    });
}
