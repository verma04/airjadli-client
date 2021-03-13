import '../styles/globals.css'
import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from "styled-components";

 import theme from '../theme/colors';
 import { ReactQueryDevtools } from 'react-query/devtools'
 import GlobalFonts from '../theme/theme';
 
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 import 'nprogress/nprogress.css';
 import NProgress from 'nprogress';
 import Head from 'next/head';
 import Router from 'next/router'
 Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done());
 Router.events.on('routeChangeError', () => NProgress.done());

 import { QueryClient, QueryClientProvider } from 'react-query'
 import { Hydrate } from 'react-query/hydration';



function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
<div>
<Head>
<link rel="shortcut icon" href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613625729/wgroxxv7wubf94wyfbke.png" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "/> 
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
  
  

    </Head>
    <ToastContainer />
 
  <ThemeProvider theme={theme}>
 
    <GlobalFonts/>
   
    <QueryClientProvider client={queryClientRef.current}>
       <Hydrate state={pageProps.dehydratedState}>
         
 <Component {...pageProps} />
 
 </Hydrate>
 <ReactQueryDevtools initialIsOpen={true} />
 </QueryClientProvider>
 
  </ThemeProvider>
 
 
  </div>
  )
}

export default MyApp
