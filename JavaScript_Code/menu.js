const root = "/WSOA3028A_2444372";
const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Profile", href: `${root}/Profile/Profile.html` },
    { name: "Blogs", href: `${root}/Weekly_Blogs/BlogPage.html` },
    { name: "Design", href: `${root}/Design/Design.html` },
    { name: "StylesGuide", href: `${root}/Design/StylesGuide.html` },
    { name: "Essays", href: `${root}/Essays/Essays.html` },
    { name: "Portfolio", href: `${root}/Portfolio/Portfolio work.html` },
    { name: "Commentary", href: `${root}/Commentary/Social and Political Commentary.html` },
    { name: "Software", href: `${root}/Software/Behance and Art Station.html` },
];

function handleMouseOver(event) {
    event.target.innerText = event.target.innerText.toUpperCase();
}

function handleMouseOut(event) {
    event.target.innerText = event.target.innerText.toLowerCase();
}

function toggleMenu() {
    const nav = document.querySelector("header > nav");
    nav.classList.toggle("open");
}

export function initialise(currentPage) {
    const header = document.querySelector("header");
    const nav = header.querySelector("nav");
    const table = document.createElement("table");
    const tr = document.createElement("tr");

    for (let menuItem of menuItems) {
        const td = document.createElement("td");
        const a = document.createElement("a");
        a.innerText = menuItem.name;
        a.setAttribute("href", menuItem.href);
        if (currentPage !== menuItem.name) {
            a.addEventListener("mouseover", handleMouseOver);
            a.addEventListener("mouseout", handleMouseOut);
        }
        td.appendChild(a);
        tr.appendChild(td);
    }
    table.appendChild(tr);
    nav.innerHTML = ''; // Clear previous contents
    nav.appendChild(table);

    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.removeEventListener("click", toggleMenu); // Remove previous listener if any
        hamburger.addEventListener("click", toggleMenu);
    } else {
        console.error("Hamburger menu element has not been found, wagwann");
    }

    // Add CSS dynamically
    const style = document.createElement("style");
    style.textContent = `
        td {
            padding: 25px; 
        }
        a {
            color: forestgreen;
        }
        a:hover {
            color: gold;
        }
        @media (max-width: 768px) {
            nav {
                display: none;
                flex-direction: column;
                width: 100%;
            }
            nav.open {
                display: flex;
            }
            .hamburger {
                display: block;
                font-size: 30px;
                cursor: pointer;
            }
            table {
                width: 100%;
            }
            td {
                display: block;
                text-align: center;
                padding: 10px 0;
            }
        }
    `;
    document.head.appendChild(style);
}