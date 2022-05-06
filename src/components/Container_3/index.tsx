import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";

export function Container_3() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

   const segmentos = 'Com o nosso time P&D e nossa linha de produção, estamos preparados para desenvolver e produzir formulações personalizadas com complexidades e formas diferentes.'
   return (
      <Container id='#segmentos' maxW='100vw' minH='100vh' color='white' bg='datGreen' p='0' m='0' centerContent>
         <VStack
         py={5}
         my={5}
         w='90vw'
         spacing={5}
         align='stretch'
         textAlign='left'
         >

            <Box minW='90vw' h='50px' fontSize='1.5rem' fontWeight='600'> Segmentos de atuação </Box>

               <Box fontSize='1.2rem' maxW={['85vw','80vw','75vw', '70vw']}>
                  {segmentos}
               </Box>
               <Box>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Hair Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Skin Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Home Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Dermocosmetics</Text>
               </Box>
               </VStack>
               <Flex mr='auto'  mt='auto' p={4} fontSize='1.2rem' alignItems='center'> 

                  <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
                     <BsArrowUpCircle cursor='pointer' fontSize='2rem' />  
                  </Slink>

                  <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
                     <Text cursor='pointer' px={2} pt={1} mb='auto'>
                        Voltar para o topo
                     </Text>
                  </Slink>

               </Flex>
      </Container> 
   )
}