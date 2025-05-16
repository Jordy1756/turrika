// import { initLenis } from "../utils/lenis.ts";

// const { gsap, ScrollTrigger } = initLenis();

// gsap.registerPlugin(ScrollTrigger);

// const heroSection = document.querySelector("#hero") as HTMLElement;
// const heroVideo = heroSection.querySelector("video");
// const heroTitle = heroSection.querySelector("h2");
// const heroSubtitle = heroSection.querySelector("h3");

// gsap.to(heroSection, {
//     height: "200vh",
//     scrollTrigger: {
//         trigger: heroSection,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     },
// });

// gsap.to(heroVideo, {
//     scale: 1.2,
//     scrollTrigger: {
//         trigger: heroSection,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     },
// });

// gsap.to(heroTitle, {
//     fontSize: 5000,
//     transform: "translateY(100%)",
//     // backgroundColor: "var(--neutral-50)",
//     scrollTrigger: {
//         trigger: heroSection,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     },
// });

// gsap.to(heroSubtitle, {
//     scale: 0.9,
//     scrollTrigger: {
//         trigger: heroSection,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     },
// });

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLenis } from "../utils/lenis";

// Initialize smooth scrolling and plugins
const { gsap: g, ScrollTrigger: ST } = initLenis();
g.registerPlugin(ST);

document.addEventListener("DOMContentLoaded", () => {
    // Wait for fonts and images to load
    Promise.all([
        document.fonts.ready,
        new Promise((resolve) => {
            if (document.readyState !== "loading") {
                resolve(true);
            } else {
                window.addEventListener("load", () => resolve(true));
            }
        }),
    ]).then(() => {
        initAnimations();
    });
});

function initAnimations() {
    const heroSection = document.querySelector("#hero") as HTMLElement;
    const historySection = document.querySelector(".history") as HTMLElement;
    const secondHistorySection = document.querySelectorAll(".history")[1] as HTMLElement;

    if (!heroSection || !historySection) return;

    // Create a timeline for hero-to-history transition
    const heroToHistoryTl = gsap.timeline({
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
        },
    });

    // Hero elements
    const heroVideo = heroSection.querySelector("video");
    const heroTitle = heroSection.querySelector("h2");
    const heroSubtitle = heroSection.querySelector("h3");
    const cornerTop = heroSection.querySelector(".corner__decoration-top");
    const cornerBottom = heroSection.querySelector(".corner__decoration-bottom");
    const newsletterForm = heroSection.querySelector(".slide__in-left");

    // Create a seamless transition
    heroToHistoryTl
        // First part - Hero transforms
        .to(
            heroVideo,
            {
                scale: 1.3,
                opacity: 0.3,
                filter: "blur(10px)",
                duration: 0.5,
            },
            0
        )
        .to(
            heroSection.querySelector("article"),
            {
                y: "5%",
                duration: 0.4,
            },
            0
        )
        .to(
            heroTitle,
            {
                fontSize: "250px",
                y: "25vh",
                opacity: 0,
                duration: 0.5,
            },
            0
        )
        .to(
            heroSubtitle,
            {
                x: "-100%",
                opacity: 0,
                duration: 0.3,
            },
            0
        )
        .to(
            [cornerTop, cornerBottom],
            {
                opacity: 0,
                duration: 0.3,
            },
            0
        )
        .to(
            newsletterForm,
            {
                opacity: 0,
                duration: 0.3,
            },
            0
        )
        .to(
            heroSection.querySelector("::before"),
            {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                duration: 0.5,
            },
            0
        )

        // Second part - Reveal History
        .to(
            heroSection,
            {
                backgroundColor: "var(--neutral-900)",
                duration: 0.5,
            },
            0.3
        )
        .fromTo(
            historySection.querySelector("div"),
            { opacity: 0, y: "25vh" },
            { opacity: 1, y: 0, duration: 0.5 },
            0.3
        );

    // Connect the two history sections
    if (secondHistorySection) {
        // Make the transition between history sections smooth
        const historyConnectorTl = gsap.timeline({
            scrollTrigger: {
                trigger: historySection,
                start: "center center",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Create text timeline for first history section
        const firstSectionTexts = historySection.querySelectorAll("p");

        // Text animation for first history section
        firstSectionTexts.forEach((text, index) => {
            const chars =
                Array.from(text.querySelectorAll("span")).length > 0
                    ? Array.from(text.querySelectorAll("span"))
                    : Array.from(text.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);

            gsap.fromTo(
                chars,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 0.6,
                    },
                }
            );
        });

        // Create bridge animation between first and second history sections
        historyConnectorTl
            .to(
                historySection.querySelector("div"),
                {
                    opacity: 0.3,
                    y: "-15vh",
                    scale: 0.95,
                    duration: 0.5,
                },
                0
            )
            .fromTo(
                secondHistorySection.querySelector("div"),
                { opacity: 0, y: "15vh", scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5 },
                0.3
            );

        // Text animation for second history section
        const secondSectionTexts = secondHistorySection.querySelectorAll("p");
        secondSectionTexts.forEach((text, index) => {
            const chars =
                Array.from(text.querySelectorAll("span")).length > 0
                    ? Array.from(text.querySelectorAll("span"))
                    : Array.from(text.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);

            gsap.fromTo(
                chars,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 0.6,
                    },
                }
            );
        });
    }

    // Add parallax effect to history text elements
    gsap.utils.toArray<HTMLElement>(".animate-me").forEach((text) => {
        const direction = text.classList.contains("start") ? -1 : text.classList.contains("end") ? 1 : 0;

        gsap.to(text, {
            x: `${direction * 5}%`,
            ease: "none",
            scrollTrigger: {
                trigger: text.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    });

    // Add floating animation to highlighted spans
    gsap.utils.toArray<HTMLElement>(".animate-me span").forEach((span) => {
        gsap.to(span, {
            y: "-8px",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            duration: gsap.utils.random(1.5, 2.5),
        });
    });
}
