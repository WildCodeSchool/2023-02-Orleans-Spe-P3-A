import { useState, useEffect } from 'react';
import ChampionCard from '../components/ChampionCard';
import { Box, Heading, Skeleton, Button, Select } from '@chakra-ui/react';
import background from '../assets/images/background-image.png';

const filterButtons = [
  { label: 'Tous les champions', value: '' },
  { label: 'Tanks', value: 'Tank' },
  { label: 'Assassins', value: 'Assassin' },
  { label: 'Mages', value: 'Mage' },
  { label: 'Tireurs', value: 'Marksman' },
];

function List() {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch('//ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json', { signal })
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

  const filteredChampions = filter ? champions.filter(champion => champion.tags.includes(filter)) : champions;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 666);
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
        {isMobile ? (
          <Box display='flex' justifyContent='center' color='white' marginTop={10}>
            <Select
              width='75%'
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
          </Box>
        ) : (
          <Box display='flex' justifyContent='center' color='black' marginTop={50} marginLeft='4.3%' mb={5}>
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
          </Box>
        )}
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
    </Box>
  );
}

export default List;
