document.addEventListener('DOMContentLoaded', async function () {
  const content = document.querySelector('.content');
  const itemsPerPage = 1;
  let currentPage = 0;
  let items = [];
  const mask = await document.querySelector('.mask');

  window.addEventListener('DOMContentLoaded', () => {
      mask.classList.add('hide');
  });
      const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument');
      const data = await response.json();

      data.forEach(item => {
          content.innerHTML += `
            <section class="card__pag">
              <div class="card__card">
                <div class="card__card-block">
                  <img class="card__card-pic" src="${item.img}" alt="${item.title}">
                  <p class="card__card-txt-pic">${item.title}</p>
                </div>
                <p class="card__card-txt">${item.text}</p>
                <p class="card__card-add">${item.addres}</p>
              </div>
            </section>`;
            
      });

      items = Array.from(content.querySelectorAll('.card__pag'));
      createPageButtons();
      showPage(currentPage);

  function showPage(page) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      items.forEach((item, index) => {
          item.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
      });
  }

  function createPageButtons() {
      const totalPages = Math.ceil(items.length / itemsPerPage);
      const paginationContainer = document.createElement('div');
      paginationContainer.classList.add('pagination');
      content.append(paginationContainer);

      for (let i = 0; i < totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.textContent = i + 1;
          pageButton.addEventListener('click', () => {
              currentPage = i;
              showPage(currentPage);
          });
          paginationContainer.append(pageButton);
      }
  }
});

let menuBtn = document.querySelector('.header__menu-btn-burger');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

menuItem.forEach(function(menuItem) {
menuItem.addEventListener('click',function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
})
});

