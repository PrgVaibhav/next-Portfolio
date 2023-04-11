import Head from "next/head";
import HomePage from "./home";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vaibhav Kumar</title>
        <meta name="description" content="Portfolio website of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
