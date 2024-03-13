import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { SITE_META } from "./src/consts.ts";
const options = {
  theme: JSON.parse(fs.readFileSync(new URL("./public/darko.json", import.meta.url), "utf-8")),
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: SITE_META.siteUrl,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => {
        return !page.includes("tags") && !page.includes("blog");
      },
    }),
    partytown(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
