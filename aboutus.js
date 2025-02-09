document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInElements);
    fadeInElements(); // Run initially to check elements in view
});
