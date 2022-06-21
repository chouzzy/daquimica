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
            <Image borderRadius={4} onClick={onOpen} cursor='pointer' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
         </Box>

         <Text fontWeight='bold'>{footerContent.title} </Text>
         <Text fontSize='0.9rem' fontWeight='500'>
            {footerContent.description}
         </Text>

         {footerContent.title == 'Vídeo institucional'?
         ''
         :
         <Slink activeClass="active" to={footerContent.scrollTag} spy={true} smooth={true} offset={0} duration={500}>
            <Text _hover={{color:'teal.400', transition:'300ms'}} cursor='pointer' fontWeight='bold'> Saiba mais...</Text>
         </Slink>
         }


         {isDesktopVersion?
         <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx='80px' my='40px' border='1px solid #00000040'  backgroundColor='#350fdf10'>
               <ModalCloseButton color='white' />
               <ModalBody p='50px'>
                  {footerContent.scrollTag == '#video'?
                  <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  :
                  <Image borderRadius={5} maxWidth='90%' mx='auto' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
                  }
               </ModalBody>
            </ModalContent>
         </Modal>
         :
         <Modal closeOnOverlayClick={true} size='xl' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my='auto' border='1px solid #00000040' backgroundColor='#546ca440'>
               <ModalCloseButton  color='white' />
               <ModalBody p='50px'>
                  {footerContent.scrollTag == '#video'?
                  <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  :
                  <Image borderRadius={5} maxWidth='90%' mx='auto' objectFit='cover' src={footerContent.image} alt='Banner inicial' />
                  }
               </ModalBody>
            </ModalContent>
         </Modal>
         }

      </VStack>
   )
}




