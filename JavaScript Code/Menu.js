const menuItems = [
    { name: "Home", href: "index.html"},
    { name: "Profile", href: "Profile.html"},
    { name: "Design", href: "Design.html"},
    { name: "Essays", href: "Essays.html"},
    { name: "Portfolio", href: "Portfolio work.html"},
    { name: "Commentary", href: "Social and Political Commentary.html"},
    { name: "Practice", href: "Practicing JS.html"},
]
   export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
    console.log("yayyy, its workingggggg!!!!")
}
