import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { BsArrowUpCircle } from "react-icons/bs";
import {Link as Slink} from 'react-scroll'

export function Container_5() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })
   
   const projetos = 'A fim de te aproximar dos seus sonhos e facilitar o sucesso dos seus projetos, baseados em pesquisa, inovações do mercado e suas ideias, desenvolvemos formulações cosméticas de alta qualidade.'
   return (
      <Container id='#projetos' maxW='100vw' minH='100vh' color='white' bg='datBlue' p='0' m='0' centerContent>
         <VStack
         py={5}
         my={5}
         w='90vw'
         spacing={4}
         textAlign='left'
         >

               <Box minW='90vw' h='50px'  fontSize='1.8rem' fontWeight='600'> Projetos personalizados </Box>
         
               <Box fontSize='1.2rem'>
                  {projetos}
               </Box>
               
               {/* <Box fontSize='1.2rem' mx='auto' w='64vw' p={8}>
                  <iframe width="100%" height="400px" src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </Box> */}
         </VStack>
         <Flex mr='auto' mt='auto' p={4} fontSize='1.2rem' alignItems='center'> 

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