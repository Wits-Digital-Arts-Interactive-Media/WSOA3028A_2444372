const menuItemss = [
    { name: "Home", href: "index.html"},
    { name: "Profile", href: "Profile.html"},
    { name: "Blogs", href: "BlogPage.html"},
    { name: "Design", href: "Design.html"},
    { name: "Essays", href: "Essays.html"},
    { name: "Portfolio", href: "Portfolio work.html"},
    { name: "Commentary", href: "Social and Political Commentary.html"},
    { name: "Software", href: "Behance and Art Station.html"},
];

function handleMouseOver(event) {// i added my hovering fucntionality here so that when users hover over the nagigation links it converys them to uppercase
    event.target.innerText = event.target.innerText.toUpperCase();
}

function handleMouseOut(event) {//converts back to lover case using the event target where the mouse will be
    event.target.innerText = event.target.innerText.toLowerCase();
}

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for (let menuItem of menuItemss) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = menuItem.name
        a.setAttribute("href", menuItem.href)
        if (currentPage != menuItem.name) { //keeping the same functionality even when the page is not home page but the hovieirng will stilll work if we calll the function and add eevent listeners here
            a.addEventListener("mouseover", handleMouseOver);
            a.addEventListener("mouseout", handleMouseOut);
        }
        li.appendChild(a)
        ul.appendChild(li)
    }
    nav.appendChild(ul)
    console.log("Menu is workingggg broooo!");
}