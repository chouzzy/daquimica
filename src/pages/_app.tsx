import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { theme } from '../../styles/theme'
// import Fonts from './Fonts'


function MyApp({Component, pageProps}: AppProps) {
   return (
      
      <>
         <ChakraProvider theme={theme}>
         {/* <Fonts/> */}
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp