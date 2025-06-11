import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProviders from "@/providers/ConvexClientProviders";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#3595f6",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Chat App",
  description: "Realtime chat app with video calls and messaging",
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [{ name: "Sheila Sharon" }],
  applicationName: "Chat App",
  appleWebApp: {
    capable: true,
    title: "Chat App",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192x192.png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProviders>
            <ClerkLoading>
              <LoadingLogo />
            </ClerkLoading>
            <ClerkLoaded>
              <TooltipProvider>{children}</TooltipProvider>
              <Toaster richColors />
            </ClerkLoaded>
          </ConvexClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
