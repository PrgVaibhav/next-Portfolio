import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
