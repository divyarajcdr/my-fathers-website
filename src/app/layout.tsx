import type { Metadata } from "next";
import "./globals.css"; // This is important, we keep it!

export const metadata: Metadata = {
  title: "Premium Article Gallery", // You can customize this
  description: "A premium collection of articles.", // You can customize this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We keep the className to preserve your font styling */}
      <body className="antialiased">
        {/* We only render the children (your pages), no extra tools */}
        {children}
      </body>
    </html>
  );
}