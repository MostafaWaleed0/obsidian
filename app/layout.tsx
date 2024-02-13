import "./globals.css";
import { Footer } from "app/components/footer";
import { Header } from "app/components/header";
import { ThemeWrapper } from "app/components/theme";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: "Obsidian",
    template: "%s | Obsidian",
  },
};

const fonts = localFont({
  src: [
    {
      path: "../public/fonts/matter-md.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/matter-rg.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fonts.className} scroll-smooth`}>
      <body className="bg-white transition duration-500 dark:bg-gray-900">
        <ThemeWrapper>
          <Header />
          <main id="main-content" tabIndex={-1} className="space-y-48">
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
