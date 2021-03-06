import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Andes',
      body:'Andes '
   },
   colors: {
     datBlue: "#516BA5",
     datGreen:"#a5d320",
     datGray: "#d1d3d4"
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgRepeat:'no-repeat',
          bgSize:'100%',
          bgAttachment:'fixed',
          bgImage: "static/img/folhas.jpg",
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