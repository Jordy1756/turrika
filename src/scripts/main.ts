import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initHeroAnimation } from "@scripts/handleHero";
import { initHistoryAnimation } from "@scripts/handleHistory";
import { initStepsAnimation } from "@scripts/handleSteps";
import { initHeader } from "./handleHeader";

const initLenis = () => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
};

const initApp = async () => {
    initLenis();

    gsap.registerPlugin(ScrollTrigger, SplitText);

    await document.fonts.ready;

    initHeader();
    initHeroAnimation(gsap, SplitText);
    initStepsAnimation(gsap);
    initHistoryAnimation(gsap, SplitText);
};

document.addEventListener("DOMContentLoaded", async () => await initApp());
