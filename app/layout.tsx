import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Trivia",
  description: "An example of a trivia quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${ibmPlexSerif.variable} min-h-screen bg-background font-sans antialiased`
        )}
      >
        {children}
      </body>
    </html>
  );
}
