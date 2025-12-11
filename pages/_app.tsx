// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      {/* Load Iconify runtime before client renders icons.
          strategy="beforeInteractive" ensures it's available early. */}
      <Script
        src="https://code.iconify.design/3/3.1.0/iconify.min.js"
        strategy="beforeInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}
