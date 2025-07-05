document.addEventListener("DOMContentLoaded", () => {
    const designs = [
        { name: "VIRTUAL REALITY LANDING PAGE INSPIRATION", category: "landing", img: "assests/figma trail 11 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "BENELLI BIKE  LANDING PAGE INSPIRATION", category: "landing", img: "./assests/BENELLI ORIGINAL.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR MOTO EV LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail -15.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR CYCLES LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 1.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "BOX-CHAMPY GYM LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 3 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR SIPS JUICE LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 4.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR BEATS LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 5 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR SHOES LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 6.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR TRIPS LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 7.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR BAGS LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 8 (1).png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR CARES LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 9.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR STUDIOS LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 10.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR HOMES LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 12.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "5STAR COFFEES LANDING PAGE INSPIRATION", category: "landing", img: "./assests/figma trail 13.png", desc: "Modern UI landing page", designer: "5Star Designs", link: "#", social: "#" },
        { name: "YASH INTERIORS", category: "social", img: "./assests/YASH INTERIORS WHITE FINAL.png", desc: "Engaging social media post", designer: "5Star Designs", link: "#", social: "https://instagram.com/5StarDesigns" },
        { name: "Branding Poster 1", category: "branding", img: "./assests/Fragrance That Defines You.png", desc: "Creative branding poster", designer: "5Star Designs", link: "#", social: "#" },
        { name: "Website UI 1", category: "website", img: "./assests/Instagram post - 4 (1).png", desc: "User-friendly website UI", designer: "5Star Designs", link: "https://dribbble.com/design1", social: "#" },
        { name: "App UI 1", category: "app", img: "./assests/linkedin.png", desc: "Smooth app UI design", designer: "5Star Designs", link: "#", social: "https://twitter.com/5StarDesigns" },
        { name: "PAKKA NAATU RUCHULU FOOD MENU", category: "menu-designs", img: "./assests/pakka nattu ruchulu final.jpg", desc: "PROFESSIONAL CLOUD KITCHEN MENU", designer: "5Star Designs", link: "#", social: "https://twitter.com/5StarDesigns" },
        { name: "YASH INTERIORS", category: "promotion", img: "./assests/YASH INTERIORS WHITE A4 FINAL.png", desc: "PROFESSIONAL BRANDING PROMOTIONAL POSTERS", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/reel/DGrx5l1oTHI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "YASH INTERIORS", category: "social", img: "./assests/YASH INTERIORS DARK FINAL.png", desc: "PROFESSIONAL BRANDING PROMOTIONAL INTERIOR DESIGN SERVICES POSTER", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DGHttYqIcYb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "CHEF FINDER WEBSITE UI", category: "website", img: "./assests/Desktop - 1 (6).png", desc: "PROFESSIONAL WEBSITE FOR CHEFS BOOKING ", designer: "5Star Designs", link: "#", social: "https://twitter.com/5StarDesigns" },
        { name: "MEAT-SEA BY 5STAR WEBSITE UI", category: "website", img: "./assests/figma trail - 14.png", desc: "PROFESSIONAL SHOPPING ECOMMERCE WEBSITE", designer: "5Star Designs", link: "#", social: "https://twitter.com/5StarDesigns" },
        { name: "5STAR CRACKERS WEBSITE UI", category: "website", img: "./assests/figma trail-16.png", desc: "PROFESSIONAL CRACKERS WEBSITE", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DGHttYqIcYb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4", category: "fest", img: "assests/AAVISHKAR FINAL POSTER EDITED.png", desc: "FEST POSTER FOR THE AAVISHKAR SEASON-4", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DG8XMTSB5Cm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON- 4 THROWBALL POSTER", category: "fest", img: "assests/AAVISHKAR BASKET BALL POSTER.png", desc: "THROW BALL POSTER FOR THE AAVISHKAR SEASON-4", designer: "5Star Designs", link: "#", social: "#" },
        { name: "AAVISHKAR SEASON-4 E-POSTER EVENT POSTER", category: "fest", img: "assests/AAVISHKAR 4 E-POSTER POSTER.png", desc: "AAVISHKAR SEASON-4 EPOSTER EVENT POSTER", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCwIUhFF2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 TECHNICAL QUIZ EVENT POSTER", category: "fest", img: "assests/AAVISHKAR 4 TECHNICAL QUIZ POSTER.png", desc: "AAVISHKAR SEASON-4 TECHNICAL QUIZ EVENT POSTER", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 ESPORTS EVENT POSTER", category: "fest", img: "assests/AAVISHKAR 4 ESPORTS POSTER.png", desc: "AAVISHKAR SEASON-4 E-SPORTS EVENT POSTER", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCwIUhFF2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 BROCHURE PART 1", category: "fest", img: "./assests/1.png", desc: "AAVISHKAR SEASON-4 CLEAN AND ATTRACTIVE BROCHURE", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHz9S6-tmIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 BROCHURE PART 2", category: "fest", img: "./assests/2.png", desc: "AAVISHKAR SEASON-4 CLEAN AND ATTRACTIVE BROCHURE", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHz9S6-tmIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 CODEATHON POSTER", category: "fest", img: "./assests/AAVISHKAR 4 CODEATHON POSTER (A3).png", desc: "AAVISHKAR SEASON-4 themed codeathon poster", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 CULTURALS POSTER", category: "fest", img: "./assests/AAVISHKAR 4 CULTURALS POSTER.png", desc: "AAVISHKAR SEASON-4 attractive joyful poster", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 ESCAPE ROOM POSTER", category: "fest", img: "./assests/AAVISHKAR 4 ESCAPE ROOM POSTER.png", desc: "AAVISHKAR SEASON-4 themed and joyful poster", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCwIUhFF2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 HACKATHON POSTER", category: "fest", img: "./assests/AAVISHKAR 4 HACKATHON POSTER.png", desc: "AAVISHKAR SEASON-4 HACKATHON MAINLY DESIGNED ACCORDING TO THE THEME", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 IDEATHON POSTER", category: "fest", img: "./assests/AAVISHKAR 4 IDEATHON POSTER.png", desc: "AAVISHKAR SEASON-4 ideathon which completed dedicated to the theme", designer: "Satya", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 ML MODELLING POSTER", category: "fest", img: "./assests/AAVISHKAR 4 ML MODELLING POSTER (1).png", desc: "AAVISHKAR SEASON 4 ML MODELLING POSTER WHICH DESIGNED ACCORDING TO THEME OF ML", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 ROBOTICS & IOT POSTER", category: "fest", img: "./assests/AAVISHKAR 4 ROBOTICS & IOT.png", desc: "AAVISHKAR SEASON-4 robotics which completed dedicated to the theme and classy design", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 TREASURE HUNT POSTER", category: "fest", img: "./assests/AAVISHKAR 4 TREASURE HUNT POSTER.png", desc: "AAVISHKAR SEASON-4 treasurehunt which based on comic style design", designer: "Vamsi", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 WORKSHOP POSTER", category: "fest", img: "./assests/AAVISHKAR 4 WORKSHOP POSTER (1).png", desc: "AAVISHKAR SEASON-4 workshop which completed dedicated to the theme", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 FLASH MOB POSTER", category: "fest", img: "./assests/AAVISHKAR FLASH MOB POSTER.png", desc: "AAVISHKAR SEASON-4 flash mob which completely designed a party theme", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 NON-TECHNICAL QUIZ POSTER", category: "fest", img: "./assests/AAVISHKAR NON-TECHNICAL QUIZ POSTER.png", desc: "AAVISHKAR SEASON-4 flash mob which completely designed a party theme", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "AAVISHKAR SEASON-4 BEST OUT OF WASTE", category: "fest", img: "./assests/Best Out of Waste.png", desc: "AAVISHKAR SEASON-4 flash mob which completely designed a party theme", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DHGCd10hm8E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "CAMPA COLA DESIGN", category: "flyer-posters", img: "./assests/CAMPA-COLA.png", desc: "Campa cola conceptual inspirational flyer design", designer: "5Star Designs", link: "#", social: "https://www.instagram.com/p/DK6HgTRyq5T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "DONUT DESIGN", category: "flyer-posters", img: "./assests/donut poster.jpg", desc: "donut flyer design with minimilastic and candy theme", designer: "5Star Designs", link: "#", social: "" },
        { name: "NIKE AIR MAX DNX LEGO", category: "flyer-posters", img: "./assests/Nike Air Max Dn x LEGO.jpg", desc: "Nike air max conceptual and branding flyer design", designer: "5Star Designs", link: "#", social: "" },

         
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
