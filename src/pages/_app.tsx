import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { theme } from '../../styles/theme'
import Fonts from './fonts'

function MyApp({Component, pageProps}: AppProps) {
   return (
      
      <>
         <Fonts/>
         <ChakraProvider theme={theme}>
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp