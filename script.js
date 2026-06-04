
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});



const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});




const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .edu-card, .cert-card, .contact-card"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    let t = 0;

    setInterval(() => {

        t += 0.02;

        heroImage.style.transform =
            `translateY(${Math.sin(t) * 6}px)`;

    }, 30);

}



const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 30px rgba(0,229,255,0.18)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});



const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", (e) => {

    if (resumeBtn.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Resume will be added later.");
    }

});



window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});