import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroSection = document.querySelector("#hero") as HTMLElement;
const heroVideo = heroSection.querySelector("video");
const heroTitle = heroSection.querySelector("h2");
const heroSubtitle = heroSection.querySelector("h3");

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
    scale: 1.1,
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
