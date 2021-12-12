import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head><title>WikiApp</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </Head><Layout>
            <Component {...pageProps} />  
  </Layout>
  </>
}

export default MyApp
