// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import Lenis from "lenis";
// import "lenis/dist/lenis.css";
// import { initHeroAnimation } from "@scripts/handleHero";
// import { initHistoryAnimation } from "@scripts/handleHistory";
// import { initStepsAnimation } from "@scripts/handleSteps";
// import { initHeader } from "./handleHeader";
// import { initModal } from "./handleModal";
// import { initFooterAnimation } from "./handleFooter";
// import { initNewsletterForm } from "./handleNewsletterForm";
// import { initToast } from "./handleToast";

// const initLenis = () => {
//     const lenis = new Lenis();
//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => lenis.raf(time * 1000));
//     gsap.ticker.lagSmoothing(0);
// };

// const initApp = async () => {
//     initLenis();

//     gsap.registerPlugin(ScrollTrigger, SplitText);

//     await document.fonts.ready;

//     const { showToast } = initToast();
//     initHeader();
//     initNewsletterForm(showToast);
//     initHeroAnimation(gsap, SplitText);
//     initStepsAnimation(gsap);
//     initHistoryAnimation(gsap, SplitText);
//     initFooterAnimation(gsap);
//     initModal("policy-modal", ".open__privacy-modal");
//     initModal("terms-modal", ".open__terms-modal");
// };

// document.addEventListener("DOMContentLoaded", async () => await initApp());
