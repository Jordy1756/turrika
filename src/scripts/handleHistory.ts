import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {
    gsap.set(".history > div", { opacity: 1 });

    const historySections = document.querySelectorAll(".history");

    historySections.forEach((section) => {
        const paragraphs = section.querySelectorAll("div > p");
        let split = SplitText.create(paragraphs, { type: "words", aria: "hidden" });

        gsap.from(split.words, {
            opacity: 0,
            duration: 1.5,
            ease: "sine.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: "top 70%", 
                end: "bottom 80%",
                scrub: true,
            },
        });
    });
});
