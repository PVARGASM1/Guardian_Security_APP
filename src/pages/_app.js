import '@/styles/globals.css'
import '@tailwindcss/aspect-ratio'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <time datetime="2016-10-25" suppressHydrationWarning />
      <Component {...pageProps} />
    </>
  )
}
