import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs";

const f = createUploadthing();
// const f = createUploadthing({ secret: process.env.UPLOADTHING_SECRET });

const handleAuth = () => {
  const { userId } = auth();
  // If you throw, the user will not be able to upload
  // if (!userId) throw new Error("Unauthorized");
  if (!userId) throw new UploadThingError("Unauthorized");

  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  image: f({
    image: { maxFileCount: 4, maxFileSize: "16MB" },
    video: { maxFileCount: 2, maxFileSize: "16MB" },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async() => handleAuth())
    .onUploadComplete(() => {}),
  file: f(["image", "video", "audio", "pdf"])
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    // .onUploadComplete(() => {}),
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
