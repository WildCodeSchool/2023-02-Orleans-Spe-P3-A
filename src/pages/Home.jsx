import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import imageSrc from '../../src/assets/images/BackgroundImg.png';

function Home() {
  return (
    <Box backgroundImage={imageSrc} backgroundSize='cover' backgroundPosition='center' h='100vh'>
      <Flex justifyContent='center'>
        <Box>
          <Heading as='h1' size='4xl' color='white' textTransform='uppercase' mb='150px' mt='150px'>
            {'B2G.'}
            <Text as='span' color='#d0a85c'>
              {'JS'}
            </Text>
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
