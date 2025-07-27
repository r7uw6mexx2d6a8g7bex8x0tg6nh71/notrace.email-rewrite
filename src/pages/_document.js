// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Encoding & Theme */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#9b1c31" />

        {/* SEO */}
        <meta name="author" content="notracmail Team" />
        <meta name="keywords" content="email hosting, secure email, private inbox, privacy, no tracking" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph defaults */}
        <meta property="og:type" content="website" />

        {/* Twitter & Discord (OG compatible) */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preload Fonts (optional) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;900&display=swap" rel="stylesheet" />
      </Head>

      <body className="antialiased bg-surface-default text-text-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
