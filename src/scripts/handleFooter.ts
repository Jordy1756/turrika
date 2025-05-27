export const initFooterAnimation = (gsap: any) => {
    const footer = document.querySelector("footer") as HTMLElement;

    gsap.set(footer, {
        y: "50%",
    });

    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
            anticipatePin: 1,
        },
    });

    footerTimeline.to(footer, {
        y: "0%",
        duration: 1,
        ease: "power2.out",
    });
};
