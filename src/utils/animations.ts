// src/utils/animations.ts - Main animation controller

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

// Initialize smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

// Integrate GSAP and Lenis
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Create floating gradients
const createGradients = () => {
    const container = document.querySelector(".gradient-container");
    if (!container) return;

    const gradients = container.querySelectorAll(".gradient");

    gradients.forEach((gradient, index) => {
        const xPos = 100 * Math.random();
        const yPos = 100 * Math.random();

        gsap.set(gradient, {
            x: `${xPos}vw`,
            y: `${yPos}vh`,
            scale: Math.random() * 0.8 + 0.6,
        });

        animateGradient(gradient, index);
    });
};

// Animate each gradient blob
const animateGradient = (gradient: Element, index: number) => {
    const duration = Math.random() * 60 + 30;
    const xMovement = Math.random() * 30 - 15;
    const yMovement = Math.random() * 30 - 15;
    const scaleChange = Math.random() * 0.5 + 0.8;

    gsap.to(gradient, {
        x: `+=${xMovement}vw`,
        y: `+=${yMovement}vh`,
        scale: scaleChange,
        duration: duration,
        ease: "sine.inOut",
        onComplete: () => animateGradient(gradient, index),
    });
};

// Initialize text animations
const initTextAnimations = () => {
    // Title reveal animations
    const titleElements = document.querySelectorAll(".reveal-title");

    titleElements.forEach((title) => {
        const splitTitle = new SplitText(title, { type: "chars,words" });

        gsap.from(splitTitle.chars, {
            opacity: 0,
            y: 100,
            rotationX: -90,
            stagger: 0.02,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });

    // Paragraph reveal animations
    const paragraphs = document.querySelectorAll(".reveal-text");

    paragraphs.forEach((paragraph) => {
        const splitParagraph = new SplitText(paragraph, { type: "lines" });

        gsap.from(splitParagraph.lines, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paragraph,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    });
};

// Special full-screen text effect for History sections
const initHistoryAnimations = () => {
    const historySections = document.querySelectorAll(".history");

    historySections.forEach((section, index) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        const paragraphs = section.querySelectorAll("p");
        const splitTexts = [] as SplitText[];

        // Create split text for each paragraph
        paragraphs.forEach((paragraph) => {
            const split = new SplitText(paragraph, { type: "chars,words" });
            splitTexts.push(split);

            // Set initial state
            gsap.set(split.chars, { opacity: 0, y: 50 });
        });

        // Add animations to timeline
        splitTexts.forEach((split, i) => {
            const delay = i * 0.2;

            timeline.to(
                split.chars,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: "back.out",
                },
                delay
            );

            // If not the last paragraph, fade it out before the next comes in
            if (i < splitTexts.length - 1) {
                timeline.to(
                    split.chars,
                    {
                        opacity: 0.3,
                        y: -30,
                        duration: 0.8,
                        stagger: 0.01,
                        ease: "power2.in",
                    },
                    delay + 0.5
                );
            }
        });

        // Add color change to the background
        if (index % 2 === 0) {
            timeline.fromTo(
                section,
                { backgroundColor: "var(--neutral-900)" },
                { backgroundColor: "var(--primary-900)", duration: 1 },
                0
            );
        } else {
            timeline.fromTo(
                section,
                { backgroundColor: "var(--neutral-900)" },
                { backgroundColor: "var(--neutral-800)", duration: 1 },
                0
            );
        }

        // Create a parallel timeline for the span elements
        const spanElements = section.querySelectorAll("p > span");

        if (spanElements.length > 0) {
            const spanTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            spanTimeline.fromTo(
                spanElements,
                {
                    color: "var(--primary-500)",
                    scale: 1,
                },
                {
                    color: "var(--primary-300)",
                    scale: 1.1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "elastic.out(1, 0.3)",
                },
                0
            );
        }
    });
};

// Horizontal scroll section for Ingredients
const initIngredientsHorizontalScroll = () => {
    const ingredientsSection = document.querySelector("section#ingredients");
    if (!ingredientsSection) return;

    const cards = ingredientsSection.querySelector(".cards-container");
    if (!cards) return;

    // Get the width of all cards combined
    const cardsWidth = cards.scrollWidth;

    gsap.to(cards, {
        x: () => -(cardsWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
            trigger: ingredientsSection,
            start: "top top",
            end: () => `+=${cardsWidth}`,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            scrub: 1,
        },
    });

    // Add parallax effect to the ingredient cards
    const ingredientCards = ingredientsSection.querySelectorAll("article");

    ingredientCards.forEach((card, index) => {
        const depth = index * 0.2;

        gsap.to(card, {
            y: () => depth * 100,
            ease: "none",
            scrollTrigger: {
                trigger: ingredientsSection,
                start: "top top",
                end: () => `+=${cardsWidth}`,
                scrub: true,
            },
        });
    });
};

// Hero section parallax and reveal effects
const initHeroAnimations = () => {
    const heroSection = document.querySelector("section.hero");
    if (!heroSection) return;

    const heroVideo = heroSection.querySelector("video");
    const heroTitle = heroSection.querySelector("h2");
    const heroSubtitle = heroSection.querySelector("h3");

    // Video parallax
    if (heroVideo) {
        gsap.to(heroVideo, {
            scale: 1.2,
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }

    // Title grow effect
    if (heroTitle) {
        gsap.from(heroTitle, {
            fontSize: "100px",
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.out",
        });
    }

    // Subtitle effect
    if (heroSubtitle) {
        gsap.from(heroSubtitle, {
            x: -200,
            opacity: 0,
            duration: 1.2,
            delay: 0.7,
            ease: "back.out(1.7)",
        });
    }

    // Parallax effect on scroll
    gsap.to(heroSection, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    });
};

// Animated header effects
const initHeaderAnimation = () => {
    const header = document.querySelector("header");
    if (!header) return;

    let lastScrollTop = 0;

    ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
            const scrollTop = self.scroll();

            // Hide header when scrolling down, show when scrolling up
            if (scrollTop > 100) {
                if (scrollTop > lastScrollTop) {
                    gsap.to(header, { y: -100, duration: 0.3, ease: "power3.out" });
                } else {
                    gsap.to(header, { y: 0, duration: 0.3, ease: "power3.out" });
                }
            } else {
                gsap.to(header, { y: 0, duration: 0.3, ease: "power3.out" });
            }

            lastScrollTop = scrollTop;
        },
    });
};

// Footer reveal animations
const initFooterAnimations = () => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const footerSections = footer.querySelectorAll("section");
    const footerTitle = footer.querySelector("aside > span");

    // Create timeline for footer reveal
    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });

    // Zoom in and fade in background title
    if (footerTitle) {
        footerTimeline.from(
            footerTitle,
            {
                scale: 2,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            },
            0
        );
    }

    // Stagger in footer sections
    footerTimeline.from(
        footerSections,
        {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
        },
        0.3
    );

    // Animate links
    const footerLinks = footer.querySelectorAll("a");
    footerTimeline.from(
        footerLinks,
        {
            x: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power1.out",
        },
        0.6
    );
};

// Initialize all animations
export const initAnimations = () => {
    // Wait for fonts and DOM to be ready
    document.fonts.ready.then(() => {
        // Create page transitions
        createPageTransitions();

        // Add floating gradient backgrounds
        createGradients();

        // Initialize section-specific animations
        initHeroAnimations();
        initTextAnimations();
        initHistoryAnimations();
        initIngredientsHorizontalScroll();
        initHeaderAnimation();
        initFooterAnimations();

        // Initialize general page animations
        initPageAnimations();
    });
};

// Page transition effects
const createPageTransitions = () => {
    // Create transition overlay if it doesn't exist
    if (!document.querySelector(".page-transition")) {
        const transitionOverlay = document.createElement("div");
        transitionOverlay.className = "page-transition";
        document.body.appendChild(transitionOverlay);

        // Add initial entrance animation
        gsap.fromTo(
            transitionOverlay,
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
            {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                duration: 1.2,
                ease: "power4.inOut",
                delay: 0.2,
            }
        );
    }
};

// General page animations
const initPageAnimations = () => {
    // Animate elements into view as they scroll into viewport
    gsap.utils.toArray(".fade-in").forEach((element: any) => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    });

    // Scale elements as they scroll into view
    gsap.utils.toArray(".scale-in").forEach((element: any) => {
        gsap.from(element, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    });
};

export { lenis };
