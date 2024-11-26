document.addEventListener('DOMContentLoaded', () => { 
    const urlParams = new URLSearchParams(window.location.search); 
    const title = urlParams.get('title'); 
    const img = urlParams.get('img'); 
    const details = urlParams.get('details'); 
    const map = urlParams.get('map') 
    const addres = urlParams.get('addres')  
 
    const cardInfo = document.getElementById('cardInfos'); 
    cardInfo.innerHTML = ` 
        <img class='card__card-img' src="${img}" alt="${title}"> 
        <h2 class='card__card-title'>${title}</h2>
        <p class='card__card-text'>${details}</p>
        <div class='card__card-map' id="map">
            <iframe src="${map}" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <p class="card__card-add">${addres}</p>
        <a class='card__back-btn' href = "./attrac.html">Назад</p>
    `; 
});






