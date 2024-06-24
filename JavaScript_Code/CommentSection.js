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

         //here im adding functionality for the comments submit button and being able to delete it
        const submitCommentButton = document.getElementById("submitComment");
        if (submitCommentButton) {
            submitCommentButton.addEventListener("click", (event) => {
                console.log("Submit button clicked"); // checking if the button is clicked after typing the comment
                event.preventDefault();
                const commentsInput = document.getElementById("commentsInput");
                const commentsList = document.getElementById("commentsList");
                const commentText = commentsInput.value.trim();

                if (commentText === "") {// checking if the user typed anything in the comments section
                    alert("Comment cannot be empty , pls type somethinggg"); // fucntions as an API within  here as it collects the information or the comment  from the server abd if it is not there it returns a response
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

                saveComments();

                // Adding the  delete functionality in case someone wants to remove their comments
                commentElement.querySelector(".deleteComment").addEventListener("click", () => {
                    console.log("Delete button clicked");
                    commentElement.remove();
                    saveComments();
                });
            });


            //calling the load comments fucntion here when the user reloads the page  
            loadComments();
        } else {
            console.log("Submit button not found");// just for debugging purposes
        }

            function saveComments(){
            const commentsList = document.getElementById("commentsList");
            const comments = []; //storing all comments typed  in array so that the API will access and accesst them easier from the local storage
            commentsList.querySelectorAll(".comment").forEach(comment => {
                comments.push(comment.querySelector("span").innerText); // so then each time someone comments , the comment goes and gets stored in the local storage
              });
              localStorage.setItem("comments", JSON.stringify(comments)); // this is the API that will store the comments made and will be the one that retrieves it for us if the oage reloads.
              console.log("comment has beeen saveed");
            }
            
            function loadComments() { // when the page is reloaded, the local storage API fetches the comments from the array thaat houses all the comments made in the local storage
              const comments = JSON.parse(localStorage.getItem("comments")) || [];
              const commentsList = document.getElementById("commentsList");
              comments.forEach(commentText => {
                const commentElement = document.createElement("div");
                commentElement.className = "comment";
                commentElement.innerHTML = ` 
                    <span>${commentText}</span>
                    <button class="deleteComment">Delete</button>
                `;
                commentsList.appendChild(commentElement);
            
                commentElement.querySelector(".deleteComment").addEventListener("click", () => {
                    commentElement.remove();
                    saveComments();
                    console.log("the page has been reloaded and the comments are stil there")
                });
              });
            }
    });
});