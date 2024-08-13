import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://airdriefoundation.ca/",
  integrations: [react(), partytown()],
  image: {
    domains: ["airdriefoundation.swbdatabases3.com"],
  },
});
