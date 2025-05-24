export const initFooterAnimation = (gsap: any, ScrollTrigger: any) => {
    const footer = document.querySelector("footer") as HTMLElement;
    const main = document.querySelector("main") as HTMLElement;

    gsap.set(footer, {
        position: "fixed",
        bottom: "-100vh",
        left: 0,
        width: "100%",
        zIndex: 5,
        // display: "none",
    });

    ScrollTrigger.create({
        trigger: main,
        start: "bottom bottom-=100",
        end: "bottom top",
        onEnter: () => {
            gsap.set(footer, { display: "flex" });
            gsap.to(footer, {
                bottom: "0vh",
                duration: 1,
                ease: "power2.out",
            });
        },
        onLeave: () => {
            console.log("Footer completamente visible");
        },
        onEnterBack: () => {
            gsap.set(footer, { display: "flex", bottom: "0vh" });
        },
        onLeaveBack: () => {
            gsap.to(footer, {
                bottom: "-100vh",
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(footer, { display: "none" });
                },
            });
        },
    });
};
