document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has  fully loaded and parsed");//loading the dom content first so that the html content is already loaded  before this runnss
    // Toggle expandable section, same as the navigation menu functionality her
    document.body.addEventListener("click", (ev) => {
        const isCommentsClicked = ev.target.closest(".expand_title_bar");
        if (!isCommentsClicked) {
            console.log("Not a comments section click, click again buddyy");
            return;
        }

        const commentsSection = isCommentsClicked.closest(".expand");
        if (!commentsSection) {
            console.log("Comments section not found, click again buddy");
            return;
        }

        commentsSection.classList.toggle("expand--open");// this will when it would work because the expanded section even target would be true
        console.log("The comments section is opening and closing, dankooooooo");

         //here im adding fucntionality for the comments submit button and being able to delete it
        const submitCommentButton = document.getElementById("submitComment");
        if (submitCommentButton) {
            submitCommentButton.addEventListener("click", () => {
                console.log("Submit button clicked"); // checking if the button is clicked after typing the comment
                const commentsInput = document.getElementById("commentsInput");
                const commentsList = document.getElementById("commentsList");
                const commentText = commentsInput.value.trim();

                if (commentText === "") {// checking if the user typed anything in the comments section
                    alert("Comment cannot be empty , pls type somethinggg");
                    return;
                }

                const commentElement = document.createElement("div");// this div element  will house the comment itself
                commentElement.className = "comment";
                commentElement.innerHTML = `
                    <span>${commentText}</span>
                    <button class="deleteComment">Delete</button>
                `;

                commentsList.appendChild(commentElement);
                commentsInput.value = "";

                // Adding the  delete functionality in case someone wants to remove their comments
                commentElement.querySelector(".deleteComment").addEventListener("click", () => {
                    console.log("Delete button clicked");
                    commentElement.remove();
                });
            });
        } else {
            console.log("Submit button not found");
        }
    });
});