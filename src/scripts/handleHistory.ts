// import { SplitText } from "gsap/SplitText";
// import { initLenis } from "@utils/lenis.ts";

// const { gsap, ScrollTrigger } = initLenis();

// gsap.registerPlugin(ScrollTrigger, SplitText);

// (gsap.utils.toArray(".history") as HTMLElement[]).forEach(async (section) => {
//     await document.fonts.ready;

//     const paragraphs = section.querySelectorAll("div > p");
//     let split = SplitText.create(paragraphs, { type: "words", aria: "hidden" });

//     gsap.from(split.words, {
//         opacity: 0,
//         duration: 1.5,
//         ease: "sine.out",
//         stagger: 0.1,
//         scrollTrigger: {
//             trigger: section,
//             start: "top 70%",
//             end: "bottom 80%",
//             scrub: true,
//         },
//     });

//     const heroToHistoryTl = gsap.timeline({
//         scrollTrigger: {
//             trigger: heroSection,
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//             pin: true,
//             pinSpacing: true,
//         },
//     });

//     gsap.to(section, {
//         opacity: 1,
//         width: "100%",
//         height: "100%",
//         scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//             pin: true,
//             pinSpacing: true,
//         },
//     });
// });


