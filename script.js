// Smooth Scroll Navbar Behavior
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const helloText = document.querySelector(".hello-text h1");

    // Toggle navbar styles on scroll
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
        helloText.style.fontSize = "4rem"; // Larger "Hello" text
    } else {
        navbar.classList.remove("scroll");
        helloText.style.fontSize = "3rem"; // Smaller "Hello" text
    }
});

// Resume Download
document.querySelector(".resume-btn").addEventListener("click", () => {
    const resumeUrl = "path-to-your-resume.pdf"; // Replace with your resume file URL
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Chaithanya_Teja_Resume.pdf"; // Desired file name
    link.click();
});

// Smooth Hover Effect for Navbar Items
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

// Smooth Hover Effect for About Section Cards
const aboutSections = document.querySelectorAll(".about-left, .about-right");
aboutSections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
        section.style.transform = "translateY(-10px)";
    });
    section.addEventListener("mouseleave", () => {
        section.style.boxShadow = "none";
        section.style.transform = "translateY(0)";
    });
});
