class CardInfoRenderer {
    constructor(cardInfoId) {
        this.cardInfo = document.getElementById(cardInfoId);
    }

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const data = {
            title: urlParams.get('title'),
            img: urlParams.get('img'),
            details: urlParams.get('details'),
            map: urlParams.get('map'),
            addres: urlParams.get('addres')
        };

        this.cardInfo.innerHTML = `
            <img class='card__card-img' src="${data.img}" alt="${data.title}">
            <h2 class='card__card-title'>${data.title}</h2>
            <p class='card__card-text'>${data.details}</p>
            <div class='card__card-map' id="map">
                <iframe src="${data.map}" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <p class="card__card-add">${data.addres}</p>
            <a class='card__back-btn' href="./attrac.html">Назад</a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const renderer = new CardInfoRenderer('cardInfos');
    renderer.render();
});