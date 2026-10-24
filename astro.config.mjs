import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://portafolio-web-five-xi.vercel.app",
  output: "static",
  adapter: vercel(),
});
