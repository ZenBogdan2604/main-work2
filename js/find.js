  class CardFinderApp {
    constructor(listSelector, searchInputId, cardFinderId) {
      this.list = document.querySelector(listSelector);
      this.searchInput = document.getElementById(searchInputId);
      this.cardFinder = document.getElementById(cardFinderId);
      this.content = [];
    }

    async fetchData() {
      const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument');
      this.content = await response.json();
      this.displayCards(this.content);
    }

    displayCards(items) {
      this.list.innerHTML = '';
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
        cardSection.addEventListener('click', () => this.handleCardClick(item));
        this.list.append(cardSection);
      });
    }

    handleCardClick(item) {
      const params = {
        title: item.title,
        img: item.img,
        details: item.details,
        map: item.map,
        addres: item.addres
      };
      const urlParams = new URLSearchParams(params);
      window.location.href = `info.html?${urlParams}`;
    }

    filterCards() {
      const searchQuery = this.searchInput.value.trim().toLowerCase();
      const selectedCategory = this.cardFinder.value;
      const filteredContent = this.content.filter(item =>
        (!selectedCategory || (item.filter && item.filter.includes(selectedCategory))) &&
        item.title.toLowerCase().includes(searchQuery)
      );
      this.displayCards(filteredContent);
    }

    init() {
      this.fetchData();
      this.searchInput.addEventListener('input', () => this.filterCards());
      this.cardFinder.addEventListener('change', () => this.filterCards());
    }
  }

  const cardFinderApp = new CardFinderApp('.find__block-card', 'searchInfo', 'card-finder');
  cardFinderApp.init();