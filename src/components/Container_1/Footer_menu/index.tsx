import { Box, Image, SimpleGrid, StackDivider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";


export function Footer_menu() { 

   const footerTitle = ['A Daquímica', 'Segmentos de atuação', 'Nossos serviços', 'Projetos personalizados','Vídeo institucional']
   const footerDescription = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.']
   
   const isDesktopVersion = useBreakpointValue( { 
      base: false,
      sm: false,
      md:false,
      lg:true,
      xl:true,
    } )

   const isTabletVersion = useBreakpointValue( { 
      base: false,
      sm: true,
      md:true,
      lg: false,
      xl: false
    } )
   const isMobileVersion = useBreakpointValue( { 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    } )
   return (
      <>
      {isDesktopVersion?
      <>
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={5} my={3} spacingX={5} >
         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-1.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[0]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[0]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>

         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-2.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[1]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[1]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-3.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[2]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[2]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-4.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[3]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[3]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-5.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[4]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[4]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>
      </SimpleGrid>
      </>
         :
         ''
      }
      {isTabletVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={3} my={3} spacingX={5} >
         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/menu-1.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[0]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[0]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>

         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-2.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[1]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[1]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/menu-3.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[2]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[2]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>
      </SimpleGrid>
      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' maxH='153px' w='100%' src={"static/img/footer-menu/menu-4.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[3]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[3]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>
            
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' maxH='153px' w='100%' src={"static/img/footer-menu/menu-5.PNG"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[4]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[4]}
         </Text>
         <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>
      </SimpleGrid>
      </>
         :
         ''
      }
      {isMobileVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/menu-1.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[0]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[0]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>

         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/menu-2.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[1]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[1]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>
         
         </VStack>
      </SimpleGrid>

      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/menu-3.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[2]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[2]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>
            
         </VStack>

         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/menu-4.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[3]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[3]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>
            
         </VStack>
      </SimpleGrid>

      {/* Terceira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={1} my={3} spacingX={5} >
         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' maxH='153px' w='100%'  src={"static/img/footer-menu/menu-5.PNG"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[4]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[4]}
            </Text>
            <Text fontWeight='bold'> Saiba mais...</Text>
            
         </VStack>
      </SimpleGrid>
      </>
         :
         ''
      }
      </>
   )
}