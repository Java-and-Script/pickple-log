import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pickple-log",
  description: "pickple tech blog in devcourse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className + " min-h-dvh"}>
        <Header />
        <div className="max-w-[800px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
