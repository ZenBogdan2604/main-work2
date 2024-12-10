document.addEventListener('DOMContentLoaded', async function () {
  const content = document.querySelector('.content');
  const itemsPerPage = 5;
  let currentPage = 1;
  const mask = document.querySelector('.mask');

  async function fetchData(page) {
      mask.classList.replace('hidden', 'active');
      const url = new URL('https://672dfd95fd89797156449049.mockapi.io/Monument');
      url.searchParams.append('page', page);
      url.searchParams.append('limit', itemsPerPage);

      const response = await fetch(url);
      const data = await response.json();
      content.innerHTML = '';

      data.forEach(item => {
          content.innerHTML += `
              <section class="card__pag">
                <div class="card__card">
                  <img class="card__card-pic" src="${item.img}" alt="${item.title}">
                  <p class="card__card-txt-pic">${item.title}</p>
                  <p class="card__card-txt">${item.text}</p>
                  <p class="card__card-add">${item.addres}</p>
                </div>
              </section>
          `;
      });
      mask.classList.replace('active', 'hidden');
  }
  async function initialLoad() {
      await fetchData(currentPage);
      const totalCountResponse = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument?popularity=true');
      const totalData = await totalCountResponse.json();
      const totalPages = Math.ceil(totalData.length / itemsPerPage);
      createPageButtons(totalPages);
  }
  function createPageButtons(totalPages) {
      const paginationContainer = document.createElement('div');
      paginationContainer.classList.add('pagination');
      content.after(paginationContainer);

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.textContent = i;
          pageButton.addEventListener('click', () => {
              currentPage = i;
              fetchData(currentPage);
          });
          paginationContainer.appendChild(pageButton);
      }
  }

  window.addEventListener('DOMContentLoaded', () => {
      mask.classList.add('active');
  });

  initialLoad();




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
});








