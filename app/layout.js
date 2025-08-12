

import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy'
})

const vigosamine = localFont({
  src: '../public/fonts/Vigosamine.otf',
  variable: '--font-vigosamine'
})
// export const metadata = {
//   title: "Experium",
//   description: "main page",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${gilroy.variable} ${vigosamine.variable}`}>
      <body
        className={`${gilroy.className} antialiased`}
      >
       <LenisProvider>
        <Navbar />
   
        {/* <HomePage /> */}
        {children}
          <Footer/>
          </LenisProvider>
      </body>
    </html>
  );
}
