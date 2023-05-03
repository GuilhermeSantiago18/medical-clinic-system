import { AuthProvider } from '@/context/AuthContext'
import type { AppProps } from 'next/app'
import  { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from '@/themes/theme';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </ThemeProvider>
  )
}
