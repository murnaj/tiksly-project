import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import NavBar from "@/components/features/common/nav-bar";
import FooterSection from "@/components/features/common/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiksly",
  description: "Tiksly is a platform for influencer marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.className} h-full antialiased no-js`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{`[style] {opacity: 1 !important;transform: none !important;animation: none !important;}`}</style>
        </noscript>

        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>

      <body className="overflow-x-hidden">
        <NextTopLoader color="#8BFF8B" showSpinner={false} />
        <main className="min-h-screen select-none overflow-x-hidden">
          <NavBar />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
