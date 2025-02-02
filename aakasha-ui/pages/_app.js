import { useEffect } from "react";
import "@/styles/globals.css";
// import "../public/assets/scss/components/main"
import "../public/assets/scss/main.scss";



import Head from "next/head";

import "../styles/main.module.css"
// import "../styles/Home.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';


// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //   const loadScripts = async () => {
  //     // Load jQuery
  //     const jqueryScript = document.createElement('script');
  //     jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
  //     document.body.appendChild(jqueryScript);

  //     // Load Bootstrap
  //     const bootstrapScript = document.createElement('script');
  //     bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';
  //     document.body.appendChild(bootstrapScript);
  //   };

  //   loadScripts();

  //   // Clean up function
  //   return () => {
  //     document.body.removeChild(jqueryScript);
  //     document.body.removeChild(bootstrapScript);
  //   };
  // }, []);
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return(
    <>
     <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
  {getLayout(<Component {...pageProps} />)}
  </>

  )

}
