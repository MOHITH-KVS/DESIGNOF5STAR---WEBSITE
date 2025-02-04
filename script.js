document.addEventListener("DOMContentLoaded", function() {
    // Slideshow Functionality
    const slides = document.querySelector(".slides");
    let index = 0;

    function slideShow() {
        index++;
        if (index > 2) { index = 0; }
        slides.style.transform = `translateX(-${index * 100}vw)`;
    }
    setInterval(slideShow, 3000);

    // Social Media Hover Effect
    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "#00aaff";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.color = "#ffffff";
        });
    });

    // Smooth Scroll on Navigation Link Click
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Animate Stats Numbers (for Clients, Collaborations, Designs)
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach(stat => {
        const targetValue = parseInt(stat.getAttribute('data-target'));
        let currentValue = 0;

        const incrementStat = () => {
            if (currentValue < targetValue) {
                currentValue += Math.floor(targetValue / 100);
                stat.textContent = currentValue;
                setTimeout(incrementStat, 30);
            } else {
                stat.textContent = targetValue;
            }
        };
        incrementStat();
    });

    // Testimonial Scrolling
    const testimonialContainer = document.querySelector(".testimonial-container");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    if (testimonialContainer) {
        leftBtn.addEventListener("click", () => {
            testimonialContainer.scrollBy({ left: -300, behavior: "smooth" });
        });

        rightBtn.addEventListener("click", () => {
            testimonialContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    }

    // Modal Image Display with Pop-out Effect
    function openModal(img) {
        const modal = document.getElementById("imageModal");
        const fullImage = document.getElementById("fullImage");
        const contactMessage = document.querySelector(".contact-message");

        fullImage.src = img.src;
        modal.style.display = "flex";

        // Ensure pop-out animation
        fullImage.style.animation = "fadeIn 0.3s ease-in-out forwards";

        // Show contact details only on hover
        fullImage.addEventListener("mouseover", function () {
            contactMessage.style.display = "block";
        });

        fullImage.addEventListener("mouseout", function () {
            contactMessage.style.display = "none";
        });
    }

    function closeModal() {
        document.getElementById("imageModal").style.display = "none";
    }

    document.querySelectorAll(".design-item img").forEach((img) => {
        img.addEventListener("click", function () {
            openModal(this);
        });
    });

    document.querySelector(".close").addEventListener("click", closeModal);
});
