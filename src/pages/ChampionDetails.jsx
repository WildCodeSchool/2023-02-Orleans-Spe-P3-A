import { useState, useEffect } from 'react';
import { Image, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function ChampionDetails() {
  const [champion, setChampion] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchChampion = async () => {
      try {
        const response = await fetch(`//ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion/${name}.json`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setChampion(data.data[name]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChampion();

    return () => {
      abortController.abort();
    };
  }, [name]);

  return (
    <Box>
      <Image
        src={`//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        objectFit='cover'
        h='calc(100vh - 58px)'
        w='100%'
        align='center'
      />
    </Box>
  );
}

export default ChampionDetails;
