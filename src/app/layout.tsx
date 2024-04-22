import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizard Creator",
  description: "Create your own wizard!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container flex flex-col gap-6">
          <div className="py-6 border-b">
            <h1 className="text-xl font-medium">Wizard Creator</h1>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
