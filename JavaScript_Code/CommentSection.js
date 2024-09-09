document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has fully loaded and parsed");

    document.body.addEventListener("click", (ev) => {
        const isCommentsClicked = ev.target.closest(".expand_title_bar");
        if (!isCommentsClicked) {
            console.log("Not a comments section click, click again buddy");
            return;
        }

        const commentsSection = isCommentsClicked.closest(".expand");
        if (!commentsSection) {
            console.log("Comments section not found, click again buddy");
            return;
        }

        commentsSection.classList.toggle("expand--open");
        console.log("The comments section is opening and closing");

        const submitCommentButton = document.querySelector(".submitComment");
        if (submitCommentButton) {
            submitCommentButton.addEventListener("click", (event) => {
                console.log("Post Comment btn clicked");
            
                const commentsInput = document.getElementById("commentsInput");
                const commentsList = document.getElementById("commentsList");
                const commentText = commentsInput.value.trim();

                if (commentText === "") {
                    alert("Comment cannot be empty");
                    return;
                }

                const nickName = localStorage.getItem("nickName");
                const now = new Date();
                const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

                const commentElement = document.createElement("div");
                commentElement.className = "comment";
                commentElement.innerHTML = `
                    <div class="comment-header">
                        <span class="commenter-name">${nickName}</span> 
                        <span class="comment-date">${dateTime}</span>
                    </div>
                    <span class="comment-text">${commentText}</span>
                    <button class="replyComment">Reply</button>
                    <button class="deleteComment">Delete</button>
                    <div class="replies"></div>
                `;

                commentsList.appendChild(commentElement);
                commentsInput.value = "";

                saveComments();

                commentElement.querySelector(".deleteComment").addEventListener("click", () => {
                    console.log("Delete button clicked");
                    commentElement.remove();
                    saveComments();
                });
            });

            loadComments();
        } else {
            console.log("Submit button not found");
        }

        function saveComments() {
            const commentsList = document.getElementById("commentsList");
            const comments = [];

            commentsList.querySelectorAll(".comment").forEach(comment => {
                const commenterName = comment.querySelector(".commenter-name").textContent;
                const commentDate = comment.querySelector(".comment-date").textContent;
                const commentText = comment.querySelector(".comment-text").textContent;
                const replies = [];

                comment.querySelector(".replies").querySelectorAll(".reply").forEach(reply => {
                    const replierName = reply.querySelector(".replier-name").textContent;
                    const replyDate = reply.querySelector(".reply-date").textContent;
                    const replyText = reply.querySelector(".reply-text").textContent;
                    replies.push({ replierName, replyDate, replyText });
                });

                comments.push({ commenterName, commentDate, commentText, replies });
            });

            localStorage.setItem("comments", JSON.stringify(comments));
            console.log("Comments have been saved");
        }

        function loadComments() {
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            const commentsList = document.getElementById("commentsList");

            comments.forEach(({ commenterName, commentDate, commentText, replies }) => {
                const commentElement = document.createElement("div");
                commentElement.className = "comment";
                commentElement.innerHTML = `
                    <div class="comment-header">
                        <span class="commenter-name">${commenterName}</span>
                        <span class="comment-date">${commentDate}</span>
                    </div>
                    <span class="comment-text">${commentText}</span>
                    <button class="replyComment">Reply</button>
                    <button class="deleteComment">Delete</button>
                    <div class="replies"></div>
                `;

                replies.forEach(({ replierName, replyDate, replyText }) => {
                    const replyElement = document.createElement("div");
                    replyElement.className = "reply";
                    replyElement.innerHTML = `
                        <div class="reply-header">
                            <span class="replier-name">${replierName}</span>
                            <span class="reply-date">${replyDate}</span>
                        </div>
                        <span class="reply-text">${replyText}</span>
                        <button class="reply-delete">Delete</button>
                    `;
                    commentElement.querySelector(".replies").appendChild(replyElement);
                });

                commentsList.appendChild(commentElement);
            });

            addReplyFunctionality(); // Reattach reply functionality after loading comments
        }

        function addReplyFunctionality() {
            document.querySelectorAll(".replyComment").forEach(button => {
                button.addEventListener("click", (event) => {
                    const commentElement = event.target.closest(".comment");
                    if (!commentElement) return;

                    if (commentElement.querySelector(".replyForm")) return;

                    const replyForm = document.createElement("div");
                    replyForm.className = "replyForm";
                    replyForm.innerHTML = `
                        <textarea class="replyInput" placeholder="Type your reply here"></textarea>
                        <button class="submitReply">Submit Reply</button>
                    `;

                    commentElement.querySelector(".replies").appendChild(replyForm);

                    replyForm.querySelector(".submitReply").addEventListener("click", () => {
                        const replyInput = replyForm.querySelector(".replyInput");
                        const replyText = replyInput.value.trim();
                        if (replyText === "") return alert("Reply cannot be empty");

                        const replierName = localStorage.getItem("nickName");
                        const now = new Date();
                        const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

                        const replyElement = document.createElement("div");
                        replyElement.className = "reply";
                        replyElement.innerHTML = `
                            <div class="reply-header">
                                <span class="replier-name">${replierName}</span>
                                <span class="reply-date">${dateTime}</span>
                            </div>
                            <span class="reply-text">${replyText}</span>
                            <button class="reply-delete">Delete</button>
                        `;

                        commentElement.querySelector(".replies").appendChild(replyElement);

                        replyInput.value = "";

                        saveComments();

                        replyElement.querySelector(".reply-delete").addEventListener("click", () => {
                            replyElement.remove();
                            saveComments();
                        });
                    });
                });
            });
        }
    });
});