import { Box, Image, SimpleGrid, StackDivider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

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
            <Image objectFit='cover' src={"static/img/footer-menu/time-1.png"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[0]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[0]}
         </Text>

         <Slink activeClass="active" to="#sobre" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>

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

         <Slink activeClass="active" to="#segmentos" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/atendentes.png"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[2]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[2]}
         </Text>

         <Slink activeClass="active" to="#serviços" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/cientista.png"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[3]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[3]}
         </Text>

         <Slink activeClass="active" to="#projetos" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
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

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
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
               <Image objectFit='cover' src={"static/img/footer-menu/time-1.png"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[0]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[0]}
            </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>

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

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
         </VStack>

         <VStack
         spacing={1}
         align='stretch'
         textAlign='left'
         >

         <Box >
            <Image objectFit='cover' src={"static/img/footer-menu/atendentes.png"} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'> {footerTitle[2]} </Text>
         <Text fontSize='0.9rem'>
            {footerDescription[2]}
         </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
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
               <Image objectFit='cover' maxH='153px' w='100%' src={"static/img/footer-menu/cientista.png"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[3]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[3]}
            </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
            
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

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
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
               <Image objectFit='cover' src={"static/img/footer-menu/time-1.png"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[0]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[0]}
            </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>

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

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         
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
               <Image objectFit='cover' src={"static/img/footer-menu/atendentes.png"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[2]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[2]}
            </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
            
         </VStack>

         <VStack
            spacing={1}
            align='stretch'
            textAlign='left'
            >

            <Box >
               <Image objectFit='cover' src={"static/img/footer-menu/cientista.png"} alt='Banner inicial' />
            </Box>

            <Text fontWeight='bold'> {footerTitle[3]} </Text>
            <Text fontSize='0.9rem'>
               {footerDescription[3]}
            </Text>

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
            
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

         <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
            
               <Text cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
            
         </VStack>
      </SimpleGrid>
      </>
         :
         ''
      }
      </>
   )
}