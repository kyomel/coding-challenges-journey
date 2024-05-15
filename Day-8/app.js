const input = document.getElementById('commentInput');
const commentsDiv = document.getElementById('comments');

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function(event) {
    const message = event.data;
    const comment = document.createElement('p');
    comment.textContent = message;
    commentsDiv.appendChild(comment);
};

function submitComment() {
    const comment = input.value;
    ws.send(comment);
    input.value = '';
}