import type {Metadata} from "next";
import {Domine,Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ['400','500','600','700']

});

export const metadata: Metadata = {
  title: "AS-BD:Portfolio",
  description: "Anas bd portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${inter.className} bg-background text-white ${domine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
