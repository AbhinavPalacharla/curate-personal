import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import type { NextPageWithLayout } from "@/components/layout";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MutationCache } from "@tanstack/react-query";
import { useState } from "react";

const mutationCache = new MutationCache({
  onError: (error, _variables, _context, mutation) => {
    if (mutation.options.onError) return;
    console.log("ERROR:", error); //implement toast / snackbar
  },
});

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const [queryClient] = useState(() => new QueryClient({ mutationCache }));

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Layout
          options={{ navbar: Component.navbar, footer: Component.footer }}
        >
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}
