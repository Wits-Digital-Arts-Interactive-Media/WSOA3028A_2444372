document.addEventListener("DOMContentLoaded", function() {//callback initiation to  load and parse the html content to
    // indicate the dom trees is ready so its safe to manipulate the content for js purposes/functionalities

    const reactionForm = document.getElementById("reactionForm");
    const reactionPos = document.querySelector("header");
    let reactionCounts = {}; // Initialize as an empty object

    function updateReactionaryCounts() {
        reactionPos.innerHTML = "";
        for (const [emoji, count] of Object.entries(reactionCounts)) {
            const reactionElement = document.createElement("span");
            reactionElement.textContent = `${emoji}: ${count}`;
            reactionPos.appendChild(reactionElement);//in here im creating a linkage between the emoji used to represent the reaction 
            //and the number of those used by the users

        }
    }

    reactionForm.addEventListener("submit", function(event) {
        event.preventDefault();//preventing the form from submitting without input from the user. this is just a precaution to get the user to do the desired action.
        const formData = new FormData(reactionForm);
        const selectedEmoji = formData.get("emoji");

        if (reactionCounts[selectedEmoji]) {
            reactionCounts[selectedEmoji]++;
        } else {
            reactionCounts[selectedEmoji] = 1;
        }

        updateReactionaryCounts();
        //below i'm using the alert function to notify my users in the form of a pop up message to provide them feedback that they have done something. i.e they have reacted.
        alert(`Thank you for your reaction to this blog. I hope you found it insightful:) You reacted with ${selectedEmoji}. Like count: ${reactionCounts[selectedEmoji]}`);
        console.log("the reactions are workinggg");
    });
    //i decided to do the styling of the reaction buttons here as it's easier
    const button = document.querySelector("button[type='submit']");
    const button01 = document.querySelector("button[type='submit01']");
    const button02 = document.querySelector("button[type='submit02']");
    button.style.backgroundColor = "bronze";
    button.style.borderRadius = "20px";
    button.style.width =  "50px";
    button.style.height = "50px";
    button01.style.backgroundColor = "bronze";
    button01.style.borderRadius = "20px";
    button01.style.width =  "50px";
    button01.style.height = "50px";
    button02.style.backgroundColor = "bronze";
    button02.style.borderRadius = "20px";
    button02.style.width =  "50px";
    button02.style.height = "50px";
});