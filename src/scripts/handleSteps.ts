import { initLenis } from "@utils/lenis.ts";

const { gsap, ScrollTrigger } = initLenis();

gsap.registerPlugin(ScrollTrigger);

const stepsSection = document.querySelector("#steps") as HTMLElement;
const heroTitle = stepsSection.querySelector("h2") as HTMLHeadingElement;
const stepsContainer = stepsSection.querySelector("div") as HTMLDivElement;

gsap.set(heroTitle, {
    fontSize: "0px",
});

gsap.set(stepsContainer, {
    // opacity: 0,
    transform: "translateX(100%)",
});

const calculateEndPosition = () => {
    const containerWidth = stepsContainer.offsetWidth;
    const sectionWidth = stepsSection.offsetWidth;
    return containerWidth - sectionWidth + 32;
};

const stepsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: stepsSection,
        start: "top top",
        end: "+=6000",
        scrub: 1,
        pin: true,
        pinSpacing: true,
    },
});

stepsTimeline
    .to(
        heroTitle,
        {
            delay: 0.3,
            fontSize: "128px",
            duration: 2,
            ease: "power2.inOut",
        },
        0
    )
    .to(
        heroTitle,
        {
            transform: "scale(200) translateX(2%)",
            duration: 2,
            opacity: 0,
            ease: "power2.inOut",
        },
        2
    )
    .to(
        stepsSection,
        {
            background: "transparent",
            duration: 2,
            ease: "power2.inOut",
        },
        4
    )
    .to(
        stepsContainer,
        {
            transform: "translateX(0)",
            ease: "power2.inOut",
        },
        6
    )
    .to(
        stepsContainer,
        {
            x: -calculateEndPosition(),
            duration: 5,
            ease: "none",
        },
        6
    );
