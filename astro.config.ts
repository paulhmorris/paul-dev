import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "nord",
      wrap: true,
    },
  },
  site: "https://paulmorris.dev",
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
