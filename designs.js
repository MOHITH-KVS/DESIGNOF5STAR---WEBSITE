document.addEventListener("DOMContentLoaded", () => {
    const designs = [
        { name: "Landing Page 1", category: "landing", img: "landing1.jpg", desc: "Modern UI landing page", designer: "5Star Designs" },
        { name: "Social Media Poster 1", category: "social", img: "social1.jpg", desc: "Engaging social media post", designer: "5Star Designs" },
        { name: "Branding Poster 1", category: "branding", img: "branding1.jpg", desc: "Creative branding poster", designer: "5Star Designs" },
        { name: "Website UI 1", category: "website", img: "website1.jpg", desc: "User-friendly website UI", designer: "5Star Designs" },
        { name: "App UI 1", category: "app", img: "app1.jpg", desc: "Smooth app UI design", designer: "5Star Designs" }
    ];

    const gallery = document.getElementById("designGallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
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
        modalText.innerHTML = `
            <h2>${design.name}</h2>
            <p>${design.desc}</p>
            <p><strong>Designer:</strong> ${design.designer}</p>
            <div class="modal-buttons">
                <a href="#" class="btn">Buy Now</a>
                <a href="#" class="btn">Contact Us</a>
            </div>
            <span class="watermark">Designsof5star</span>
        `;
    }

    closeModal.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active");
            btn.classList.add("active");
            displayDesigns(btn.dataset.category);
        });
    });

    displayDesigns();
});
