const commentContent = document.querySelector('.comment__content');

fetch('https://672dfd95fd89797156449049.mockapi.io/comment')
.then(response => response.json())
.then(comments => {
    comments.forEach(comment => {
        commentContent.innerHTML += `
        <div class="comment__item">
            <div class="comment__avatar-block">
                <img class="comment__img" src='${comment.img}'>
                <p class="comment__name">${comment.name}</p>
            </div>
            <p class="comment__text">${comment.text}</p>
        </div>
    `;
    });
})
.catch(error => {
    commentContent.innerHTML = '<p>Не удалось загрузить комментарии.</p>';
});