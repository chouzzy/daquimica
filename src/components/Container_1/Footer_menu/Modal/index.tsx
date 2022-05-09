import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

export function HomeFooter(footerContent) { 

   const isDesktopVersion = useBreakpointValue( { 
      base: false,
      sm: false,
      md:false,
      lg:true,
      xl:true,
    } )
   
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <VStack
      spacing={1}
      align='stretch'
      textAlign='left'
      >

         <Box >
            <Image onClick={onOpen} cursor='pointer' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'>{footerContent.title} </Text>
         <Text fontSize='0.9rem'>
            {footerContent.description}
         </Text>

         <Slink activeClass="active" to={footerContent.scrollTag} spy={true} smooth={true} offset={0} duration={500}>
            <Text _hover={{color:'teal.400', transition:'300ms'}} cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>


         {isDesktopVersion?
         <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent m='80px' border='1px solid #00000040'  backgroundColor='#3397da10'>
               <ModalCloseButton color='white' />
               <ModalBody>
                  <Image borderRadius={5} onClick={null} mx='auto' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
               </ModalBody>
            </ModalContent>
         </Modal>
         :
         <Modal closeOnOverlayClick={true} size='xl' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my='auto'  backgroundColor='#3397da10'>
               <ModalCloseButton  color='white' />
               <ModalBody>
                  <Image borderRadius={5} maxWidth='90%' mx='auto' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
               </ModalBody>
            </ModalContent>
         </Modal>
         }

      </VStack>
   )
}




