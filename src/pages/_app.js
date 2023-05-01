import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import Head from "next/head";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // change this value to adjust the loading time
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      )}
    </>
  );
}
