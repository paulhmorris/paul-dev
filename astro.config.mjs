import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import { SITE_META } from "./src/consts.ts";

const options = {
  theme: JSON.parse(fs.readFileSync(new URL("./public/darko.json", import.meta.url), "utf-8")),
  keepBackground: false
};

export default defineConfig({
  site: SITE_META.siteUrl,
  output: "static",
  integrations: [
    sitemap(),
    partytown(),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { tabler: ["*"] } }),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
