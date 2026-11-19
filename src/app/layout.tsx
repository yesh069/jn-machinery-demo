import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

const head = Archivo({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "JN Machinery Corp. | Electric Conveyor Ovens for Spring Heat Treatment", template: "%s | JN Machinery Corp." },
  description:
    "Designer-supplier of electric conveyor ovens for heat treating and stress relieving steel springs, plus TRC, Aqua-TRC and FTS coating systems. Algonquin, Illinois. JN reports over 5,000 ovens operating worldwide.",
  openGraph: { title: "JN Machinery Corp.", description: "Electric conveyor ovens and TRC coating systems for the spring industry.", type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${head.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Motion>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Motion>
      </body>
    </html>
  );
}
