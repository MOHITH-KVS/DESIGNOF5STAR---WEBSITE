document.addEventListener("DOMContentLoaded", function () {
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

    // Stats Animation on Scroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function startStatsAnimation() {
        const statNumbers = document.querySelectorAll(".stat-number");

        statNumbers.forEach(stat => {
            if (!stat.dataset.animated && isElementInViewport(stat)) {
                stat.dataset.animated = true;
                const targetValue = parseInt(stat.getAttribute('data-target'));
                let currentValue = 0;

                const incrementStat = () => {
                    if (currentValue < targetValue) {
                        currentValue += 1;
                        stat.textContent = currentValue + "+";
                        setTimeout(incrementStat, 100);
                    } else {
                        stat.textContent = targetValue + "+";
                    }
                };

                incrementStat();
            }
        });
    }

    window.addEventListener("scroll", startStatsAnimation);
    window.addEventListener("load", startStatsAnimation);

    // Auto-Scrolling Logo Effect
    const logoContainer = document.querySelector(".logo-container");
    const logos = Array.from(logoContainer.children);

    logos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        logoContainer.appendChild(clone);
    });

    function scrollLogos() {
        const firstLogo = logoContainer.firstElementChild;
        const logoWidth = firstLogo.offsetWidth + 20;

        logoContainer.style.transition = "transform 2s linear";
        logoContainer.style.transform = `translateX(-${logoWidth}px)`;

        setTimeout(() => {
            logoContainer.appendChild(firstLogo);
            logoContainer.style.transition = "none";
            logoContainer.style.transform = "translateX(0)";
            setTimeout(scrollLogos, 100);
        }, 2000);
    }

    scrollLogos();

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

    // Modal Image Display
    function openModal(img) {
        const modal = document.getElementById("imageModal");
        const fullImage = document.getElementById("fullImage");
        const contactMessage = document.querySelector(".contact-message");

        fullImage.src = img.src;
        modal.style.display = "flex";
        fullImage.style.animation = "fadeIn 0.3s ease-in-out forwards";

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

    // Contact Form Submission
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const requirements = document.getElementById("requirements").value;

        // Simulate sending an email (Replace with actual backend email service)
        const mailtoLink = `mailto:designof5star@gmail.com?subject=Design%20Request&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ARequirements:%20${encodeURIComponent(requirements)}`;
        window.location.href = mailtoLink;

        // Display success message
        const successMessage = document.createElement("div");
        successMessage.classList.add("success-message");
        successMessage.textContent = "Your requirements have been sent successfully! We will reach you within 12 hours.";
        document.body.appendChild(successMessage);

        // Style success message
        successMessage.style.position = "fixed";
        successMessage.style.top = "20px";
        successMessage.style.left = "50%";
        successMessage.style.transform = "translateX(-50%)";
        successMessage.style.background = "#28a745";
        successMessage.style.color = "#fff";
        successMessage.style.padding = "10px 20px";
        successMessage.style.borderRadius = "5px";
        successMessage.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        successMessage.style.zIndex = "1000";
        successMessage.style.fontSize = "16px";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);

        // Clear form fields
        contactForm.reset();
    });

    // Interactive Redirect to Request a Design Section
    const contactButton = document.querySelector(".contact-btn");
    const requestSection = document.querySelector(".contact-form-container");
    const modal = document.getElementById("imageModal");

    contactButton.addEventListener("click", function () {
        document.querySelector(".contact-message").style.display = "none";
        if (modal) modal.style.display = "none";

        requestSection.scrollIntoView({ behavior: "smooth", block: "center" });

        requestSection.classList.add("highlight");
        setTimeout(() => requestSection.classList.remove("highlight"), 1500);
    });
    document.getElementById("gmail-button").addEventListener("click", function () {
        let name = encodeURIComponent(document.getElementById("name").value.trim());
        let email = encodeURIComponent(document.getElementById("email").value.trim());
        let requirements = encodeURIComponent(document.getElementById("requirements").value.trim());
    
        if (name === "" || email === "" || requirements === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        // Opens Gmail in a new tab with pre-filled details
        let gmailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=designsof5star@gmail.com&su=Request%20for%20Design&body=Name:%20${name}%0AEmail:%20${email}%0ARequirements:%20${requirements}`;
        
        let newTab = window.open(gmailURL, "_blank");
    
        // Check when the Gmail tab is closed (user should manually close it after sending)
        let checkTab = setInterval(function () {
            if (newTab && newTab.closed) {
                clearInterval(checkTab);
                showSuccessMessage();
            }
        }, 1000);
    });
    
    // Function to show a styled success message
    function showSuccessMessage() {
        let modal = document.createElement("div");
        modal.classList.add("success-modal");
        modal.innerHTML = `
            <div class="success-modal-content">
                <h2>From Designsof5star</h2>
                <p>Your message was sent successfully! 🎉</p>
                <p>We will contact you within 12 hours from your requested time.</p>
                <button class="close-btn">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    
        // Close modal when the button is clicked
        document.querySelector(".close-btn").addEventListener("click", function () {
            modal.remove();
        });
    }
    window.addEventListener("load", function () {
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none"; // Hide preloader
            document.getElementById("main-content").style.display = "block"; // Show main content
        }, 4000); // Adjust delay if needed
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
    
            // Check if the link is an internal section (starting with #)
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            } else {
                // Allow normal redirection for external pages
                window.location.href = targetId;
            }
        });
    });
    
    
    
});
