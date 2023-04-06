import { useState, useEffect } from 'react';
import ChampionCard from '../components/ChampionCard';
import { Box, Heading } from '@chakra-ui/react';
import Background from '../assets/images/BackgroundB2g.jpg';
import { Skeleton } from '@chakra-ui/react';

function List() {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('//ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json')
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
  }, []);

  return (
    <Box backgroundImage={`url(${Background})`} backgroundSize='cover' minHeight='100vh' py='4'>
      <Box spacing='4' marginTop='15px'>
        <Heading as='h1' size='2xl' textAlign='center' color='white'>
          {'Listes des champions'}
        </Heading>
        <Box display='flex' justifyContent='flex-start' color='white' marginTop={10} marginLeft='5%'>
          <Heading as='h2' size='md' mr='4'>
            {'Tank'}
          </Heading>
          <Heading as='h2' size='md' mr='4'>
            {' Assassin'}
          </Heading>
          <Heading as='h2' size='md' mr='4'>
            {'Mage'}
          </Heading>
          <Heading as='h2' size='md' mr='4'>
            {' Marksman'}
          </Heading>
        </Box>
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
            : champions.map(champion => <ChampionCard key={champion.id} champion={champion} />)}
        </Box>
      </Box>
    </Box>
  );
}

export default List;
