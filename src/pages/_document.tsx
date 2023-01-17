import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ backgroundColor: "#000000" }}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          // sizes="32x32"
          sizes="180x180"
          // href="/curatefavicon32.png"
          href="/curatefavicon180.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/curatefavicon180.png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
