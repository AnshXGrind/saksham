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

// -----------------------------
// Reveal gallery only on click/intent
// -----------------------------
function showGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    if (gallery.classList.contains('show')) return;
    gallery.classList.add('show');
    gallery.classList.add('show');
    // use show class to set opacity via CSS
    gallery.classList.add('show');
    // remove hidden-by-default display:none by toggling class
    gallery.classList.remove('hidden-by-default');
    // smooth scroll into view
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// hook up nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#gallery') {
            e.preventDefault();
            showGallery();
        }
    });
});

// If user lands on URL with #gallery, show it
if (location.hash === '#gallery') {
    // wait for DOM ready
    window.addEventListener('DOMContentLoaded', showGallery);
}

// -----------------------------
// Skill images loader
// -----------------------------
function loadSkillImages() {
    const skillWrappers = document.querySelectorAll('.skill-image');
    skillWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        const src = wrapper.getAttribute('data-src');
        if (src && img) {
            img.src = src;
            img.style.display = 'block';
            const placeholder = wrapper.querySelector('.skill-image-placeholder');
            if (placeholder) placeholder.style.display = 'none';
        }
    });
}

// helper you can call from console to set a path
function setSkillImage(index, path) {
    const wrapper = document.querySelectorAll('.skill-image')[index];
    if (!wrapper) return;
    wrapper.setAttribute('data-src', path);
    const img = wrapper.querySelector('img');
    if (img) {
        img.src = path;
        img.style.display = 'block';
    }
    const placeholder = wrapper.querySelector('.skill-image-placeholder');
    if (placeholder) placeholder.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', loadSkillImages);

// -----------------------------
// Text hover glow & bubbles
// -----------------------------
function attachTextHoverEffects() {
    const selectors = ['p', 'h1', 'h2', 'h3', '.section-title', 'a', 'li', 'span'];
    const elements = document.querySelectorAll(selectors.join(','));

    elements.forEach(el => {
        // wrap element content in a wrapper to position bubbles
        if (!el.classList.contains('text-glow-wrapper')) {
            el.classList.add('text-glow-wrapper');
            el.classList.add('text-glow');
        }

        el.addEventListener('mouseenter', (e) => {
            el.classList.add('bright');
            // spawn a handful of bubbles
            for (let i = 0; i < 6; i++) createBubble(el);
        });

        el.addEventListener('mouseleave', (e) => {
            el.classList.remove('bright');
            // remove bubbles after animation
            const existing = el.querySelectorAll('.bubble');
            existing.forEach(b => b.remove());
        });
    });
}

function createBubble(container) {
    const rect = container.getBoundingClientRect();
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    const size = Math.round(24 + Math.random() * 48);
    bubble.style.width = bubble.style.height = size + 'px';
    // neon radial gradient backgrounds
    const neonSets = [
        ['#80D8FF', '#007AFF'],
        ['#FFB0E6', '#FF2D95'],
        ['#E6F7FF', '#A3E0FF'],
        ['#DAD6FF', '#A78BFF']
    ];
    const pick = neonSets[Math.floor(Math.random() * neonSets.length)];
    bubble.style.background = `radial-gradient(circle at 40% 40%, ${pick[0]}33, ${pick[1]}22, transparent 55%)`;
    // random position inside element
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    container.appendChild(bubble);
    // remove after animation completes
    setTimeout(() => {
        if (bubble && bubble.parentNode) bubble.parentNode.removeChild(bubble);
    }, 1500);
}

window.addEventListener('DOMContentLoaded', attachTextHoverEffects);

// -----------------------------
// Cursor-follow glow effect
// -----------------------------
(function initCursorGlow() {
    // don't enable on touch-only devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let visible = false;
    let raf = null;
    let lastX = 0, lastY = 0;

    function update() {
        glow.style.left = lastX + 'px';
        glow.style.top = lastY + 'px';
        glow.style.opacity = '1';
        glow.style.transform = 'translate(-50%, -50%) scale(1)';
        raf = null;
    }

    function onPointerMove(e) {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!raf) raf = requestAnimationFrame(update);
    }

    function onEnter() {
        visible = true;
        glow.style.opacity = '1';
    }

    function onLeave() {
        visible = false;
        glow.style.opacity = '0';
        glow.style.transform = 'translate(-50%, -50%) scale(0.9)';
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerenter', onEnter);
    window.addEventListener('pointerleave', onLeave);

    // Hide on touch start to avoid conflicts
    window.addEventListener('touchstart', () => {
        glow.style.display = 'none';
    }, { passive: true });
})();

// -----------------------------
// Auto-play hero video after load (respecting reduced motion)
// -----------------------------
window.addEventListener('load', () => {
    // respect user motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const vid = document.getElementById('hero-video');
    if (!vid) return;

    // Try to autoplay unmuted (user asked to unmute). Browsers may block autoplay with sound.
    vid.muted = false;
    const playAttempt = vid.play();
    if (playAttempt && playAttempt.then) {
        playAttempt.then(() => {
            // playing unmuted
        }).catch((err) => {
            // Autoplay with sound blocked. Fall back: mute and play, but show an unmute button.
            console.warn('Autoplay with sound blocked, falling back to muted autoplay', err);
            vid.muted = true;
            const p2 = vid.play();
            if (p2 && p2.then) p2.catch(() => {});

            // show unmute button
            let btn = document.querySelector('.video-unmute');
            if (!btn) {
                btn = document.createElement('button');
                btn.className = 'video-unmute';
                btn.textContent = 'Unmute Video';
                document.querySelector('.video-section').appendChild(btn);
                btn.addEventListener('click', () => {
                    vid.muted = false;
                    const p3 = vid.play();
                    if (p3 && p3.then) p3.catch(() => {});
                    btn.remove();
                });
            }
        });
    }
});

// Dynamic lighting for profile backlight: update CSS vars on pointer move over .profile-wrap
(function profileDynamicLight() {
    const wrap = document.querySelector('.profile-wrap');
    if (!wrap) return;
    // Skip on touch-only or reduced motion
    if (window.matchMedia && (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;

    wrap.addEventListener('pointermove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100; // percent
        const y = ((e.clientY - rect.top) / rect.height) * 100; // percent
        // sample a color based on position for slight variation
        const color1 = `rgba(${20 + Math.round(x / 100 * 235)}, ${80 + Math.round(y / 100 * 120)}, ${200}, 0.16)`;
        const color2 = `rgba(${Math.min(255, 120 + Math.round(x / 100 * 135))}, ${Math.max(0, 40 + Math.round(y / 100 * 120))}, ${220}, 0.06)`;
        wrap.style.setProperty('--p-x', x + '%');
        wrap.style.setProperty('--p-y', y + '%');
        wrap.style.setProperty('--p-color-1', color1);
        wrap.style.setProperty('--p-color-2', color2);
    }, { passive: true });

    wrap.addEventListener('pointerleave', () => {
        // reset to defaults
        wrap.style.removeProperty('--p-x');
        wrap.style.removeProperty('--p-y');
        wrap.style.removeProperty('--p-color-1');
        wrap.style.removeProperty('--p-color-2');
    });
})();

// -----------------------------
// One-time invert (black/white) effect on load
// -----------------------------
// one-time invert removed per user request

