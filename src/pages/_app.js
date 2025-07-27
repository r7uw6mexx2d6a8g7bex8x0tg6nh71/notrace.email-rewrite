import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Load your external scripts from public */}
      <Script src="/assets/Scripts/Main.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}
