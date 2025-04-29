function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

loadHTML('header', 'components/organisms/header.html');
loadHTML('footer', 'components/organisms/footer.html');
