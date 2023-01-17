import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { Navbar, Footer } from "@/components/navigation";
import { Html } from "next/document";

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <meta
        name="theme-color"
        content={"#000000"}
        style={{ backgroundColor: "#000000" }}
      />
      <div className="bg-black h-full relative">
        <div className="sticky top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="px-2 lg:px-48">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
