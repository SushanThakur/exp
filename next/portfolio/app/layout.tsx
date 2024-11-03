import type { Metadata } from "next";
import "./globals.css";
import "./css/main.css";

export const metadata: Metadata = {
  title: "Sushant Thakur",
  description: "Sushant Thakur Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <link rel="shortcut icon" href="/pfp.jpg" type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
