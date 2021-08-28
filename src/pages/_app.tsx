import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'

import '../styles/globals.scss'
import '../styles/app.scss'

import { AppProps } from 'next/app'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App