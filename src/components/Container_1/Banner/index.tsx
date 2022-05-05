import { Box, Image } from "@chakra-ui/react";

export function Banner() { 
   return (
      <Box w='90vw'gap={4}>
         <Image objectFit='cover' minH='200px' src={"static/img/banner_index.PNG"} alt='Banner inicial' />
      </Box>
   )
}