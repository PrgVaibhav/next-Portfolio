import Head from "next/head";
import HomePage from "./home";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vaibhav Kumar</title>
        <meta name="title" content="Vaibhav Kumar" />
        <meta name="description" content="Portfolio website of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Vaibhav Kumar" />
        <meta
          property="og:description"
          content="Portfolio website of Vaibhav Kumar"
        />
        <meta property="og:url" content="https://vaibhavkumar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vaibhav Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vaibhav Kumar" />
        <meta name="twitter:creator" content="@SyntaxError408" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
