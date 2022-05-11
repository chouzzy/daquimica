import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, Link, useBreakpointValue, Input, Stack ,VStack, InputGroup, InputLeftAddon, Button } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im"
import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FooterRights } from "./Footer_rights";

export function Container_6() { 
   const [value, setValue] = React.useState('')
   const handleChange = (event) => setValue(event.target.value)
 
   const isTabletVersion = useBreakpointValue({ 
      base: false,
      sm: true,
      md: false,
      lg: false,
      xl: false
    })
   const isDesktopVersion = useBreakpointValue({ 
      base: false,
      sm: false,
      md: true,
      lg: true,
      xl: true
    })
   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

   return (
      <Container id='#footer' maxW='100vw' color='datBlue' bg='white' p='0' m='0' centerContent>

         {isMobileVersion?
         <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
         templateRows='repeat(2, 1fr)'
         gap={5} textAlign='center' color='datBlue'>
            <GridItem colStart={1} colEnd={13} mt='auto' py={5} borderBottom='1px solid #55808c' >
               <Image  src={"static/img/blend-logo.png"} maxW='50%' mx='auto' alt='Logo daquimica' />
            </GridItem>

            <GridItem colStart={1} colEnd={13} mt='50px'> 
               <SimpleGrid templateRows='repeat(2, 1fr)'>
                  <SimpleGrid mx='auto' textAlign='center'>
                     <Box  fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                     <Box  fontSize='1rem' fontWeight='400'> 
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                     nonummy nibh euismod tincidunt 
                     ut laoreet dolore mag
                     </Box>
                  </SimpleGrid >
                  <SimpleGrid mx='auto' w='9rem' columns={4}  fontSize='1.6rem'>
                     <Link _hover={{color: "teal.400"}} mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <BsInstagram /> </Link>
                     <Link  _hover={{color: "teal.400"}} mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <ImFacebook2/> </Link>
                     <Link  _hover={{color: "teal.400"}} mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <SiLinkedin/> </Link>
                     <Link _hover={{fontSize:'3rem', transition:'200ms'}} mt='auto' color='#6cd474'fontSize='2.8rem' href='https://wa.me/5516992469499'> <RiWhatsappFill/> </Link>
                  </SimpleGrid >
               </SimpleGrid>
            </GridItem>

            <GridItem borderTop='1px solid #55808c' py={5} colStart={1} colEnd={13} mt={5}> 
               <Stack spacing={2} w='100%' textAlign='left'>
                  <Box  fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>
                  
                  <Text>Empresa/ Pessoa:</Text>
                  <Input
                  color='red'
                  my='10px'
                  value={value}
                  onChange={handleChange}
                  placeholder='Digite o nome de sua empresa'
                  size='sm'
                  w='100%'
                  />
                  <Text >Assunto:</Text>
                  <Input
                  value={value}
                  onChange={handleChange}
                  placeholder='Assunto'
                  size='sm'
                  w='100%'
                  />

                  <Text >Mensagem:</Text>
                  <Input
                  value={value}
                  onChange={handleChange}
                  placeholder='Mensagem'
                  size='sm'
                  w='100%'
                  />
                  <Button type='submit'>
                     Enviar
                  </Button>
               </Stack>
            </GridItem>
         </Grid>
         :
         ''
         }
         {isTabletVersion?
         <>
         <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
         templateRows='repeat(2, 1fr)'
         gap={5} textAlign='center' color='datBlue'>
            <GridItem colStart={1} colEnd={6} mt='auto' >

               <Image  src={"static/img/blend-logo.png"} maxW='100%' alt='Logo daquimica' />
            </GridItem>

            <GridItem colStart={6} colEnd={13} mt='auto'> 
               <SimpleGrid templateRows='repeat(2, 1fr)'>
                  <SimpleGrid mx='auto' textAlign='right'>
                     <Box  fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                     <Box  fontSize='1rem' fontWeight='400'> 
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                     nonummy nibh euismod tincidunt 
                     ut laoreet dolore mag
                     </Box>
                  </SimpleGrid >
                  <SimpleGrid ml='auto' w='9rem' columns={4}  fontSize='1.6rem'>
                     <Link _hover={{color: "teal.400"}} mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <BsInstagram /> </Link>
                     <Link  _hover={{color: "teal.400"}} mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <ImFacebook2/> </Link>
                     <Link  _hover={{color: "teal.400"}} mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <SiLinkedin/> </Link>
                     <Link _hover={{fontSize:'3rem', transition:'200ms'}} mt='auto' color='#6cd474'fontSize='2.8rem' href='https://wa.me/5516992469499'> <RiWhatsappFill/> </Link>
                  </SimpleGrid >
               </SimpleGrid>
            </GridItem>

            <GridItem borderTop='1px solid #55808c' py={5} colStart={1} colEnd={13} mt={5}> 
               <Stack spacing={2} w='100%' textAlign='left'>
                  <Box  fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>
                  
                  <Text>Empresa/ Pessoa:</Text>
                  <Input
                  color='red'
                  my='10px'
                  value={value}
                  onChange={handleChange}
                  placeholder='Digite o nome de sua empresa'
                  size='sm'
                  w='100%'
                  />
                  <Text >Assunto:</Text>
                  <Input
                  value={value}
                  onChange={handleChange}
                  placeholder='Assunto'
                  size='sm'
                  w='100%'
                  />

                  <Text >Mensagem:</Text>
                  <Input
                  value={value}
                  onChange={handleChange}
                  placeholder='Mensagem'
                  size='sm'
                  w='100%'
                  />
                  <Button type='submit'>
                        Enviar
                  </Button>
               </Stack>
            </GridItem>
         </Grid>
         </>
         :
         ''
         }

         {isDesktopVersion?
         <>
            <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
            templateColumns='repeat(12, 1fr)' 
            gap={0} textAlign='center' color='datBlue'>
               <GridItem colStart={1} colEnd={3} mt='auto' >

                  <Image  src={"static/img/blend-logo.png"} maxW={['100px','100px','110px','90%']} alt='Dan Abramov' />
               </GridItem>

               <GridItem colStart={3} colEnd={7} mt='auto'> 
                  <SimpleGrid >
                     <SimpleGrid mr='auto' textAlign='left'>
                        <Box  fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                        <Box  fontSize='1rem' fontWeight='400'> 
                           <Text py={1}> (16) 99179-0291 </Text>
                           <Text py={1}> Comercial@blendquimica.com.br </Text>
                           <Text py={1}> Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi </Text>
                           <Text py={1}> CEP: 14680-000 - Jardinópolis-SP </Text>
                        </Box>
                     </SimpleGrid >
                     <SimpleGrid mt='15%' mr='auto' w='9rem' columns={4}  fontSize='1.6rem'>
                        <Link _hover={{color: "teal.400"}} mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <BsInstagram /> </Link>
                        <Link  _hover={{color: "teal.400"}} mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <ImFacebook2/> </Link>
                        <Link  _hover={{color: "teal.400"}} mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <SiLinkedin/> </Link>
                        <Link _hover={{fontSize:'3rem', transition:'200ms'}} mt='auto' color='#6cd474'fontSize='2.8rem' href='https://wa.me/5516992469499'> <RiWhatsappFill/> </Link>
                     </SimpleGrid >
                  </SimpleGrid>
               </GridItem>

               <GridItem colStart={8} colEnd={13} mt='auto'> 
                  <Stack spacing={2} w='100%' textAlign='left'>
                     <Box  fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>
                     
                     <Text>Empresa/ Pessoa:</Text>
                     <Input
                     color='red'
                     my='10px'
                     value={value}
                     onChange={handleChange}
                     placeholder='Digite o nome de sua empresa'
                     size='sm'
                     w='100%'
                     />
                     <Text >Assunto:</Text>
                     <Input
                     value={value}
                     onChange={handleChange}
                     placeholder='Assunto'
                     size='sm'
                     w='100%'
                     />

                     <Text >Mensagem:</Text>
                     <Input
                     value={value}
                     onChange={handleChange}
                     placeholder='Mensagem'
                     size='sm'
                     w='100%'
                     />
                     <Button type='submit'>
                        Enviar
                     </Button>
                  </Stack>
               </GridItem>
            </Grid>
         </>
         :
         ''
         }
         <FooterRights/>
      </Container> 
   )
}