document.addEventListener("DOMContentLoaded", () => {//callback initiation to  load and parse the html content to
    // indicate the dom trees is ready so its safe to manipulate the content for js purposes/functionalities

    //  here  below im initializing variables by selecting the element with the ID "test"
    const weekTxt = document.getElementById("test");

    // Function to animate text in a wavy-like format. this was really just to make it look "cool" for aesthetic purporses
    function animateText(text) {
        let result = '';
        const amplitude = 15; // Amplitude of the wave
        const frequency = 0.3; // Frequency of the wave
        for (let i = 0; i < text.length; i++) {
            const offsetValue = amplitude * Math.sin(frequency * i);
            result += `<span style="position:relative; top:${offsetValue}px">${text[i]}</span>`;
        }
        return result;
    }

    // Function to gradually reveal the text in a wavy-like format
    function showWavyText(element, text) {
        let index = 0;
        const interval = setInterval(() => {
            element.innerHTML = animateText(text.substr(0, index));
            index++;
            if (index > text.length) {
                clearInterval(interval);
            }
        }, 200); // Speed of animation so it regulates how fast the letters of the phrase im using appears
    }

    // Call the function to gradually reveal the text
    showWavyText(weekTxt, "All about Dumziii's Rants");

    console.log("You're definitely workingggg , brooo!");
});