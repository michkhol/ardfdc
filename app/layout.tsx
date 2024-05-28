import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radio Orienteering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}
      <footer className="mt-7">
          <h5 className="font-serif text-center text-sm">Copyright © 2024 ardfdc.org</h5>
        </footer>
      </body>
    </html>
  );
}
