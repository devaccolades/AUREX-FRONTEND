import { Urbanist, Inter, Poppins, Anek_Malayalam, Roboto } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components2/FloatingButton";
import Script from "next/script";


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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5KXVDPEVY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5KXVDPEVY');
          `}
        </Script>

        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11091045463"
          strategy="afterInteractive"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11091045463');
          `}
        </Script>

        {/* <!-- Meta Pixel Code --> */}

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1557698505880179');
      fbq('track', 'PageView');
    `,
          }}
        />
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body
        className={`${urban.variable} ${inter.variable} ${poppins.variable} ${anekMalayalam.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1557698505880179&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
