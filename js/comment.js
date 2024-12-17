class CommentLoader {
    constructor(commentContentSelector) {
        this.commentContent = document.querySelector(commentContentSelector);
    }

    async fetchComments() {
        const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/comment');
        const comments = await response.json();
        this.renderComments(comments);
    }

    renderComments(comments) {
        this.commentContent.innerHTML = '';
        comments.forEach(comment => {
            this.commentContent.innerHTML += `
                <div class="comment__item">
                    <div class="comment__avatar-block">
                        <img class="comment__img" src="${comment.img}">
                        <p class="comment__name">${comment.name}</p>
                    </div>
                    <p class="comment__text">${comment.text}</p>
                </div>
            `;
        });
    }
}

const commentLoader = new CommentLoader('.comment__content');
commentLoader.fetchComments();