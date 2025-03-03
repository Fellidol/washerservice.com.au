import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata = {
  title: "Washer Service",
  description: "Washing machine repairs for over 50 years",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
