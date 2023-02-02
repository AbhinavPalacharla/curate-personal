import { Navbar, Footer } from "@/components/navigation";
import { Inter } from "@next/font/google";
import type { NextPage } from "next";
import { useGlobalStore } from "stores";

const inter = Inter();

type options = {
  navbar: boolean;
  footer: boolean;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & options;

const Layout: React.FC<{
  children: React.ReactNode;
  options: options;
}> = ({ children, options: { navbar, footer } }) => {
  const { loading } = useGlobalStore();
  return (
    <div className={inter.className}>
      <meta
        name="theme-color"
        content={
          "#000000, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        }
        style={{ backgroundColor: "#000000" }}
      />
      <div className="bg-black h-full relative">
        {navbar && (
          <div className="fixed top-0 left-0 right-0">
            <Navbar loading={loading} />
          </div>
        )}

        {/* <div className="sm:px-2 md:px-12 lg:px-48 sm:flex sm:flex-row sm:items-center">
          {children}
        </div> */}
        <div className="px-2 md:px-12 lg:px-40">{children}</div>

        {footer && (
          <div className="fixed bottom-0 left-0 right-0">
            <Footer loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
};

export { Layout };
