//in here i'm basically trying to change the mouse cursor to a pointer whenever users hover over certain items with the relevenat id

const link = document.getElementById('link'); //so its first collects the id from the html doccie


function changeCursorToPointer(element) { //here im changing  the cursor to a pointer and making text uppercase for which the pointer is on 
  element.style.cursor = "pointer";
  element.style.textTransform = "uppercase"
}

function changeCursorToDefault(element) { //taking the cursor to the way it was initially and changing the text back to initial lowercase
  element.style.cursor = "default";
  element.style.textTransform = "lowercase"
}

// Adding  event listeners for mouseover and mouseout below 

link.addEventListener('mouseover', function() {
  changeCursorToPointer(this); //using "this" to refer to the local context in the function declared or that we executing in  (Mike Geyser, 2024) 
});
link.addEventListener('mouseout', function() {
  changeCursorToDefault(this);
})
