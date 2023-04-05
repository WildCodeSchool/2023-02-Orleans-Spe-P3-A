import { Box, Flex, Heading } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import imageSrc from '../../src/assets/images/BackgroundImg.png';

function Home() {
  return (
    <Box backgroundImage={imageSrc} backgroundSize='cover' backgroundPosition='center' h='100vh'>
      <Flex justifyContent='center'>
        <Box>
          <Heading as='h1' size='4xl' color='white' textTransform='uppercase' mb='150px' mt='200px'>
            B2G.<span style={{ color: 'rgb(208, 168, 92)' }}>JS</span>
          </Heading>
        </Box>
      </Flex>
      <Box>
        <SearchBar />
      </Box>
    </Box>
  );
}

export default Home;
