import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

const secret = process.env.UPLOADTHING_SECRET;
console.log("UPLOADTHING_SECRET:", secret); // Add this line
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});
