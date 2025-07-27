import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteTitle = "notracmail — Secure & Private Email Hosting";
  const siteDescription =
    "Privacy-focused, fast, and modern email hosting powered by your own domain.";
  const siteUrl = "https://notracmail.com";
  const ogImage = `${siteUrl}/assets/og-image.png`;
  const discordImage = `${siteUrl}/assets/discord-image.png`;

  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <meta name="author" content="notracmail Team" />
        <meta name="theme-color" content="#9b1c31" />

        {/* Title */}
        <title>{siteTitle}</title>

        {/* SEO */}
        <meta
          name="keywords"
          content="email hosting, secure email, private inbox, privacy, no tracking"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Discord Rich Presence */}
        <meta name="discord:site_name" content="notracmail" />
        <meta name="discord:description" content={siteDescription} />
        <meta name="discord:image" content={discordImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preload Fonts from CDN (example with Google Fonts - adjust as needed) */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="antialiased bg-surface-default text-text-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
