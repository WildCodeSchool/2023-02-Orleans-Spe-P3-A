import { Box, Flex, Text, Image, Center, Link as ChakraLink, Wrap, WrapItem, extendTheme, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const customTheme = extendTheme({});

const Footer = () => {
  return (
    <div className='Footer'>
      <Box as='footer' bg='black' w='100%' h={{ base: '480px', md: '250px' }} direction={['column', 'column', 'row', 'row']}>
        <Stack direction={['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']}>
          {/*Api data source*/}
          <Box w={{ base: '100%', md: '50%' }} pl={{ md: '10px' }} bg='blue' align='center' h={{ base: '150px', md: '250px' }}>
            <Flex direction='column' justify={['center', 'center', 'space-around']} h={{ base: '150px', md: '250px' }} pt={{ md: '17px' }}>
              <Flex justify='flex-start' ml={{ base: '35px', md: '30px' }} fontSize='1.5rem' color='#D0A85C' bg='red'>
                Api League of Legends
              </Flex>
              <Flex justify='flex-start' bg='yellow'>
                <Text fontSize='0.5em' color='grey' ml={{ base: '35px', md: '30px' }} textAlign='start'>
                  All the content of B2G'S comes from the API of League of Legends Database.
                </Text>
              </Flex>
              <Flex justify='flex-start' bg='#f0f'>
                <Flex
                  justify='space-between'
                  align={['flex-start']}
                  direction={['column', 'column', 'row']}
                  color='#D0A85C'
                  w='90%'
                  ml={{ base: '35px', md: '30px' }}
                  pr={{ base: '20px' }}
                  h={{ base: '100px', md: '50px' }}
                >
                  <Text fontSize='1.3rem' fontWeight='bold'>
                    Data Dragon
                  </Text>
                  <Text fontSize={{ base: '1rem', md: '1.2rem' }} color='#D0A85C'>
                    Mentions légales
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          {/*Trait de sépration */}
          <Flex
            height={{ base: '1px', md: '200px' }}
            w={{ base: '200px', md: '1px' }}
            border='grey'
            opacity='0.5'
            bg='grey'
            my='auto'
            alignSelf='center'
          ></Flex>

          {/*Box authors-api */}

          <Flex direction='column' w={{ base: '100%', md: '50%' }} gap='20px' height={{ base: '310px', md: '250px' }} color='white' p={30}>
            {/*Box Authors title */}
            <Flex
              bg='lightgoldenrodyellow'
              justify={['center', 'center', 'flex-start']}
              w='100%'
              color='grey'
              fontSize='2rem'
              pl={{ base: '0', md: '24px' }}
            >
              Authors
            </Flex>

            {/*authors name and photo*/}

            <Wrap w={{ base: '100%' }} h={{ base: '300px' }} justify='space-between' bg='lightcyan'>
              {/*bloc name photo */}
              <Flex w={{ base: '47%', md: '155px' }} justify='center' color='white'>
                <Flex justify='space-between' align='center' direction={['column', 'column', 'row']} gap='10px'>
                  {/*authors photo*/}
                  <Center className='photo-profile' w='50%' color='white'>
                    <Image w='100%' borderRadius='full' boxSize='40px' src='./src/assets/smile.svg' alt='ric photo' />
                  </Center>
                  {/*authors name*/}
                  <Center className='name' color='grey' fontSize={{ base: '1.4rem', md: '1.2rem' }}>
                    Richard
                  </Center>
                </Flex>
              </Flex>

              {/*bloc name photo */}
              <Flex w={{ base: '47%', md: '155px' }} justify='center' color='white'>
                <Flex justify='space-between' align='center' direction={['column', 'column', 'row']} gap='10px'>
                  {/*authors photo*/}
                  <Center className='photo-profile' w='50%'>
                    <Image w='100%' borderRadius='full' boxSize='40px' src='./src/assets/smile.svg' alt='ric photo' />
                  </Center>
                  {/*authors name*/}
                  <Center className='name' color='grey' fontSize={{ base: '1.4rem', md: '1.2rem' }}>
                    Gregory
                  </Center>
                </Flex>
              </Flex>

              {/*bloc name photo */}
              <Flex w={{ base: '47%', md: '155px' }} justify='center' pr={{ md: '15px' }} color='white'>
                <Flex justify='space-between' align='center' direction={['column', 'column', 'row']} gap='10px'>
                  {/*authors photo*/}
                  <Center className='photo-profile' w='50%' bg='blue'>
                    <Image w='100%' borderRadius='full' boxSize='40px' src='./src/assets/smile.svg' alt='ric photo' />
                  </Center>
                  {/*authors name*/}
                  <Center className='name' color='grey' fontSize={{ base: '1.4rem', md: '1.2rem' }}>
                    Alexis
                  </Center>
                </Flex>
              </Flex>

              {/*bloc name photo */}
              <Flex w={{ base: '47%', md: '155px' }} justify='center' color='white'>
                <Flex justify='space-between' align='center' direction={['column', 'column', 'row']} gap='10px'>
                  {/*authors photo*/}
                  <Center className='photo-profile' w='50%' bg='#f0f'>
                    <Image w='100%' borderRadius='full' boxSize='40px' src='./src/assets/smile.svg' alt='ric photo' />
                  </Center>
                  {/*authors name*/}
                  <Center className='name' color='grey' fontSize={{ base: '1.4rem', md: '1.2rem' }}>
                    Thyphen
                  </Center>
                </Flex>
              </Flex>
            </Wrap>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
};
export default Footer;
