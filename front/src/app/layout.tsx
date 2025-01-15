import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muebles Casa River",
  description: "Muebles Casa River",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      
      <body
        className="font-sans antialiased bg-[#f8f8fb]"
      >
        <Navigation/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
