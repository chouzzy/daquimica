import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Andes',
      body:'Andes '
   },
   colors: {
     datBlue: "#55808c",
     datGreen:"#a5d320",
     datGray: "#d1d3d4"
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bg: 'white',
          color: 'gray.900',
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })