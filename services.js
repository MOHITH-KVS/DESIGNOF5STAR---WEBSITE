document.addEventListener("DOMContentLoaded", function () {
    // Select tagline section
    const tagline = document.querySelector(".tagline");

    // Add class to trigger animation
    setTimeout(() => {
        tagline.classList.add("show");
    }, 300); // Delay for smooth appearance

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".buttons").classList.add("show");
    });
    
});
