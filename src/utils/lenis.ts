import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.05,
    wheelMultiplier: 1,
});

const raf = (time: any) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
