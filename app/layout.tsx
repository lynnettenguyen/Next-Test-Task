import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Ticket Website Test",
  description:
    "This was created by Lynnette for testing purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
