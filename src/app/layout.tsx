import type { Metadata } from "next";
import { ToastProvider } from "./context/ToastProvider";
import './globals.css'

export const metadata: Metadata = {
  title: "Nakazain",
  description: "Nakazain web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-neutral-950 text-gray-100`}
      >
          <ToastProvider>
        {children}
          </ToastProvider>
      </body>
    </html>
  );
}
