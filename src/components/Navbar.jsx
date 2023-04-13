import logo from '../assets/images/logo.png';
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
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='gray.800'>
      <Flex alignItems='center' justifyContent='space-between' py='3'>
        <Box fontWeight='bold' color='white' ml='4'>
          <ChakraLink as={Link} to='/'>
            <Image src={logo} alt='Logo' width='110px' />
          </ChakraLink>
        </Box>
        <Box display={['none', 'block']} color='white' fontSize='20px' mr='4'>
          <ChakraLink as={Link} to='/' mr='4'>
            {'Accueil'}
          </ChakraLink>
          <ChakraLink as={Link} to='/champions' mr='4'>
            {'Champions'}
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
