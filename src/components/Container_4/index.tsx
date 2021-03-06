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

   const servicos = 'Oferecemos as opções de suporte completo (Full Service) ou parcial para criação do seu produto personalizado. Full Service ficamos responsáveis por todas as etapas do processo, pesquisa e desenvolvimento da formulação, embalagem, rótulo, insumos e regulatório. Já no parcial, o cliente tem a possibilidade de fornecer o passo a passo para a criação do seu produto. '

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

            <Box minW='90vw' h='50px' fontSize='1.8rem' fontWeight='700'> Nossos serviços </Box>

               <Box fontSize='1.3rem' maxW={['85vw','80vw','75vw', '70vw']}>
                  {servicos}
               </Box>
               <Box>
                  <Text fontSize={['1.8rem','1.8rem','1.8rem','1.8rem']} fontWeight='700' py={3} mb='auto'>ETAPAS:</Text>

                  <Text fontSize={['1.4rem','1.4rem','1.4rem','1.6rem']} pl={5} py={3} mb='auto'>
                     <b>Briefing e Definição do projeto:</b> Coleta de informação e 
                     entendimento do projeto. O desenvolvimento leva em 
                     consideração particularidades, como ativos, cor, 
                     fragrância e sensorial.
                  </Text>

                  <Text fontSize={['1.4rem','1.4rem','1.4rem','1.6rem']} pl={5} py={3} mb='auto'>
                     <b> Aprovação de amostras: </b> Enviamos as amostras ao cliente para aprovação do pedido solicitado.
                  </Text>

                  <Text fontSize={['1.4rem','1.4rem','1.4rem','1.6rem']} pl={5} py={3} mb='auto'>
                     <b> Rótulo e embalagem: </b> Definição do modelo, volume e design da embalagem e rótulo.
                  </Text>

                  <Text fontSize={['1.4rem','1.4rem','1.4rem','1.6rem']} pl={5} py={3} mb='auto'>
                     <b> Produção, Rotulagem e entrega: </b> Etapa em que o produto é 
                     produzido e fica pronto para ser comercializado.
                  </Text>


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