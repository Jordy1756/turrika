// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://turrika.vercel.app/",
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Unbounded",
                cssVariable: "--font-unbounded",
                styles: ["normal"],
                weights: [300, 400, 600, 700],
                display: "swap",
                subsets: ["latin"],
            },
            {
                provider: fontProviders.google(),
                name: "Manrope",
                cssVariable: "--font-manrope",
                styles: ["normal"],
                weights: [400, 700],
                display: "swap",
                subsets: ["latin"],
            },
        ],
    },
});
