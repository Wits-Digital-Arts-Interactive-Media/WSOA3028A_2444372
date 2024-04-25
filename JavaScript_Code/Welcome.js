document.addEventListener("DOMContentLoaded", function() {//this is a call back which basically renders or parses all content needed to construct the dom tree i.e the html before it can execute the js
    const form = document.getElementById("welcomeForm");
    const nameLabel = document.querySelector("label[for='nameInput']");
    nameLabel.style.textAlign = "center";//im centering my input field label so that it looks better xD
    const welcomeMessage = document.getElementById("Welcome Message");

    form.addEventListener("submit", function(event){//since this is a button, it would the  need an event listner with an event teken as the paramenter
      event.preventDefault();// not allowing users to submit without putting in their names, so that it is not just submitted empty  and stuff xd
      if(nameInput.validity.valid){ //checking if the input field is not empty before users can submitt.i.e a nme has to b there
        let userName = nameInput.value.trim().toUpperCase();//the point of trimming here is avoid leading or  trailing spaces that are not neccessaru to read or render 
        ShowingWelcomeMessage(userName);
    }

    function ShowingWelcomeMessage(userName){ //making it show the name the user wouldve have typed in function
        welcomeMessage.innerHTML = `<p><strong> A very warm welcome to Dumziii's Worldd, ${userName}!, hope you enjoy your time here :) </strong><p>`;//will show something like this
        welcomeMessage.style.alignContent = 'center'
    } console.log("its working my bruddda");
    }) 
});
