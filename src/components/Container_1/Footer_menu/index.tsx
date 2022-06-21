import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, StackDivider, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import {Link as Slink} from 'react-scroll'
import { HomeFooter } from "./Modal";

export function Footer_menu() { 

   const footerTitle = ['A Blend Química', 'Segmentos de atuação', 'Nossos serviços', 'Projetos personalizados','Vídeo institucional']
   const footerDescription = [
      'Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes.',
      'Estamos preparados para desenvolver projetos diversificados na área cosmética .',
      'Oferecemos um processo personalizado e bem estruturado para cada projeto.',
      'Ficamos dispostos a fazer com muito comprometimento cada ideia um projeto único.',
      'Nos acompanhe nessa jornada por dentro de nossa fábrica!']
   
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
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={4} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/footer-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/footer-2.png"}/>
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/footer-3.png"}/>
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/footer-4.png"}/>
      </SimpleGrid>
      </>
         :
         ''
      }
      {isTabletVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/footer-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/footer-2.png"}/>
      </SimpleGrid>
      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/footer-3.png"}/>
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/footer-4.png"}/>
      </SimpleGrid>
      </>
         :
         ''
      }
      {isMobileVersion?
      <>
      {/* Primeira fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[0]} scrollTag="#sobre" description={footerDescription[0]} image={"static/img/footer-menu/footer-1.png"}/>
         <HomeFooter title={footerTitle[1]} scrollTag="#segmentos" description={footerDescription[1]} image={"static/img/footer-menu/footer-2.png"}/>
      </SimpleGrid>

      {/* Segunda fila */}
      <SimpleGrid w='90vw' textAlign='center' color='datBlue' columns={2} my={3} spacingX={5} >
         <HomeFooter title={footerTitle[2]} scrollTag="#serviços" description={footerDescription[2]} image={"static/img/footer-menu/footer-3.png"}/>
         <HomeFooter title={footerTitle[3]} scrollTag="#projetos" description={footerDescription[3]} image={"static/img/footer-menu/footer-4.png"}/>
      </SimpleGrid>
      </>
         :
         ''
      }
      </>
   )
}