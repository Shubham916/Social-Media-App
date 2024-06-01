// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle like button click
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const postId = this.dataset.postId;

            // Perform AJAX request to like the post
            fetch(`/like/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for security
                },
                body: JSON.stringify({ postId: postId })
            })
            .then(response => {
                if (response.ok) {
                    // Update like count on the frontend
                    const likeCountElement = document.querySelector(`#like-count-${postId}`);
                    const currentLikes = parseInt(likeCountElement.innerText);
                    likeCountElement.innerText = currentLikes + 1;
                } else {
                    console.error('Failed to like the post');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });

    // Function to get CSRF token from cookies
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
