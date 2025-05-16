import { initLenis } from "../utils/lenis.ts";

const { gsap, ScrollTrigger } = initLenis();

gsap.registerPlugin(ScrollTrigger);

const heroSection = document.querySelector("#hero") as HTMLElement;
const heroVideo = heroSection.querySelector("video");
const heroTitle = heroSection.querySelector("h2");
const heroSubtitle = heroSection.querySelector("h3");

gsap.to(heroSection, {
    height: "200vh",
    scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(heroVideo, {
    scale: 1.2,
    scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(heroTitle, {
    fontSize: 5000,
    transform: "translateY(100%)",
    // backgroundColor: "var(--neutral-50)",
    scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(heroSubtitle, {
    scale: 0.9,
    scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});
