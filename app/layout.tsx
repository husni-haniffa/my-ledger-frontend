import type { Metadata } from "next";
import { Geist, Geist_Mono, Genos, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/components/shared/QueryProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

const genos = Genos({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MyLedger",
  description: "A digital business ledger built for online entrepreneurs and founders — to record expenses, manage orders, monitor inventory, and analyze business performance, all in one place. Replace the manual work, go fully digital, and get complete visibility over your business — from day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${genos.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ClerkProvider>
        <QueryProvider>
          <body className="min-h-full flex flex-col">
            {children}
            <Toaster position="top-right" richColors/>
          </body>
        </QueryProvider>
      </ClerkProvider>
    </html>
  );
}
