import logo from '../assets/images/blizzard.png';
import {
  Box,
  Flex,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverStyle = {
    _hover: {
      backgroundColor: 'gray.500',
      transition: 'background-color 0.3s ease',
    },
  };

  const noDecorationStyle = {
    textDecoration: 'none',
  };

  return (
    <Box bg='gray.800'>
      <Flex alignItems='center' justifyContent='space-between' py='3'>
        <Box fontWeight='bold' color='white' ml='4' sx={{ ...hoverStyle }}>
          <img src={logo} alt='Logo' width='150px' />
        </Box>
        <Box display={['none', 'block']} color='white' fontSize='20px' mr='4'>
          <ChakraLink as={Link} to='/' mr='4' sx={{ ...hoverStyle, ...noDecorationStyle }}>
            {'Accueil'}
          </ChakraLink>
          <ChakraLink as={Link} to='/champions' mr='4' sx={{ ...hoverStyle, ...noDecorationStyle }}>
            {'Champions'}
          </ChakraLink>
          <ChakraLink as={Link} to='/postes' sx={{ ...hoverStyle, ...noDecorationStyle }}>
            {'Postes'}
          </ChakraLink>
        </Box>
        <IconButton
          aria-label='Menu'
          icon={<HamburgerIcon />}
          variant='ghost'
          _hover={{
            backgroundColor: 'gray.400',
          }}
          color='white'
          onClick={onOpen}
          display={['block', 'none']}
          mr='4'
        />
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay bg='rgba(0, 0, 0, 0.6)' />
          <DrawerContent bg='gray.800' color='white'>
            <DrawerCloseButton />
            <DrawerBody justifyContent='flex-start'>
              <Flex flexDirection='column' justifyContent='flex-start' alignItems='flex-start' my='4'>
                <ChakraLink as={Link} to='/' mb='2'>
                  {'Accueil'}
                </ChakraLink>
                <ChakraLink as={Link} to='/champions' mb='2'>
                  {'Champions'}
                </ChakraLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
