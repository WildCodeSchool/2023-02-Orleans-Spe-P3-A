import { useState, useEffect } from 'react';
import ChampionCard from '../components/ChampionCard';
import { Box, Heading, Skeleton, Button, Select, InputGroup, InputRightElement, Input, Flex, Center, Icon } from '@chakra-ui/react';
import background from '../assets/images/background-image.png';
import { SearchIcon } from '@chakra-ui/icons';
import { FaArrowUp } from 'react-icons/fa';

const filterButtons = [
  { label: 'Tous les champions', value: '' },
  { label: 'Tanks', value: 'Tank' },
  { label: 'Assassins', value: 'Assassin' },
  { label: 'Mages', value: 'Mage' },
  { label: 'Tireurs', value: 'Marksman' },
  { label: 'Supports', value: 'Support' },
];

function List() {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch('//ddragon.leagueoflegends.com/cdn/13.6.1/data/fr_FR/champion.json', { signal })
      .then(response => response.json())
      .then(data => {
        const championsList = Object.values(data.data).map(champion => ({
          id: champion.id,
          name: champion.name,
          image: `//ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
          tags: champion.tags,
        }));
        setChampions(championsList);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching champion data:', error);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredChampions = champions.filter(champion => {
    const matchesFilter = filter ? champion.tags.includes(filter) : true;
    const matchesSearch = champion.name.toLowerCase().startsWith(searchValue.slice(0, 5));
    return matchesFilter && matchesSearch;
  });

  const handleInputChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 666);
    setShowSearchBar(window.innerWidth > 1000);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box backgroundImage={background} backgroundSize='cover' minHeight='100vh' py='4'>
      <Box spacing='4' marginTop='15px'>
        <Heading as='h1' size='2xl' textAlign='center' color='white'>
          {'Liste des champions'}
        </Heading>
        <Flex justifyContent={!showSearchBar ? 'center' : 'space-between'} marginTop={50} mx='4.3%' mb={5}>
          {isMobile ? (
            <Center display='flex' justifyContent='center' color='white' marginTop={10}>
              <Select
                width='100%'
                value={filter}
                onChange={event => setFilter(event.target.value)}
                bg='blue.800'
                borderColor='blue.800'
                color='white'
              >
                {filterButtons.map(button => (
                  <option key={button.value} value={button.value}>
                    {button.label}
                  </option>
                ))}
              </Select>
            </Center>
          ) : (
            <Center display='flex' justifyContent='center' color='black'>
              {filterButtons.map((button, index) => (
                <Button
                  key={index}
                  size='md'
                  mr='4'
                  isActive={filter === button.value}
                  onClick={() => setFilter(button.value)}
                  variant='variantButton'
                >
                  {button.label}
                </Button>
              ))}
            </Center>
          )}
          {showSearchBar ? (
            <Center>
              <InputGroup>
                <InputRightElement>
                  <SearchIcon color='gray.300' fontSize='20px' />
                </InputRightElement>
                <Input
                  type='text'
                  color='gray.300'
                  size='md'
                  placeholder='Recherche...'
                  backgroundColor='#ffffff21'
                  value={searchValue}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Center>
          ) : null}
        </Flex>
        <Box display='flex' justifyContent='center' flexWrap='wrap'>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  width={300}
                  height={680}
                  style={{ margin: '20px' }}
                  borderRadius='lg'
                  startColor='blue.500'
                  endColor='blue.800'
                />
              ))
            : filteredChampions.map(champion => <ChampionCard key={champion.id} champion={champion} />)}
        </Box>
      </Box>
      {showButton && (
        <Box position='fixed' bottom='4' right='4'>
          <Button onClick={handleButtonClick} size='sm' colorScheme='blue'>
            <Icon as={FaArrowUp} />
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default List;
