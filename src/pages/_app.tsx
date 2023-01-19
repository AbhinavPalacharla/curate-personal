import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import type { NextPageWithLayout } from "@/components/layout";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  return (
    <Layout options={{ navbar: Component.navbar, footer: Component.footer }}>
      <Component {...pageProps} />
    </Layout>
  );
}
