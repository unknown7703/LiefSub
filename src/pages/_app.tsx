import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import Layout from "../components/layout/layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GlobalReport,GlobalList,GlobalTable } from "@/stateMan/context";
import { useState } from "react";
import { IAnnotation } from "react-mark-image";


export default function App({ Component, pageProps }: AppProps) {
  const [annotation, setAnnotation] = useState<IAnnotation[]>([]);
  const [list,setList]=useState<Array<IAnnotation[]>>([]);  
  const [tabledata,setTable]=useState<Array<String>>([]);
  return (
    <GlobalTable.Provider value={{tabledata,setTable}} >
    <GlobalList.Provider value={{list,setList}}>
    <GlobalReport.Provider value={{annotation,setAnnotation}} >
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </GlobalReport.Provider>
    </GlobalList.Provider>
    </GlobalTable.Provider>
  );
}
