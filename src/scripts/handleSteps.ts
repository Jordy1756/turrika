import { initLenis } from "@utils/lenis.ts";

document.addEventListener("astro:page-load", () => {
    const { gsap, ScrollTrigger } = initLenis();
    gsap.registerPlugin(ScrollTrigger);

    const stepsSection = document.querySelector("#steps") as HTMLElement;
    const heroTitle = stepsSection.querySelector("h2") as HTMLHeadingElement;
    const stepsContainer = stepsSection.querySelector("div") as HTMLDivElement;

    gsap.set(stepsSection, {
        backgroundColor: "var(--neutral-900)",
    });

    gsap.set(heroTitle, {
        fontSize: "0px",
    });

    gsap.set(stepsContainer, {
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
            scrub: true,
            pin: true,
            pinSpacing: true,
        },
    });

    stepsTimeline
        .to(
            heroTitle,
            {
                fontSize: "128px",
                duration: 2,
                ease: "power2.out",
            },
            0.5
        )
        .to(
            heroTitle,
            {
                scale: 200,
                xPercent: 325,
                opacity: 0,
                duration: 2.5,
                ease: "power2.inOut",
            },
            3
        )
        .to(
            stepsSection,
            {
                backgroundColor: "rgba(10, 10, 10, 0)",
                duration: 2,
                ease: "none",
            },
            4.5
        )
        .to(
            stepsContainer,
            {
                transform: "translateX(0)",
                duration: 2,
                ease: "power1.out",
            },
            5.5
        )
        .to(
            stepsContainer,
            {
                x: function () {
                    return -calculateEndPosition();
                },
                duration: 4,
                ease: "none", 
                onUpdate: function () {
                    this.vars.x = -calculateEndPosition();
                },
            },
            7
        );
});

window.addEventListener("load", () => document.dispatchEvent(new Event("astro:page-load")));
