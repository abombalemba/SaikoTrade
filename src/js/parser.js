fetch('components/atoms/atoms.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    const parser = new DOMParser();
    
    const HTML = parser.parseFromString(data, 'text/html');
    console.log(HTML.body);

    const container = document.getElementById('block4');
    container.innerHTML = HTML.body;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
