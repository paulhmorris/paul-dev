/**
 * Site metadata that is used across the site.
 *
 * A few of these are not used yet, and are subject to change, example of this is Author.
 */
export const SITE_META = {
  title: "Paul Morris - Software Engineer",
  author: "Paul Morris",
  headerTitle: "Paul Morris",
  description: "A blog created with Astro and Tailwind.css",
  language: "en-us",
  theme: "system",
  siteUrl: "https://paulmorris.dev",
  siteRepo: "https://github.com/wanoo21/tailwind-astro-starting-blog",
  siteLogo: "/static/images/logo.png",
  socialBanner: "/static/images/twitter-card.png",
  locale: "en-US",
  email: "paul@paulmorris.dev",
  github: "https://github.com/paulhmorris",
  linkedin: "https://www.linkedin.com/in/paulmorris27",
} as const;

/** Default posts per page for pagination */
export const ITEMS_PER_PAGE = 5;

export const NAVIGATION = [
  { href: "/", title: "Home" },
  // { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
];
