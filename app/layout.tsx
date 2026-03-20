import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RRON Rent A Car",
  description: "Premium car rental with unlimited kilometers and 0€ extra fees.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

