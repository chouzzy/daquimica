import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { BsArrowUpCircle } from "react-icons/bs";

export function Container_3() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

   return (
      <Container maxW='100vw' minH='100vh' color='white' bg='datGreen' p='0' m='0' centerContent>
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in 
                  hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et 
                  accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait 
                  nulla facilisi.
               </Box>
               <Box>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Hair Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Skin Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Home Care</Text>
                  <Text fontSize={['2.6rem','3rem']} mb='auto'>Dermocosmetics</Text>
               </Box>
               </VStack>
            <Flex mr='auto' p={4} mt='auto' fontSize='1.2rem' alignItems='center'> 
               <BsArrowUpCircle fontSize='2rem' />  <Text px={2} pt={1} mb='auto'>Voltar para o topo</Text>
            </Flex>
      </Container> 
   )
}