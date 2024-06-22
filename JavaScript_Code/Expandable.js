document.body.addEventListener("click", (ev)=> {
    const isExpandableTitle = ev.target.closest(".expandable_title_bar"); // the exclamation marks are basically a bool statement that will eiather return a true or false statement
    if(!isExpandableTitle){
        return; //so will not work bc we did not click the expaandable section that contains the nav bar inside of it
    }

    const expandable = isExpandableTitle.closest(".expandable"); // so here we are declaring const varibale that will basically check if the expdamable section was indeed clicked on and thus the closest will return true
    if(!expandable){
        return; //exit the expandable parent or section  if the expandabale section was not found
    }

    //console.log(expandable); //will return true or false if we are clicking on an area around the nav bar that is not expandable or if we are clicking on the expandable area

    expandable.classList.toggle("expandable--open"); // this will when it would work because the expanded section even target would be true
    console.log(" the expandable section is opening and closing yayyy");
});