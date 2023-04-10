import { useState, useEffect } from 'react';
import { Input, InputGroup, Container, InputRightElement, Image, Box, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBar() {
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchChampions = async () => {
      try {
        const response = await fetch('//ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json', {
          signal: abortController.signal,
        });
        const data = await response.json();
        setChampions(Object.values(data.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchChampions();

    return () => {
      abortController.abort();
    };
  }, []);

  const handleInputChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredChampions = champions.filter(champion => champion.name.toLowerCase().startsWith(searchTerm.slice(0, 5)));

  return (
    <Container>
      <InputGroup>
        <InputRightElement pt='5px'>
          <SearchIcon color='gray.300' fontSize='25px' />
        </InputRightElement>
        <Input
          type='text'
          color='gray.300'
          size='lg'
          placeholder='Choisis un champion'
          backgroundColor='#ffffff21'
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>
      {searchTerm && (
        <Box mt='20px' p='10px' bg='blue.800 ' borderRadius='md' w='100%' maxH='300px' overflowY='scroll' spacing='0px'>
          {filteredChampions.map(champion => (
            <Box key={champion.id} display='flex' alignItems='center' my='10px' gap='30px' ms='10px'>
              <Image
                src={`//ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champion.id}.png`}
                objectFit='contain'
                h='50px'
                w='50px'
                align='center'
              />
              <Text color='white'>{champion.name}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default SearchBar;
