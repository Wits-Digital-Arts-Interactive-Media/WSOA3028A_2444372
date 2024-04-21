//in here im  initialising the various variables by attaching the elements  ids in my html doccie so that they'll be accessed directly
const profileLink = document.getElementById("link_profile");
const blogsLink = document.getElementById("link_blogs");
const designLink = document.getElementById("link_designs");
const essaysLink = document.getElementById("link_essays");
const PortfolioLInk = document.getElementById("link_portfolio");
const commentaryLink = document.getElementById("link_commentary");
const softwareLink = document.getElementById("link_software")

//adding event listeners to the links(const variables) that are connected to the element ids from the html docie:)
//there's probably a better way to do this but pls bear me w me 
    profileLink.addEventListener("mouseover", event => {
        profileLink.innerText = profileLink.innerText.toUpperCase();
        
    });

    profileLink.addEventListener("mouseout", event => {
       profileLink.innerText = profileLink.innerText.toLowerCase();
    });

    PortfolioLInk.addEventListener("mouseover", event => {
        PortfolioLInk.innerText = PortfolioLInk.innerText.toUpperCase();
       
    });

    PortfolioLInk.addEventListener("mouseout", event => {
       PortfolioLInk.innerText = PortfolioLInk.innerText.toLowerCase();
    });

    blogsLink.addEventListener("mouseover", event => {
        blogsLink.innerText = blogsLink.innerText.toUpperCase();
    });

    blogsLink.addEventListener("mouseout", event => {
       blogsLink.innerText = blogsLink.innerText.toLowerCase();
    });

    designLink.addEventListener("mouseover", event => {
        designLink.innerText = designLink.innerText.toUpperCase();
    });

    designLink.addEventListener("mouseout", event => {
       designLink.innerText = designLink.innerText.toLowerCase();
    });

    essaysLink.addEventListener("mouseover", event =>{
       essaysLink.innerText = essaysLink.innerText.toUpperCase();
    });

    essaysLink.addEventListener("mouseout", event =>{
     essaysLink.innerText = essaysLink.innerText.toLowerCase();
    });

    commentaryLink.addEventListener("mouseover", event => {
        commentaryLink.innerText = commentaryLink.innerText.toUpperCase();
       
    });

    commentaryLink.addEventListener("mouseout", event => {
       commentaryLink.innerText = commentaryLink.innerText.toLowerCase();
    });

    softwareLink.addEventListener("mouseover", event => {
        softwareLink.innerText = softwareLink.innerText.toUpperCase();
       
    });

    softwareLink.addEventListener("mouseout", event => {
       softwareLink.innerText = softwareLink.innerText.toLowerCase();
    });

    //checking if my code runs or not by returning these messages in the console
    console.log(profileLink);
    console.log(blogsLink);
    console.log(designLink);
    console.log(essaysLink);
    console.log(softwareLink);
    console.log(commentaryLink);
    console.log(PortfolioLInk);

