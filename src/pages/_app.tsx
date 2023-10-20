import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import Layout from "../components/layout/layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
