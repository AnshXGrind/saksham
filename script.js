// -----------------------------
// Typing Animation for Intro
// -----------------------------
const introText = "Tech builder. AI learner. Founder in progress. Turning ideas into digital reality — one line of code at a time.";
const typedIntro = document.getElementById("typed-intro");
let charIndex = 0;

function typeIntro() {
    if (charIndex < introText.length) {
        typedIntro.textContent += introText.charAt(charIndex);
        charIndex++;
        setTimeout(typeIntro, 50); // typing speed
    }
}

// Start typing when page loads
window.addEventListener("DOMContentLoaded", typeIntro);


// -----------------------------
// Instagram Placeholder API Hook
// -----------------------------
// Later you can replace these functions to fetch data from Instagram Graph API

function updateInstagramData() {
    // Example structure
    const channels = [
        { id: "mulionsh", followers: "12.3K", views: "45K" },
        { id: "saksham000", followers: "20K", views: "60K" },
        { id: "lifedocansh", followers: "8.5K", views: "25K" },
    ];

    channels.forEach(channel => {
        const followersEl = document.getElementById(`${channel.id}-followers`);
        const viewsEl = document.getElementById(`${channel.id}-views`);
        if (followersEl && viewsEl) {
            followersEl.textContent = channel.followers;
            viewsEl.textContent = channel.views;
        }
    });
}

// Update Instagram data on page load
window.addEventListener("DOMContentLoaded", updateInstagramData);

// -----------------------------
// Highlight Navbar Links on Scroll
// -----------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

