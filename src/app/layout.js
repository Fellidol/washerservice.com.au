import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        <GoogleAnalytics gaMeasurementId="G-KP5EWEWM2N" />
      </body>
    </html>
  );
}
