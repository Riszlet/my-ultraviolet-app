// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const displayText = document.getElementById("displayText");

    // Add a click event listener to the search button
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value;
        displayText.textContent = `You searched for: "${query}"`;
    });
});
