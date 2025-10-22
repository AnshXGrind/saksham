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
    // smooth scroll into view and focus the internal scroll area so users see the internal scrollbar
    const viewport = gallery.querySelector('.gallery-viewport');
    if (viewport) {
        // ensure visible then focus so keyboard/scroll goes to the inner container
        viewport.scrollTop = 0;
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // focus after a short delay to allow smooth scrolling to begin
        setTimeout(() => { try { viewport.focus(); } catch (e) {} }, 450);
    } else {
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Close gallery: hide it (re-apply hidden-by-default)
function closeGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const viewport = gallery.querySelector('.gallery-viewport');
    if (viewport) viewport.blur();
    gallery.classList.add('hidden-by-default');
    gallery.classList.remove('show');
    // scroll back to top (optional) — keep current view
}

// Gallery size toggle: cycle between short/medium/tall
function toggleGallerySize() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const viewport = gallery.querySelector('.gallery-viewport');
    if (!viewport) return;
    if (viewport.classList.contains('size-medium')) {
        viewport.classList.remove('size-medium');
        viewport.classList.add('size-tall');
    } else if (viewport.classList.contains('size-tall')) {
        viewport.classList.remove('size-tall');
        viewport.classList.add('size-short');
    } else {
        viewport.classList.remove('size-short');
        viewport.classList.add('size-medium');
    }
}

// Wire up gallery control buttons and Esc-to-close
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('gallery-close-btn');
    const sizeBtn = document.getElementById('gallery-size-btn');
    const gallery = document.getElementById('gallery');
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); closeGallery(); });
    if (sizeBtn) sizeBtn.addEventListener('click', (e) => { e.preventDefault(); toggleGallerySize(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // only close if gallery is visible
            if (gallery && !gallery.classList.contains('hidden-by-default')) closeGallery();
        }
    });

    // Arrow key navigation for horizontal gallery when focused
    const viewport = document.querySelector('.gallery-viewport');
    if (viewport) {
        viewport.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                viewport.scrollBy({ left: 320, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                viewport.scrollBy({ left: -320, behavior: 'smooth' });
            }
        });
    }
    
    // Background music control
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('site-music-btn');
    if (musicBtn && bgMusic) {
        // start paused and muted; user toggles playback
        bgMusic.volume = 0.6;
        bgMusic.muted = true;

        musicBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const playing = musicBtn.getAttribute('aria-pressed') === 'true';
            if (playing) {
                // pause
                try { bgMusic.pause(); } catch (err) {}
                musicBtn.setAttribute('aria-pressed', 'false');
                musicBtn.setAttribute('aria-label', 'Play background music');
                musicBtn.querySelector('.music-play').style.display = '';
                musicBtn.querySelector('.music-pause').style.display = 'none';
            } else {
                // play (unmute)
                bgMusic.muted = false;
                const p = bgMusic.play();
                if (p && p.then) p.catch(() => {/* ignore */});
                musicBtn.setAttribute('aria-pressed', 'true');
                musicBtn.setAttribute('aria-label', 'Pause background music');
                musicBtn.querySelector('.music-play').style.display = 'none';
                musicBtn.querySelector('.music-pause').style.display = '';
            }
        });
    }

    // overlay play/pause (center of video) — wires to same bgMusic element
    const overlayBtn = document.getElementById('video-overlay-play');
    if (overlayBtn && bgMusic) {
        overlayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isPlaying = overlayBtn.getAttribute('aria-pressed') === 'true';
            if (isPlaying) {
                try { bgMusic.pause(); } catch (err) {}
                overlayBtn.setAttribute('aria-pressed', 'false');
                overlayBtn.setAttribute('aria-label', 'Play background music');
                overlayBtn.textContent = '▶';
                if (musicBtn) {
                    musicBtn.setAttribute('aria-pressed', 'false');
                    musicBtn.querySelector('.music-play').style.display = '';
                    musicBtn.querySelector('.music-pause').style.display = 'none';
                }
            } else {
                bgMusic.muted = false;
                const p = bgMusic.play();
                if (p && p.then) p.catch(() => {});
                overlayBtn.setAttribute('aria-pressed', 'true');
                overlayBtn.setAttribute('aria-label', 'Pause background music');
                overlayBtn.textContent = '❚❚';
                if (musicBtn) {
                    musicBtn.setAttribute('aria-pressed', 'true');
                    musicBtn.querySelector('.music-play').style.display = 'none';
                    musicBtn.querySelector('.music-pause').style.display = '';
                }
            }
        });
    }

    // When video unmute button toggles to unmuted, pause background music to avoid conflict
    const videoUnmuteBtn = document.getElementById('video-unmute-btn');
    const videoEl = document.getElementById('hero-video');
    if (videoUnmuteBtn && bgMusic && videoEl) {
        // observe clicks on the existing unmute button (it already toggles video.muted)
        videoUnmuteBtn.addEventListener('click', () => {
            // if video is now unmuted, pause bg music
            if (!videoEl.muted) {
                try { bgMusic.pause(); } catch (err) {}
                if (overlayBtn) { overlayBtn.setAttribute('aria-pressed', 'false'); overlayBtn.textContent = '▶'; }
                if (musicBtn) { musicBtn.setAttribute('aria-pressed', 'false'); musicBtn.querySelector('.music-play').style.display = ''; musicBtn.querySelector('.music-pause').style.display = 'none'; }
            }
        });
    }

    // Global click SFX for interactive buttons (exclude media controls to avoid feedback)
    const clickSfx = document.getElementById('click-sfx');
    let sfxLock = false;
    function playClickSfx() {
        if (!clickSfx) return;
        if (sfxLock) return;
        sfxLock = true;
        try {
            clickSfx.currentTime = 0;
            clickSfx.play().catch(() => {});
        } catch (err) {}
        setTimeout(() => { sfxLock = false; }, 220);
    }

    // Attach delegated listener to body for buttons and links
    document.body.addEventListener('pointerdown', (e) => {
        const el = e.target.closest && e.target.closest('button, a');
        if (!el) return;
        // ignore the music and video controls and gallery controls
        const excludeIds = ['site-music-btn', 'video-unmute-btn', 'gallery-close-btn', 'gallery-size-btn'];
        if (el.id && excludeIds.includes(el.id)) return;
        // don't play for form inputs
        if (el.tagName.toLowerCase() === 'a' && el.href && el.target === '_blank') {
            // let external links open; optionally play SFX
            playClickSfx();
            return;
        }
        playClickSfx();
    }, { passive: true });
});

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
    const unmuteBtn = document.getElementById('video-unmute-btn');
    if (!vid) return;

    // Start muted and try to autoplay. Show persistent unmute control so user can enable audio.
    vid.muted = true;
    const playAttempt = vid.play();
    if (playAttempt && playAttempt.then) {
        playAttempt.catch((err) => {
            // Autoplay with muted video may still fail in some edge cases;
            console.warn('Autoplay failed; user may need to interact to start media', err);
        });
    }

    if (unmuteBtn) {
        // Reflect initial state
        unmuteBtn.setAttribute('aria-pressed', 'false');
        const iconMuted = unmuteBtn.querySelector('.icon-muted');
        const iconUnmuted = unmuteBtn.querySelector('.icon-unmuted');

        function showMutedIcon(showMuted) {
            if (iconMuted) iconMuted.style.display = showMuted ? '' : 'none';
            if (iconUnmuted) iconUnmuted.style.display = showMuted ? 'none' : '';
        }
        // initial (muted)
        showMutedIcon(true);

        unmuteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle mute state
            const nowMuted = vid.muted;
            if (nowMuted) {
                // Attempt to unmute and resume playback
                vid.muted = false;
                const p = vid.play();
                if (p && p.then) p.catch(() => {/* ignore */});
                unmuteBtn.setAttribute('aria-pressed', 'true');
                unmuteBtn.setAttribute('aria-label', 'Mute video');
                showMutedIcon(false);
            } else {
                vid.muted = true;
                unmuteBtn.setAttribute('aria-pressed', 'false');
                unmuteBtn.setAttribute('aria-label', 'Unmute video');
                showMutedIcon(true);
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

// Toggle bottom Instagram handles when the Instagram button is clicked
(function bottomInstagramToggle() {
    const instaBtn = document.getElementById('bottom-instagram-btn');
    const showBtn = document.getElementById('show-handles-btn');
    const handles = document.getElementById('bottom-social-handles');
    if (!handles) return;

    function reveal(showSourceBtn) {
        const was = handles.classList.contains('revealed');
        if (was) {
            handles.classList.remove('revealed');
            handles.classList.add('hidden-by-default');
            handles.setAttribute('aria-hidden', 'true');
            if (instaBtn) instaBtn.setAttribute('aria-expanded', 'false');
            if (showBtn) showBtn.setAttribute('aria-expanded', 'false');
        } else {
            handles.classList.remove('hidden-by-default');
            handles.classList.add('revealed');
            handles.setAttribute('aria-hidden', 'false');
            if (instaBtn) instaBtn.setAttribute('aria-expanded', 'true');
            if (showBtn) showBtn.setAttribute('aria-expanded', 'true');
            // add animate-handles so children animate; ensure it's applied after layout
            handles.classList.add('animate-handles');
            // smooth scroll into view
            handles.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    if (instaBtn) {
        instaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            reveal(instaBtn);
        });
    }

    if (showBtn) {
        showBtn.addEventListener('click', (e) => {
            e.preventDefault();
            reveal(showBtn);
        });
    }

    // Allow clicking outside the handles to close them
    document.addEventListener('click', (e) => {
        if (!handles.classList.contains('revealed')) return;
        const within = handles.contains(e.target) || (instaBtn && instaBtn.contains(e.target)) || (showBtn && showBtn.contains(e.target));
        if (!within) {
            reveal();
        }
    });

    // Auto-expand on touch devices or narrow screens for discoverability (mobile-first)
    const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const smallScreen = window.innerWidth <= 720;
    if (isTouch || smallScreen) {
        // reveal handles after a brief delay so layout stabilizes
        setTimeout(() => {
            if (!handles.classList.contains('revealed')) {
                handles.classList.remove('hidden-by-default');
                handles.classList.add('revealed');
                handles.setAttribute('aria-hidden', 'false');
                if (instaBtn) instaBtn.setAttribute('aria-expanded', 'true');
                if (showBtn) showBtn.setAttribute('aria-expanded', 'true');
            }
        }, 350);
    }
})();

// -----------------------------
// One-time invert (black/white) effect on load
// -----------------------------
// one-time invert removed per user request

