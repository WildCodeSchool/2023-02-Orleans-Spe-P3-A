import { Box, Flex, Text, Image, Wrap, Stack } from '@chakra-ui/react';

const guys = [
  {
    name: 'Richard',
    photo: './src/assets/images/richardexpertfooter.png',
  },
  {
    name: 'Gregory',
    photo: './src/assets/images/gregbygreegouze.png',
  },
  {
    name: 'Alexis',
    photo: './src/assets/images/alexislechercheur.png',
  },
  {
    name: 'Thyphen',
    photo: './src/assets/images/thyphenvigile.png',
  },
];

const SeparationLine = () => {
  return (
    <Flex
      position='relative'
      height={{ base: '1px', md: '125px' }}
      w={{ base: '200px', md: '1px' }}
      border='grey'
      opacity='0.5'
      bg='grey'
      my='auto'
      alignSelf={{ base: 'center', md: '' }}
      top={{ base: '', md: '-25px' }}
    />
  );
};

const Footer = () => {
  return (
    <Box as='footer' bg='gray.900' w='100%' h={{ base: '520px', md: '180px' }} overflow='hidden'>
      <Stack direction={['column', 'column', 'row', 'row']}>
        {/*Box authors-api */}
        <Flex
          direction='column'
          w={{ base: '100%', md: '50%' }}
          gap='10px'
          height={{ base: '290px', md: '250px' }}
          color='white'
          p={{ base: '10px', md: '10px' }}
        >
          {/*Box Authors title */}
          <Flex
            justify={['center', 'center', 'center']}
            w='100%'
            color='grey'
            fontSize='2rem'
            pt='15px'
            pl={{ base: '5', md: '24px' }}
            mt={{ base: '10px', md: 'initial' }}
          >
            <Text>{'Authors'}</Text>
          </Flex>

          {/*authors name and photo*/}
          <Wrap w={{ base: '100%' }} h={{ base: '180px' }} justify='space-between'>
            {/*bloc name photo */}
            {guys.map(guy => (
              <Flex key={guy.id} w={{ base: '47%', md: '155px' }} justify='center' alignItems='center'>
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
                  <Text color='gray.500' fontSize={{ base: '1.0rem', md: '1.1rem' }} textAlign='start'>
                    {guy.name}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Wrap>
        </Flex>
        {/*Trait de sépration */}
        <SeparationLine />
        {/*Api data source*/}
        <Box
          w={{ base: '100%', md: '50%' }}
          pl={{ md: '10px' }}
          mt={{ base: '20px', md: 'initial' }}
          align='center'
          h={{ base: '150px', md: '150px' }}
        >
          <Flex direction='column' justify={['center', 'center', 'space-around']} h={{ base: '200px' }} p={{ md: '10px' }}>
            <Flex direction='column' justify={{ base: 'space-around', md: 'initial' }}>
              <Text textAlign='start' ml={{ base: '35px', md: '30px' }} fontSize='1.5rem' color='#D0A85C'>
                {'API League of Legends'}
              </Text>
              <Text fontSize='0.5em' color='grey' ml={{ base: '35px', md: '30px' }} textAlign='start'>
                {"Tout le contenu de B2G'S provient de l'API de League of Legends Database."}
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
              mt='10px'
            >
              <Text fontSize='1.3rem' fontWeight='bold'>
                {'Data Dragon'}
              </Text>
              <Text fontSize={{ base: '1rem', md: '1..1rem' }} alignSelf={{ base: 'flex-end', md: 'flex-end' }} color='#D0A85C'>
                {'Mentions légales'}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
export default Footer;
