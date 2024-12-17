    class PaginationApp {
        constructor() {
            this.content = document.querySelector('.content');
            this.itemsPerPage = 5;
            this.currentPage = 1;
            this.mask = document.querySelector('.mask');
            this.paginationContainer = null;
        }
        async fetchData() {
            this.mask.classList.replace('hidden', 'active');
            const url = new URL(`https://672dfd95fd89797156449049.mockapi.io/Monument?page=${this.currentPage}&limit=${this.itemsPerPage}`);
            const data = await (await fetch(url)).json();
            this.content.innerHTML = '';
            data.forEach(item => {
                this.content.innerHTML += `
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
            this.mask.classList.replace('active', 'hidden');
        }
        async getTotalPages() {
            const totalCountResponse = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument?popularity=true');
            const totalData = await totalCountResponse.json();
            return Math.ceil(totalData.length / this.itemsPerPage);
        }
        createPageButtons(totalPages) {
            this.paginationContainer = document.createElement('div');
            this.paginationContainer.classList.add('pagination');
            this.content.after(this.paginationContainer);
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    this.currentPage = i;
                    this.fetchData(this.currentPage);
                });
                this.paginationContainer.appendChild(pageButton);
            }
        }
        async initialLoad() {
            await this.fetchData(this.currentPage);
            const totalPages = await this.getTotalPages();
            this.createPageButtons(totalPages);
        }
    }
    const app = new PaginationApp();
    app.initialLoad();




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









