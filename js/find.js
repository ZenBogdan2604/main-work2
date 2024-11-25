async function getResponse() {
  const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument');
  let content = await response.json();
  const list = document.querySelector('.find__block-card');
  const searchInput = document.getElementById('searchInfo');
  const cardFinder = document.getElementById('card-finder');
    function displayCards(items) {
      list.innerHTML = ''; 
      items.forEach(item => {
        const cardSection = document.createElement('section');
        cardSection.id = `card-${item.id}`;
        cardSection.classList.add('card__pag');
        cardSection.innerHTML = `
          <div class="card__card">
            <div class="card__card-block">
              <img class="card__card-pic" src="${item.img}" alt="${item.title}">
              <p class="card__card-txt-pic">${item.title}</p>
            </div>
            <p class="card__card-txt">${item.text}</p>
            <p class="card__card-add">${item.addres}</p>
          </div>
        `;
        cardSection.addEventListener('click', () => {
          const urlParams = new URLSearchParams();
          urlParams.append('title', item.title);
          urlParams.append('img', item.img);
          urlParams.append('details', item.text); // Assuming 'text' holds detailed info
          urlParams.append('map', item.map); // Assuming 'map' holds the map embed URL
          urlParams.append('addres', item.addres);
  
          window.location.href = `info.html?${urlParams.toString()}`;
        });
  
        list.append(cardSection);
      });
    }
  function filterCards() {
      const searchQuery = searchInput.value.trim().toLowerCase();
      const selectedCategory = cardFinder.value;
      const filteredContent = content.filter(item => {
          const categoryMatch = !selectedCategory || (item.filter && item.filter.includes(selectedCategory));
          const titleMatch = item.title.toLowerCase().includes(searchQuery);
          return categoryMatch && titleMatch; 
      });
      displayCards(filteredContent);
  }
  searchInput.addEventListener('input', filterCards);
  cardFinder.addEventListener('change', filterCards);
  displayCards(content);
}

getResponse();
