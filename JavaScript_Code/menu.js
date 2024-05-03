const root = "/WSOA3028A_2444372";
const menuItemss = [
    { name: "Home", href:  root + "/index.html"},
    { name: "Profile", href: `${root}/Profile/Profile.html`},
    { name: "Blogs", href: `${root}/Weekly_Blogs/BlogPage.html`},
    { name: "Design", href: `${root}/Design/Design.html`},
    { name: "Essays", href: `${root}/Essays/Essays.html`},
    { name: "Portfolio", href: `${root}/Portfolio/Portfolio work.html`},
    { name: "Commentary", href: `${root}/Commentary/Social and Political Commentary.html`},
    { name: "Software", href: `${root}/Software/Behance and Art Station.html`},
];

// i added my hovering fucntionality here so that when users hover over the navigation links it converys them to uppercase// i added my hovering fucntionality here so that when users hover over the nagigation links it converys them to uppercase
function handleMouseOver(event) {
    event.target.innerText = event.target.innerText.toUpperCase();
}

function handleMouseOut(event) {//converts back to lover case using the event target where the mouse will be
    event.target.innerText = event.target.innerText.toLowerCase();
}

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItemss) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = menuItem.name;
        a.setAttribute("href", menuItem.href);
        if (currentPage != menuItem.name) { //keeping the same functionality even when the page is not home page but the hovieirng will stilll work if we calll the function and add eevent listeners here
            a.addEventListener("mouseover", handleMouseOver);
            a.addEventListener("mouseout", handleMouseOut);
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    console.log("i dont even know whatgti say to test if  the game works or not");
    console.log("Menu is workingggg broooo!");//for my own piece of mind , i have this showig to prove its working .
};

