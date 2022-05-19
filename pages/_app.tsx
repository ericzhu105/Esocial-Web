import type { AppProps } from "next/app"
import Head from "next/head"

import "../styles/globals.css"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="icon" href="/EsocialLogo.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
