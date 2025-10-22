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
        { id: "mulionsh", followers: "12", views: "10k" },
        { id: "saksham000", followers: "230", views: "50K" },
        { id: "lifedocansh", followers: "8", views: "500" },
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


// -----------------------------
// Gallery image color sampling
// -----------------------------
function setGalleryGlows() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const img = item.querySelector('img');
        if (!img) return;

        // If image is not loaded yet, wait for it
        if (!img.complete) {
            img.addEventListener('load', () => sampleAndApply(img, item));
        } else {
            sampleAndApply(img, item);
        }
    });

    function sampleAndApply(img, item) {
        // Use a small canvas to sample colors
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const w = canvas.width = Math.min(40, img.naturalWidth);
            const h = canvas.height = Math.min(40, img.naturalHeight);
            ctx.drawImage(img, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;

            let r = 0, g = 0, b = 0, count = 0;
            for (let i = 0; i < data.length; i += 4) {
                const alpha = data[i+3];
                if (alpha === 0) continue; // skip transparent pixels
                r += data[i];
                g += data[i+1];
                b += data[i+2];
                count++;
            }
            if (count === 0) return;
            r = Math.round(r / count);
            g = Math.round(g / count);
            b = Math.round(b / count);

            // Create two tone variations for the glow
            const color1 = `rgba(${r}, ${g}, ${b}, 0.18)`;
            const color2 = `rgba(${Math.min(255, r+60)}, ${Math.max(0, g-30)}, ${Math.min(255, b+40)}, 0.12)`;
            item.style.setProperty('--glow-color-1', color1);
            item.style.setProperty('--glow-color-2', color2);
        } catch (e) {
            // Canvas operations may fail for cross-origin images; fall back to defaults
            // (Most images in this project are local so this should be fine.)
            console.warn('Color sampling failed for image', img, e);
        }
    }
}

window.addEventListener('DOMContentLoaded', setGalleryGlows);


// -----------------------------
// Lightbox (full image preview)
// -----------------------------
function createLightbox() {
    // Create DOM nodes
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">×</button>
            <img src="" alt="Full preview">
        </div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.lightbox-close');

    function open(src, alt) {
        imgEl.src = src;
        imgEl.alt = alt || 'Image preview';
        overlay.classList.add('open');
        // prevent body scroll when open
        document.body.style.overflow = 'hidden';
        // focus close button for accessibility
        closeBtn.focus();
    }

    function close() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        imgEl.src = '';
    }

    // Close on overlay click (outside the image)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);

    // ESC key closes
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });

    return { open, close };
}

const LIGHTBOX = createLightbox();

function wireUpImageClicks() {
    const images = document.querySelectorAll('.gallery-item img, .insta-posts img, .insta-card img');
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            // use data-src if present (for lazy-loaded systems), otherwise src
            const src = img.getAttribute('data-src') || img.src;
            const alt = img.alt || '';
            LIGHTBOX.open(src, alt);
        });
    });
}

window.addEventListener('DOMContentLoaded', wireUpImageClicks);

