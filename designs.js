document.addEventListener("DOMContentLoaded", () => {
    const designs = [
        { name: "VIRTUAL REALITY LANDING PAGE INSPIRATION", category: "landing", img: "assests/figma trail 11 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#" },
        { name: "Social Media Poster 1", category: "social", img: "social1.jpg", desc: "Engaging social media post", designer: "5Star Designs", link: "#" },
        { name: "Branding Poster 1", category: "branding", img: "branding1.jpg", desc: "Creative branding poster", designer: "5Star Designs", link: "#" },
        { name: "Website UI 1", category: "website", img: "website1.jpg", desc: "User-friendly website UI", designer: "5Star Designs", link: "#" },
        { name: "App UI 1", category: "app", img: "app1.jpg", desc: "Smooth app UI design", designer: "5Star Designs", link: "#" }
    ];

    const gallery = document.getElementById("designGallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("designTitle");
    const modalDesc = document.getElementById("designDescription");
    const modalDesigner = document.getElementById("designerDetails");
    const modalLink = document.getElementById("designLink");
    const closeModal = document.getElementById("closeModal");
    const categoryButtons = document.querySelectorAll(".category-btn");

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
        modalImg.src = design.img; 
        modalImg.alt = design.name;
        modalTitle.textContent = design.name;
        modalDesc.textContent = design.desc;
        modalDesigner.textContent = `Designed by: ${design.designer}`;
        modalLink.innerHTML = `<a href="${design.link}" target="_blank">View Full Design</a>`;
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
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
