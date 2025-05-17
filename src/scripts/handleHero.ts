import { initLenis } from "@utils/lenis.ts";
import { SplitText } from "gsap/SplitText";

const { gsap, ScrollTrigger } = initLenis();

gsap.registerPlugin(ScrollTrigger, SplitText);

await document.fonts.ready;

const header = document.querySelector("#header");
const heroSection = document.querySelector("#hero") as HTMLElement;
const heroVideo = heroSection.querySelector("video") as HTMLVideoElement;
const heroTitle = heroSection.querySelector("h2") as HTMLHeadingElement;
const heroSubtitle = heroSection.querySelector("h3") as HTMLHeadingElement;
const corners = heroSection.querySelectorAll(".corner__decoration") as NodeListOf<HTMLElement>;
const newsletterForm = heroSection.querySelector(".slide__in-left") as HTMLElement;
const heroIntroduction = heroSection.querySelector("#introduction") as HTMLElement;
const paragraphs = heroIntroduction.querySelectorAll("div > p");

const split = SplitText.create(paragraphs, { type: "words", aria: "hidden" });

gsap.set(split.words, {
    opacity: 0,
    transform: "translateX(-100%)",
});

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
        header,
        {
            top: "0",
            left: "1rem",
            width: "calc(100% - 2rem)",
            duration: 0.5,
        },
        0
    )
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
        heroTitle,
        {
            scale: 200,
            duration: 3,
            transform: "translate(-550%, 1500%)",
        },
        0
    )
    .to(
        heroTitle,
        {
            // y: "25vh",
            opacity: 0,
            duration: 1,
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
            x: "100%",
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
    )
    .to(
        heroIntroduction,
        {
            opacity: 1,
            left: "0%",
            duration: 3,
        },
        0
    )
    .to(
        split.words,
        {
            transform: "translateX(0)",
            duration: 2.5,
            stagger: 0.1,
        },
        0
    )
    .to(
        split.words,
        {
            opacity: 1,
            duration: 3,
            ease: "sine.out",
            stagger: 0.1,
        },
        0
    );
