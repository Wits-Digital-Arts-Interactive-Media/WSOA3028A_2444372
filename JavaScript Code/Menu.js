const MenuItems = [
    {name: "Home", href: "index.html"},
    {name: "Profile", href: "Profile.html"},
    {name: "BlogPage", href: "BlogPage.html"},
    {name: "Design", href: "Design.html"},
    {name: "Essays", href: "Essays.html"},
    {name: "Portfolio", href: "Portfolio work.html"}

]

//creating a  dynamic navigatiion bar:
export function Initialize (currentPage){
    const nav = document.querySelector("header > nav"); //looks for this specific selector in the html doccie we will initialize
    const ul = document.createElement("ul"); //creating an unordered loist to which we will house our list item in 
    for(let menuItem of MenuItems){
        const li = document.createElement("li") //creating the list item for each menu item in our menu titems array aboove
        if(currentPage != menuItem.name){
            const a = document.createElement("a"); // creating an a -element
            a.innerText = menuItem.name //initialize created element and sets its inner text to that of the menu item in the menu items array
            if(currentPage == "Home"){
                a.setAttribute("href", menuItem.href); // sett the href attribute  to the menu item.href so it can access items within the array
            }
            else if (currentPage =="BlogPage") { // if the current page is not home for example
                const _href = "/" + menuItem.href
                a.setAttribute("href", _href);
            }
            else{
                const _href = "../" + menuItem.href
                a.setAttribute("href", _href);
            }
            li.appendChild(a)//appends the list item to the a element
        }
        else{
            li.innerText = menuItem.name;
        }
        ul.appendChild(li); //appending the unorderedlist to the list item
        }
        nav.appendChild(ul); //appending the nav element to the unordered list to link or tie the nav to the lits of items in the unordered list
    }
    Initialize("Home");//passing in the argument value for the currentPage so it can execute the currentPage
