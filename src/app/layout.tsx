
import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "@/components/customCursor/cursor";

export const metadata: Metadata = {
  title: "Tax N Tips",
  description: "TaxNTips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
