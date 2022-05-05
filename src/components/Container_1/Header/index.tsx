import { Flex, Grid, GridItem, IconButton, Image, Link, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";



export function Navbar() { 
   
   const [display, changeDisplay] = useState('none')
   return (
      <Grid w='90vw' py='5' alignItems='baseline' 
      templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(8, 1fr)']} 
      gap={0} textAlign='center' color='datBlue'>

         <GridItem colSpan={1} >
            <Image  src={"static/img/daquimica-logo.PNG"} maxW={['100px','100px','100px','100%']} alt='Dan Abramov' />
            oie awerios
         </GridItem>

         <GridItem colStart={2} colEnd={8} mt='auto' display={['none', 'none', 'none','GridItem']} >
            <GridItem mx='auto' mt='auto' pb={1} fontSize='1.1rem'>
                  <Link _hover={{color: "teal.400"}} href='#'> Home  </Link>|
                  <Link _hover={{color: "teal.400"}} href='#'> Sobre Nós  </Link>|
                  <Link _hover={{color: "teal.400"}} href='#'> Segmentos de Atuação </Link>|
                  <Link _hover={{color: "teal.400"}} href='#'> Nossos Serviços </Link>|
                  <Link _hover={{color: "teal.400"}} href='#'> Fale Conosco </Link>
            </GridItem>
         </GridItem>

         <GridItem mt='auto' display={['none', 'none', 'none','GridItem']} >

            <SimpleGrid ml='auto' w='9rem' columns={4} pb={3} mt='auto' fontSize='1.6rem'>
               <Link _hover={{color: "teal.400"}} mt='auto' href='#'> <BsInstagram /> </Link>
               <Link  _hover={{color: "teal.400"}} mt='auto' href='#'> <ImFacebook2/> </Link>
               <Link  _hover={{color: "teal.400"}} mt='auto' href='#'> <SiLinkedin/> </Link>
               <Link _hover={{fontSize:"3rem", transition:'200ms'}} color='#6cd474'fontSize='2.8rem' href='#'> <RiWhatsappFill/> </Link>
               {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
            </SimpleGrid >
         </GridItem>
         
         {/* Mobile button */}
         <IconButton
               aria-label="Open Menu"
               size="lg"
               ml='auto'
               mt='auto'
               bg='datBlue'
               icon={
                  <RiMenuLine color='white' />
               }
               onClick={() => changeDisplay('flex')}
               display={['flex', 'flex', 'flex', 'none']}
         />
         {/* Mobile menu content  */}
         <Flex
            w='100vw'
            display={display}
            bgColor="green.50"
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
         >
            <Flex justify="flex-end">
               <IconButton
                  mt={2}
                  mr={2}
                  aria-label="Open Menu"
                  size="lg"
                  bg='datBlue'
                  icon={
                  <RiMenuLine color='white' />
                  }
                  onClick={() => changeDisplay('none')}
               />
            </Flex>

            <Flex
               flexDir="column"
               align="left"
               fontSize='1.3rem'
            >
               <Link _hover={{color: "teal.400"}} py={2} href='#'> Home  </Link>
               <Link _hover={{color: "teal.400"}} py={2} href='#'> Sobre Nós  </Link>
               <Link _hover={{color: "teal.400"}} py={2} href='#'> Segmentos de Atuação </Link>
               <Link _hover={{color: "teal.400"}} py={2} href='#'> Nossos Serviços </Link>
               <Link _hover={{color: "teal.400"}} py={2} href='#'> Fale Conosco </Link>

               <SimpleGrid mx='auto' w='9rem' columns={4} py={3} mt='auto' fontSize='1.6rem'>
                  <Link _hover={{color: "teal.400"}} mt='auto' href='#'> <BsInstagram /> </Link>
                  <Link  _hover={{color: "teal.400"}} mt='auto' href='#'> <ImFacebook2/> </Link>
                  <Link  _hover={{color: "teal.400"}} mt='auto' href='#'> <SiLinkedin/> </Link>
                  <Link color='#6cd474'fontSize='1.6rem' href='#'> <RiWhatsappFill/> </Link>
                  {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
               </SimpleGrid >
            </Flex>

         </Flex>

      </Grid>
   )
}