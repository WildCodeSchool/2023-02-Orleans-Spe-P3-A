import { Box, Flex, Text, Image, Wrap, Stack } from '@chakra-ui/react';

const guys = [
  {
    name: 'Richard',
    photo: './src/assets/smile.svg',
  },
  {
    name: 'Gregory',
    photo: './src/assets/smile.svg',
  },
  {
    name: 'Alexis',
    photo: './src/assets/smile.svg',
  },
  {
    name: 'Typhen',
    photo: './src/assets/smile.svg',
  },
];

const Footer = () => {
  return (
    <div>
      <Box as='footer' bg='black' w='100%' h={{ base: '480px', md: '250px' }}>
        <Stack direction={['column', 'column', 'row', 'row']}>
          {/*Trait de sépration */}
          <Flex
            height={{ base: '1px', md: '200px' }}
            w={{ base: '200px', md: '1px' }}
            border='grey'
            opacity='0.5'
            bg='grey'
            my='auto'
            alignSelf='center'
          />

          {/*Box authors-api */}
          <Flex
            direction='column'
            w={{ base: '100%', md: '50%' }}
            gap='20px'
            height={{ base: '290px', md: '250px' }}
            color='white'
            p={{ base: '10px', md: '30px' }}
          >
            {/*Box Authors title */}
            <Flex
              justify={['center', 'center', 'flex-start']}
              w='100%'
              color='grey'
              fontSize='2rem'
              pl={{ base: '0', md: '24px' }}
              mt={{ base: '10px', md: 'initial' }}
            >
              <Text>{'Authors'}</Text>
            </Flex>

            {/*authors name and photo*/}
            <Wrap w={{ base: '100%' }} h={{ base: '300px' }} justify='space-between'>
              {/*bloc name photo */}
              {guys.map(guy => (
                <Flex w={{ base: '47%', md: '155px' }} justify='center'>
                  <Flex
                    justify='space-between'
                    align='center'
                    direction={['column', 'column', 'row']}
                    gap='10px'
                    w={{ base: '77px', md: '116px' }}
                    minW='116px'
                  >
                    {/*authors photo*/}
                    <Image w='100%' borderRadius='full' boxSize='40px' src={guy.photo} alt={`photo de ${guy.name}`} />

                    {/*authors name*/}
                    <Text color='grey' fontSize={{ base: '1.4rem', md: '1.2rem' }} minW='72px' textAlign='start'>
                      {guy.name}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Wrap>
          </Flex>

          {/*Api data source*/}
          <Box
            w={{ base: '100%', md: '50%' }}
            pl={{ md: '10px' }}
            mt={{ base: '20px', md: 'initial' }}
            align='center'
            h={{ base: '170px', md: '250px' }}
          >
            <Flex direction='column' justify={['center', 'center', 'space-around']} h={{ base: '160px', md: '250px' }} pt={{ md: '17px' }}>
              <Flex h='200px' direction='column' justify={{ base: 'space-around', md: 'initial' }}>
                <Text textAlign='start' ml={{ base: '35px', md: '30px' }} fontSize='1.5rem' color='#D0A85C'>
                  {'API League of Legends'}
                </Text>
                <Text fontSize='0.5em' color='grey' ml={{ base: '35px', md: '30px' }} textAlign='start'>
                  {"All the content of B2G'S comes from the API of League of Legends Database."}
                </Text>
              </Flex>

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
                  {'Data Dragon'}
                </Text>
                <Text
                  fontSize={{ base: '1rem', md: '1..1rem' }}
                  alignSelf={{ base: 'flex-start', md: 'flex-end' }}
                  marginBottom={{ base: '20px' }}
                  color='#D0A85C'
                >
                  {'Legal notice'}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
export default Footer;
