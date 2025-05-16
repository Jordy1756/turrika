import { initLenis } from "@utils/lenis.ts";

const { gsap, ScrollTrigger } = initLenis();

gsap.registerPlugin(ScrollTrigger);

const heroSection = document.querySelector("#hero") as HTMLElement;
const heroVideo = heroSection.querySelector("video") as HTMLVideoElement;
const heroTitle = heroSection.querySelector("h2") as HTMLHeadingElement;
const heroSubtitle = heroSection.querySelector("h3") as HTMLHeadingElement;
const corners = heroSection.querySelectorAll(".corner__decoration") as NodeListOf<HTMLElement>;
const newsletterForm = heroSection.querySelector(".slide__in-left") as HTMLElement;

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

heroToHistoryTl
    .to(
        heroVideo,
        {
            scale: 1.3,
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
        newsletterForm,
        {
            opacity: 0,
            duration: 0.3,
        },
        0
    )
    .to(
        corners,
        {
            scale: 5,
            opacity: 0,
            duration: 0.3,
        },
        0
    );
