import React from "react";
import Head from "next/head";
const Seo = ({ title, description }) => {
  return (
    <Head lang="en">
      <title>{title}</title>
      <meta
        name="description"
        content={description ?? "Portfolio website of Vaibhav Kumar"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content={title ?? "Vaibhav Kumar"} />
      <meta
        property="og:description"
        content={description ?? "Portfolio website of Vaibhav Kumar"}
      />
      <meta property="og:url" content="https://vaibhavkumar.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/preview.png" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default Seo;
