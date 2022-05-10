import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, StackDivider, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import {Link as Slink} from 'react-scroll'
import { HomeFooter } from "./Modal";

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
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/time-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/menu-2.PNG"}/>
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/atendentes.png"}/>
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/cientista.png"}/>
         <HomeFooter title={footerTitle[4]} scrollTag="#Home" description={footerDescription[4]} image={"static/img/footer-menu/menu-5.PNG"}/>
         teste 1
      </SimpleGrid>
      </>
         :
         ''
      }
      {isTabletVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={3} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/time-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/menu-2.PNG"}/>
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/atendentes.png"}/>
      </SimpleGrid>
      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/cientista.png"}/>
         <HomeFooter title={footerTitle[4]} scrollTag="#Home" description={footerDescription[4]} image={"static/img/footer-menu/menu-5.PNG"}/>
      </SimpleGrid>
      </>
         :
         ''
      }
      {isMobileVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/time-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/menu-2.PNG"}/>
      </SimpleGrid>

      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/atendentes.png"}/>
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/cientista.png"}/>
      </SimpleGrid>

      {/* Terceira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={1} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[4]} scrollTag="#Home" description={footerDescription[4]} image={"static/img/footer-menu/menu-5.PNG"}/>
      </SimpleGrid>
      </>
         :
         ''
      }
      </>
   )
}