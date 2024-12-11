const slides = document.querySelectorAll('.slide')
for (const slide of slides){
    slide.addEventListener('click', ()  => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}


//Modal window
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal__btn');
const modalClose = document.getElementById('modal__close');

modalBtn.onclick = function(){
    modal.classList.remove('hide');
}

modalClose.onclick = function(){
    modal.classList.add('hide')
}  


