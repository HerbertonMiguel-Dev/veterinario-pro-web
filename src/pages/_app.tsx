import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import { AuthProvider } from '../context/AuthContext'

const colors = {
  veterinario: {
    900: '#2b3a3e',
    400: '#5d7b75',
    100: '#e7f0e8'
  },
  button: {
    cta: '#63a375',
    default: '#ffffff',
    gray: '#c8d0c5',
    danger: '#ff6b6b'
  },
  highlight: {
    900: '#63a375'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
