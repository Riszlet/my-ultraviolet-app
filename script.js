// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const changeTextBtn = document.getElementById("changeTextBtn");
    const displayText = document.getElementById("displayText");

    // Add a click event listener to the button
    changeTextBtn.addEventListener("click", () => {
        displayText.textContent = "You clicked the button!";
    });
});
