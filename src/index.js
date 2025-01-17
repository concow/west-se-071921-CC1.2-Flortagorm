const url = "https://distinct-vaulted-freesia.glitch.me/image";
const fgTitle = document.getElementById("fg-title");
const fgImage = document.getElementById("fg-image");
const fgLikes = document.getElementById("fg-likes")
const likeButton = document.getElementById("like-button")
const fgComments = document.getElementById("fg-comments")
const commentForm = document.getElementById("comment-form")

let likes = 0;

likeButton.addEventListener('click', () => {
    likes++;
    renderLikes();
});

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addComment(event.target.comment.value);
    event.target.comment.value = '';
});

fetch(url)
    .then((res) => res.json())
    .then(renderPage);
    //.then((data) => renderPage(data));

function renderPage(data) {
    fgImage.src = (data.image);
    fgTitle.innerText = (data.title);
    likes = data.likes;
    renderComments(data.comments);
    renderLikes();
    }

function renderComments(comments) {
    fgComments.innerHTML = "";          //empty comments 
    comments.forEach((comment) => addComment(comment.content));
}

function addComment(comment) {
    const li = document.createElement('li');
    li.innerText = comment;
    fgComments.append(li);
}

function renderLikes() {
    fgLikes.innerText = `${likes} likes`
}