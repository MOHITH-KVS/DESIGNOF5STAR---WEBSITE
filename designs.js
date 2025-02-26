document.addEventListener("DOMContentLoaded", () => {
    const designs = [
        { name: "VIRTUAL REALITY LANDING PAGE INSPIRATION", category: "landing", img: "assests/figma trail 11 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "Social Media Poster 1", category: "social", img: "assests/YASH INTERIORS WHITE FINAL.png", desc: "Engaging social media post", designer: "5Star Designs", link: "#", social: "https://instagram.com/5StarDesigns" },
        { name: "Branding Poster 1", category: "branding", img: "assests/Fragrance That Defines You.png", desc: "Creative branding poster", designer: "5Star Designs", link: "#", social: "#" },
        { name: "Website UI 1", category: "website", img: "assets/website1.jpg", desc: "User-friendly website UI", designer: "5Star Designs", link: "https://dribbble.com/design1", social: "#" },
        { name: "App UI 1", category: "app", img: "assets/app1.jpg", desc: "Smooth app UI design", designer: "5Star Designs", link: "#", social: "https://twitter.com/5StarDesigns" }
    ];
    
    console.log("Designs loaded:", designs);
    
    const gallery = document.getElementById("designGallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("designTitle");
    const modalDesc = document.getElementById("designDescription");
    const modalDesigner = document.getElementById("designerDetails");
    const modalCategory = document.getElementById("designCategory");
    const modalDesignLink = document.getElementById("designLinks");
    const modalSocialLink = document.getElementById("socialLinks");
    const closeModal = document.getElementById("closeModal");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const modalOverlay = document.getElementById("modalOverlay");

    function displayDesigns(category = "all") {
        gallery.innerHTML = "";
        const filteredDesigns = designs.filter(d => category === "all" || d.category === category);

        if (filteredDesigns.length === 0) {
            gallery.innerHTML = "<p class='no-designs'>No designs available.</p>";
            return;
        }

        filteredDesigns.forEach(d => {
            const div = document.createElement("div");
            div.classList.add("design-item");
            div.innerHTML = `
                <img src="${d.img}" alt="${d.name}" loading="lazy">
                <p class="design-name">${d.name}</p>
            `;
            div.addEventListener("click", () => openModal(d));
            gallery.appendChild(div);
        });
    }

    function openModal(design) {
        modal.style.display = "flex";
        modalImg.src = design.img || "default.jpg"; 
        modalImg.alt = design.name || "No Image";
        modalTitle.textContent = design.name || "No Title";
        modalDesc.textContent = design.desc || "No Description";
        modalDesigner.textContent = `Designer: ${design.designer || "Unknown"}`;
        modalCategory.textContent = `Category: ${design.category || "N/A"}`;

        modalImg.style.float = "left";
        modalTitle.style.textAlign = "right";
        modalDesc.style.textAlign = "left";
        modalDesigner.style.textAlign = "right";
        modalCategory.style.textAlign = "left";
        modalDesignLink.style.textAlign = "right";
        modalSocialLink.style.textAlign = "left";

        // Handle Design Links
        if (design.link && design.link !== "#") {
            modalDesignLink.href = design.link;
            modalDesignLink.textContent = "View Full Design";
            modalDesignLink.style.display = "inline";
        } else {
            modalDesignLink.style.display = "none";
        }

        // Handle Social Links
        if (design.social && design.social !== "#") {
            modalSocialLink.href = design.social;
            modalSocialLink.textContent = "View Social Media";
            modalSocialLink.style.display = "inline";
        } else {
            modalSocialLink.style.display = "none";
        }

        document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    
    function closeModalHandler() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scroll
    }

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
    
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModalHandler();
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            categoryButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            displayDesigns(this.getAttribute("data-category"));
        });
    });

    displayDesigns();
});
