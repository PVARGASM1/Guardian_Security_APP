import '@/styles/globals.css'
import '@tailwindcss/aspect-ratio'
import { AuthProvider } from '@/context'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
