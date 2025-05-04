import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "PathoGene",
  description: "Predicting the Pathogenicity of DNA Mutations",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
