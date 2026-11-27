(() => {
    "use strict";

    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* ==========================================
       CONFIG
    ========================================== */

    // To receive messages directly, create a free form at https://formspree.io
    // and paste its endpoint here, e.g. "https://formspree.io/f/xxxxxxxx".
    // While empty, the form opens the visitor's email app instead.
    const FORM_ENDPOINT = "https://formspree.io/f/xljbayya";
    const CONTACT_EMAIL = "suleymanmahir52@gmail.com";

    /* ==========================================
       THEME (dark / light)
    ========================================== */

    const themeToggle = $("#themeToggle");
    let onThemeChange = () => {};

    function applyTheme(theme) {
        root.dataset.theme = theme;

        const meta = $('meta[name="theme-color"]');
        if (meta) meta.content = theme === "light" ? "#f5f7fb" : "#080b14";

        const translate = window.portfolioI18n?.t || ((key) => key);
        themeToggle.setAttribute(
            "aria-label",
            theme === "light" ? translate("switchToDarkTheme") : translate("switchToLightTheme")
        );

        onThemeChange();
    }

    themeToggle.addEventListener("click", () => {
        const next = root.dataset.theme === "light" ? "dark" : "light";

        try {
            localStorage.setItem("theme", next);
        } catch (e) {
            /* storage unavailable: the theme still changes for this visit */
        }

        applyTheme(next);
    });

    applyTheme(root.dataset.theme || "dark");

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const navToggle = $("#navToggle");
    const navLinksList = $("#navLinks");

    function setMenu(open) {
        navLinksList.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
        const translate = window.portfolioI18n?.t || ((key) => key);
        navToggle.setAttribute("aria-label", open ? translate("closeMenu") : translate("openMenu"));
    }

    navToggle.addEventListener("click", () => {
        setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinksList.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenu(false);
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".site-header")) setMenu(false);
    });

    /* ==========================================
       SCROLL: progress bar + back-to-top
    ========================================== */

    const scrollProgress = $("#scrollProgress");
    const backToTop = $("#backToTop");
    let scrollTicking = false;

    function updateScroll() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (window.scrollY / max) * 100 : 0;

        scrollProgress.style.width = progress + "%";
        backToTop.classList.toggle("visible", window.scrollY > 600);

        scrollTicking = false;
    }

    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(updateScroll);
        }
    }, { passive: true });

    updateScroll();

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });

    /* ==========================================
       ACTIVE NAV LINK
    ========================================== */

    const navAnchors = $$(".nav-links a");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            navAnchors.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        });
    }, {
        // A section counts as "current" when it crosses the middle of the screen
        rootMargin: "-45% 0px -50% 0px"
    });

    $$("main > section[id]").forEach((section) => sectionObserver.observe(section));

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealTargets = $$(
        ".section-head, .about-content, .info-card, .skill-card, " +
        ".project-card, .timeline-item, .contact-info, .contact-form"
    );

    if (reduceMotion.matches) {
        $$(".skill-card").forEach((card) => card.classList.add("active"));
    } else {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.15 });

        revealTargets.forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    }

    /* ==========================================
       CARD TILT (mouse only)
    ========================================== */

    if (!reduceMotion.matches && window.matchMedia("(hover: hover)").matches) {
        $$(".skill-card, .project-card, .info-card").forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                card.style.setProperty("--rx", (-y * 16).toFixed(2) + "deg");
                card.style.setProperty("--ry", (x * 16).toFixed(2) + "deg");
            });

            card.addEventListener("pointerleave", () => {
                card.style.setProperty("--rx", "0deg");
                card.style.setProperty("--ry", "0deg");
            });
        });
    }

    /* ==========================================
       TYPING EFFECT
    ========================================== */

    const typingText = $("#typingText");
    let typingGeneration = 0;

    function startTypingEffect() {
        if (!typingText || reduceMotion.matches) return;

        const generation = ++typingGeneration;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        typingText.textContent = "";

        const runTyping = () => {
            if (generation !== typingGeneration) return;

            const typingWords = window.portfolioI18n?.getTypingWords() || [
                "Software Developer.",
                "Python Developer.",
                "Problem Solver.",
                "Tech Enthusiast."
            ];
            const word = typingWords[wordIndex];

            charIndex += isDeleting ? -1 : 1;
            typingText.textContent = word.substring(0, charIndex);

            let delay = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === word.length) {
                delay = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % typingWords.length;
                delay = 800;
            }

            setTimeout(runTyping, delay);
        };

        runTyping();
    }

    if (!reduceMotion.matches) {
        startTypingEffect();
    }

    window.addEventListener("languageChanged", () => {
        startTypingEffect();

        const translate = window.portfolioI18n?.t || ((key) => key);
        themeToggle.setAttribute(
            "aria-label",
            root.dataset.theme === "light"
                ? translate("switchToDarkTheme")
                : translate("switchToLightTheme")
        );

        navToggle.setAttribute(
            "aria-label",
            navToggle.getAttribute("aria-expanded") === "true"
                ? translate("closeMenu")
                : translate("openMenu")
        );
    });

    /* ==========================================
       PARTICLES (hero background)
    ========================================== */

    const canvas = $("#particlesCanvas");
    const ctx = canvas.getContext("2d");
    const hero = $("#home");

    let particles = [];
    let particleColor = "#00e5ff";
    let accentRgb = "0, 229, 255";
    let heroVisible = true;
    let frameId = null;
    const mouse = { x: null, y: null };

    function readThemeColors() {
        const styles = getComputedStyle(root);
        particleColor = styles.getPropertyValue("--accent").trim() || "#00e5ff";
        accentRgb = styles.getPropertyValue("--accent-rgb").trim() || "0, 229, 255";
    }

    onThemeChange = readThemeColors;
    readThemeColors();

    function createParticles() {
        const count = window.innerWidth < 650 ? 35 : 70;
        particles = [];

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.6,
                speedY: (Math.random() - 0.5) * 0.6
            });
        }
    }

    function resizeCanvas() {
        canvas.width = hero.clientWidth;
        canvas.height = hero.clientHeight;
        createParticles();
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Mouse repels nearby particles
            if (mouse.x !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150 && distance > 0) {
                    const force = (150 - distance) / 150;
                    p.x += (dx / distance) * force * 5;
                    p.y += (dy / distance) * force * 5;
                }
            }

            // Bounce off the edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        });

        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 14400) {
                    const alpha = 1 - Math.sqrt(distSq) / 120;

                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${accentRgb}, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        // Stop the loop when the hero is off-screen or the tab is hidden
        if (!heroVisible || document.hidden) {
            frameId = null;
            return;
        }

        drawParticles();
        frameId = requestAnimationFrame(loop);
    }

    function startParticles() {
        if (frameId === null && !reduceMotion.matches) {
            frameId = requestAnimationFrame(loop);
        }
    }

    if (!reduceMotion.matches) {
        resizeCanvas();
        startParticles();

        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeCanvas, 150);
        });

        new IntersectionObserver((entries) => {
            heroVisible = entries[0].isIntersecting;
            if (heroVisible) startParticles();
        }).observe(hero);

        document.addEventListener("visibilitychange", startParticles);

        hero.addEventListener("pointermove", (event) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        });

        hero.addEventListener("pointerleave", () => {
            mouse.x = null;
            mouse.y = null;
        });
    }

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const form = $("#contactForm");
    const formStatus = $("#formStatus");
    const submitBtn = $("#submitBtn");

    function setStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = "form-status" + (type ? " " + type : "");
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fields = $$("input, textarea", form);
        let firstInvalid = null;

        fields.forEach((field) => {
            const valid = field.checkValidity() && field.value.trim() !== "";
            field.classList.toggle("invalid", !valid);
            if (!valid && !firstInvalid) firstInvalid = field;
        });

        if (firstInvalid) {
            setStatus(window.portfolioI18n.t("formValidationError"), "error");
            firstInvalid.focus();
            return;
        }

        const name = $("#name").value.trim();
        const email = $("#email").value.trim();
        const message = $("#message").value.trim();

        if (FORM_ENDPOINT) {
            submitBtn.disabled = true;
            setStatus(window.portfolioI18n.t("formSending"), "");

            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: new FormData(form)
                });

                if (!response.ok) throw new Error("Request failed");

                form.reset();
                setStatus(window.portfolioI18n.t("formSuccess"), "success");
            } catch (error) {
                setStatus(window.portfolioI18n.t("formError"), "error");
            } finally {
                submitBtn.disabled = false;
            }
        } else {
            // No backend configured: open the visitor's email app
            const subject = encodeURIComponent(window.portfolioI18n.t("emailSubject") + name);
            const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");

            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            setStatus(window.portfolioI18n.t("formOpeningEmail"), "success");
        }
    });

    form.addEventListener("input", (event) => {
        event.target.classList.remove("invalid");
    });

    /* ==========================================
       FOOTER YEAR
    ========================================== */

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
})();
