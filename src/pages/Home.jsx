import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import imageSrc from '../../src/assets/images/background-image.png';
import useTypewriter from 'react-typewriter-hook';

function Home() {
  const text1 = 'B2G.JS !!';

  const typingText1 = useTypewriter(text1);

  return (
    <Box backgroundImage={imageSrc} backgroundSize='cover' backgroundPosition='center' minHeight='100vh' paddingTop='50px'>
      <Flex position='absolute' zIndex='1' flexDirection='column' alignItems='flex-start' top='12%' left='70px' mr='20px'>
        <Text as='p' color='white' fontSize='30px' fontWeight='bold'>
          {'Dominez le game'}
        </Text>
        <Text as='p' fontSize='30px' fontWeight='bold'>
          <span style={{ color: 'white' }}>{'avec '}</span>
          <span style={{ color: '#d0a85c' }}>{typingText1}</span>
        </Text>
      </Flex>
      <Flex justifyContent='center' position='relative' zIndex='0'>
        <Heading as='h1' size='4xl' color='white' textTransform='uppercase' mb='80px' mt='210px'>
          {'B2G.'}
          <Text as='span' color='#d0a85c'>
            {'JS'}
          </Text>
        </Heading>
      </Flex>
      <Box>
        <SearchBar />
      </Box>
    </Box>
  );
}

export default Home;
