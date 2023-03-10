import { ApiProvider } from '@/context/ApiContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
    <Component {...pageProps} />
  </ApiProvider>
  )
}
