import Router from 'next/router'
import withGA from 'next-ga'

import '../styles/globals.scss'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA("G-E4XBY7D9Z8", Router)(MyApp)
