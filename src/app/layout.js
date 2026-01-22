import { Urbanist, Inter, Poppins , Anek_Malayalam, Roboto } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components2/FloatingButton";



const urban = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anekMalayalam = Anek_Malayalam({
  variable: "--font-anek-malayalam",
  subsets: ["malayalam"],
  weight: ["100","200","300","400","500","600","700","800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100","300","400","500","700","900"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Aurex Builders",
  description: "Aurex Builders",
  // icons: {
  //   icon: "/favicon.ico",              
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urban.variable} ${inter.variable} ${poppins.variable} ${anekMalayalam.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
