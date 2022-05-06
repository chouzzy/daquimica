import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { BsArrowUpCircle } from "react-icons/bs";
import {Link as Slink} from 'react-scroll'

export function Container_2() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

    const nossaHistoria = 'Nossa história começou em 1987, com a fundação da primeira unidade de farmácia de manipulação “Daterra” , na cidade de Sertãozinho, interior de São Paulo, iniciando a nossa trajetória de sucesso. Logo após, em 1989, nosso compromisso se expandiu para a cidade de Ribeirão Preto. Com a experiência, nosso objetivo se tornou ainda maior. Em 2005, instauramos nossa indústria cosmética, seguindo os princípios de tecnologia e qualidade, dando origem à marca Daterra Indústria Cosmética, que posteriormente se transformou na Blend Química Indústria Cosmética. Desenvolvendo produtos de alto desempenho, a Blend Química se destacou no mercado produtivo e, a partir disso, decidimos compartilhar nossas experiências através da terceirização de cosméticos. Portanto, além da produção e desenvolvimento próprio, a indústria trabalha para que nossos clientes também possam ter sua linha exclusiva de cosméticos, entregando um serviço de qualidade, com segurança e eficácia'

   return (
      <Container id='#sobre' maxW='100vw' minH='100vh' color='white' bg='datBlue' p='0' m='0' centerContent>
         <VStack
         py={5}
         my={5}
         w='90vw'
         spacing={1}
         align='stretch'
         textAlign='left'
         >

            <Box minW='90vw' h='50px' fontSize='1.5rem' fontWeight='600'> Sobre nós </Box>
               <Box fontSize='1.2rem' maxW={['85vw','80vw','75vw', '70vw']}>
                  {nossaHistoria}
               </Box>
            {isMobileVersion? 
               <SimpleGrid w='90vw' textAlign='center'  columns={1} spacingX={5} spacingY='40px'>
                   <Image borderRadius='5px' maxW='90vw' mx='auto' my='50px' src={"static/img/footer-menu/menu-1.PNG"} alt='Banner inicial' />
               </SimpleGrid>
            :
               <SimpleGrid w='90vw' textAlign='center'  columns={3} spacingX={5} spacingY='40px'>
                  <Image borderRadius='5px'  my='50px' src={"static/img/footer-menu/menu-2.PNG"} alt='Banner inicial' />
                  <Image borderRadius='5px'  my='50px' src={"static/img/footer-menu/menu-3.PNG"} alt='Banner inicial' />
                  <Image borderRadius='5px'  my='50px' src={"static/img/footer-menu/menu-1.PNG"} alt='Banner inicial' />
               </SimpleGrid>
            }

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