export const initHistoryAnimation = (gsap: any, SplitText: any) => {
    const historySection = document.querySelector(".history") as HTMLElement;
    const paragraphs = historySection.querySelectorAll("div > p") as NodeListOf<HTMLParagraphElement>;

    const split = SplitText.create(paragraphs, { type: "words", aria: "hidden" });

    gsap.set(split.words, {
        opacity: 0,
        transform: "translateX(-100%)",
    });

    const histroyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: historySection,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
        },
    });

    histroyTimeline
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
};
