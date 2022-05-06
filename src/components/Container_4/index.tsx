import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";

export function Container_4() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

   const servicos = 'Oferecemos as opções de suporte completo (Full Service) ou parcial para criação do seu produto personalizado. Full Service ficamos responsáveis por todas as etapas do processo, pesquisa e desenvolvimento da formulação, embalagem, rótulo, insumos e regulatório. Já no parcial, o cliente tem a possibilidade de fornecer etapas do processo. '

   return (
      <Container id='#serviços' maxW='100vw' minH='100vh' color='datBlue' bg='datGray' p='0' m='0' centerContent>
         <VStack
         py={5}
         my={5}
         w='90vw'
         spacing={5}
         align='stretch'
         textAlign='left'
         >

            <Box minW='90vw' h='50px' fontSize='1.5rem' fontWeight='600'> Nossos serviços </Box>

               <Box fontSize='1.2rem' maxW={['85vw','80vw','75vw', '70vw']}>
                  {servicos}
               </Box>
               <Box>
                  <Text fontSize={['2rem','2.5rem','2.5rem','3rem']} py={3} mb='auto'>Terceirização de produção</Text>
                  <Text fontSize={['2rem','2.5rem','2.5rem','3rem']} py={3} mb='auto'>Desenvolvimento de novas fórmulas</Text>
                  <Text fontSize={['2rem','2.5rem','2.5rem','3rem']} py={3} mb='auto'>Consultoria para assuntos regulatórios</Text>
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