import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/theme-provider";
import JivoChat from "@/components/JivoChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add the weights you need
  variable: "--font-poppins", // Optional: for using as a CSS variable
});

export const metadata: Metadata = {
  title: " ASTROFX TRADES",
  description: " ASTROFX TRADES is a cutting-edge trading platform designed to empower investors with real-time market insights, advanced trading tools, and seamless user experience. Start trading confidently with Capital Trades and elevate your investment strategy.",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <JivoChat/>
          <Toaster/>
          </ThemeProvider>
       
        </body>
      </html>
    </ClerkProvider>
  );
}
