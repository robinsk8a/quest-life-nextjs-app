import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const kanit = Kanit({
  weight: ["100", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuestLife app",
  description: "This side is made with Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
