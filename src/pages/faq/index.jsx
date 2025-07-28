import Head from "next/head";
import FaqSection from "@/components/faq";

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ – notracmail</title>
        <meta name="description" content="Answers to common questions about notracmail’s private email hosting." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FAQ – notracmail" />
        <meta property="og:description" content="Answers to common questions about notracmail’s private email hosting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notracmail.com/faq" />
      </Head>
      <main>
        <FaqSection />
      </main>
    </>
  );
}
