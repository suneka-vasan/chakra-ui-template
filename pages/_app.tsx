import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeConfig from "../theme/theme.config"

const theme = extendTheme(themeConfig)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp