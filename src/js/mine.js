document.addEventListener('DOMContentLoaded', function() {
    let currentPosition = 0;
    const cardsPerPage = 4;

    function renderCards() {
        const container = document.getElementById('main-set-popular-down');
        container.innerHTML = '';
        
        const cardsToShow = cardsData.slice(currentPosition, currentPosition + cardsPerPage);
        
        cardsToShow.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            
            let discountHtml = '';
            if (card.discount || card.prices.length > 0) {
                discountHtml = `
                    <div class="card-discount-section">
                        <div class="card-discount">${card.discount}</div>
                        <div class="card-prices">
                            ${card.prices.map(price => `<div>${price}</div>`).join('')}
                        </div>
                    </div>
                `;
            }
            
            cardElement.innerHTML = `
                ${discountHtml}
                <div class="card-content">
                    <h3 class="card-title">${card.title}</h3>
                    ${card.description ? `<p class="card-description">${card.description}</p>` : ''}
                    <div class="card-price">${card.price}</div>
                    <button class="card-button">${card.button}</button>
                </div>
            `;
            container.appendChild(cardElement);
        });
        
        updateButtons();
    }

    function slideCards(direction) {
        if (direction === 'left') {
            if (currentPosition > 0) {
                currentPosition--;
            } else {
                currentPosition = Math.max(0, cardsData.length - cardsPerPage);
            }
        } else if (direction === 'right') {
            if (currentPosition + cardsPerPage < cardsData.length) {
                currentPosition++;
            } else {
                currentPosition = 0;
            }
        }
        
        renderCards();
    }

    function updateButtons() {
        const leftButton = document.getElementById('main-set-popular-up-right-left');
        const rightButton = document.getElementById('main-set-popular-up-right-right');
        
        leftButton.style.opacity = currentPosition === 0 ? 0.5 : 1;
        rightButton.style.opacity = currentPosition + cardsPerPage >= cardsData.length ? 0.5 : 1;
    }

    function mainContainerButtons(id, isHover, direction) {
        const button = document.getElementById(id);
        if (isHover) {
            button.src = `images/symbols/arrow/${direction}_hover.svg`;
        } else {
            button.src = `images/symbols/arrow/${direction}_normal.svg`;
        }
    }
});

async function loadJSON(filepath) {
    try {
      console.log(filepath);
      const response = await fetch(filepath);
      console.log(response);
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  