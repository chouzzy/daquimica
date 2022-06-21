import { Box, Container, Flex, Grid, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { GrYoutube } from "react-icons/gr";

export function Banner() { 
   const { isOpen, onOpen, onClose } = useDisclosure()

   const iframeHeight = useBreakpointValue({
      base: '200px', 
      sm: '400px', 
      md: '500px',
      lg: '500px',
      xl: '500px'
   })
   return (
      <>
      
      <Container w='90vw' borderRadius={4} my={4} h={['20vh','40vh','50vh','50vh']} cursor='pointer' color='datGreen' alignItems='center' centerContent bgImage='static/img/banner_index_inv.png' fontSize='5rem' _hover={{color: "#c4302b", transition:'1000ms'}} onClick={onOpen}>
         <Flex my='auto' display='inline'>
            <GrYoutube/>
         </Flex>
      </Container>
      
      <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent mx={['8px','40px','80px','80px']} my={['28vh','100px','40px','40px']} border='1px solid #00000040'  backgroundColor='#350fdf10'>
            <ModalCloseButton color='white' />
            <ModalBody alignItems='center' py={['100px','16px','40px','40px']} px={['4px','16px','40px','40px']}>
               <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </ModalBody>
         </ModalContent>
      </Modal>
      </>
   )
}