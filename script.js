// 1. Wait for the page to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // 2. Select the button we created in HTML
    const shopButton = document.querySelector(".shopify-button");

    // 3. Add a "Click" event
    shopButton.addEventListener("click", function(event) {
        event.preventDefault(); // Stops the link from jumping the page
        alert("Item added to your glazed routine!");
    });

    // 4. Add a "Scroll" effect for the background
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            document.body.style.backgroundColor = "#ffffff"; // Turns white when scrolling
        } else {
            document.body.style.backgroundColor = "#f1f0ed"; // Goes back to cream
        }
    });

});
