import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Nav";

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
        className="font-sans antialiased bg-[#F1F9F9]"
      >
        <Navigation/>
        {children}

      </body>
    </html>
  );
}
