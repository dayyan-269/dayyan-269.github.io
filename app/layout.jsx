import "./globals.css";

import Script from 'next/script'

import Navbar from "@/features/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My Portofolio</title>
      </head>
      <Script src='https://unpkg.com/boxicons@2.1.4/dist/boxicons.js' />
      <body className='bg-primary-color'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
