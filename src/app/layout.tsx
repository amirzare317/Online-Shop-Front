import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Layout from "@/components/Layout";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
