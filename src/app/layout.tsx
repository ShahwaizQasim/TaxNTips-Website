
import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "@/components/customCursor/cursor";
import ClientOnly from "@/components/clientOnly/clientOnly";

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
      >
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
