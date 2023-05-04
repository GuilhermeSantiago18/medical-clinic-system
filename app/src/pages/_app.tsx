import { AuthProvider } from '@/context/AuthContext'
import type { AppProps } from 'next/app'
import  { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from '@/themes/theme';
import Header from '@/components/Header';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
    </ThemeProvider>
  )
}
