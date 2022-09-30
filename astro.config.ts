import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "material-palenight",
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  site: "https://www.paulmorris.dev",
  integrations: [
    mdx({}),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
    sitemap(),
  ],
});
