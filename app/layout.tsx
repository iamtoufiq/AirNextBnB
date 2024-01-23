import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My AirNextBnB",
  description: "A Next.js app project for creating an Airbnb clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
