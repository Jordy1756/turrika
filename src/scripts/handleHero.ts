// export const initHeroAnimation = (gsap: any, SplitText: any) => {
//     const headerControls = document.querySelector("#header-controls") as HTMLDivElement;
//     const heroSection = document.querySelector("#hero") as HTMLElement;
//     const heroVideo = heroSection.querySelector("video") as HTMLVideoElement;
//     const porkRindsTitle = heroSection.querySelector("#hero-title-pork-rinds") as HTMLHeadingElement;
//     const cheeseTitle = heroSection.querySelector("#hero-title-cheese") as HTMLHeadingElement;
//     const corners = heroSection.querySelectorAll(".corner__decoration") as NodeListOf<HTMLElement>;
//     const newsletterForm = heroSection.querySelector(".slide__in-left") as HTMLElement;
//     const heroIntroduction = heroSection.querySelector("#introduction") as HTMLElement;
//     const paragraphs = heroIntroduction.querySelectorAll("div > p") as NodeListOf<HTMLParagraphElement>;

//     const split = SplitText.create(paragraphs, { type: "words", aria: "hidden" });

//     gsap.set(split.words, {
//         opacity: 0,
//         transform: "translateX(-100%)",
//     });

//     const heroTimeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: heroSection,
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//             pin: true,
//             pinSpacing: true,
//         },
//     });

//     heroTimeline
//         .to(
//             headerControls,
//             {
//                 padding: "1rem",
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             heroVideo,
//             {
//                 scale: 1.3,
//                 filter: "blur(10px)",
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             porkRindsTitle,
//             {
//                 scale: 200,
//                 transform: "translate(-550%, 1500%)",
//                 duration: 3,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             porkRindsTitle,
//             {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             cheeseTitle,
//             {
//                 x: "-100%",
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             newsletterForm,
//             {
//                 x: "100%",
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             corners,
//             {
//                 scale: 5,
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             heroIntroduction,
//             {
//                 opacity: 1,
//                 left: "0%",
//                 duration: 3,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             split.words,
//             {
//                 transform: "translateX(0)",
//                 duration: 2.5,
//                 stagger: 0.1,
//                 ease: "sine.out",
//             },
//             0
//         )
//         .to(
//             split.words,
//             {
//                 opacity: 1,
//                 duration: 3,
//                 ease: "sine.out",
//                 stagger: 0.1,
//             },
//             0
//         );
// };
