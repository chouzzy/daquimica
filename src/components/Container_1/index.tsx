import { Box, Container, Image } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { Footer_menu } from "./Footer_menu";
import { Navbar } from "./Header";
export function Container_1() { 
   return (
      <>
         
         <Container maxW='100vw' minH='100vh' bg='white' p='0' m='0' centerContent>
            <Navbar/>
            <Banner/>
            <Footer_menu/>
         {/* Grid 5 images */}
         </Container> 
      </>
   )
}