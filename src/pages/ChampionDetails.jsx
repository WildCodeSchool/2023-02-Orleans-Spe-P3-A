import { useState, useEffect } from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function ChampionDetails() {
  const [champion, setChampion] = useState(null);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [selectedPassive, setSelectedPassive] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchChampion = async () => {
      try {
        const response = await fetch(`//ddragon.leagueoflegends.com/cdn/13.6.1/data/fr_FR/champion/${name}.json`, {
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

  const handleSpellClick = spell => {
    setSelectedSpell(spell);
    setSelectedPassive(false);
  };

  const handlePassiveClick = () => {
    setSelectedSpell(null);
    setSelectedPassive(true);
  };

  if (!champion) {
    return null;
  }

  const { spells, passive } = champion;

  return (
    <Box
      backgroundImage={`//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
      backgroundSize='cover'
      backgroundPosition={{ base: 'bottom', md: 'center' }}
      backgroundRepeat='no-repeat'
      h='calc(100vh - 58px)'
      w='100%'
    >
      <Flex alignItems='baseline' pl={{ base: '20px', md: '50px' }} pt='80px' direction={{ base: 'column', md: 'row' }}>
        <Text fontSize='6xl' fontWeight='bold' mb={{ base: '0', md: '4' }} color='#D0A85C'>
          {champion.name}
        </Text>
        <Text fontSize='4xl' mb={4} color='white' ml={4}>
          {champion.title}
        </Text>
      </Flex>

      <Flex
        h='800px'
        maxW='800px'
        paddingTop={{ base: '50px', md: '100px' }}
        pl={{ base: '20px', md: '50px' }}
        direction={{ base: 'row', md: 'column' }}
        justify='center'
        gap='20px'
      >
        <Flex gap='20px' direction={{ base: 'column', md: 'row' }}>
          <Button
            onClick={handlePassiveClick}
            bgSize='cover'
            backgroundPosition='center'
            backgroundImage={`//ddragon.leagueoflegends.com/cdn/13.7.1/img/passive/${champion.passive.image.full}`}
            h='50px'
            w='50px'
            _hover={{
              transform: 'scale(1.5)',
              transitionDuration: 'all 0.6s ease-in-out',
            }}
          />
          {spells.map(spell => (
            <Button
              onClick={() => handleSpellClick(spell)}
              backgroundPosition='center'
              bgSize='cover'
              key={spell.id}
              backgroundImage={`//ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/${spell.image.full}`}
              h='50px'
              w='50px'
              _hover={{ transform: 'scale(1.5)', transitionDuration: 'all 0.6s ease-in-out' }}
            />
          ))}
        </Flex>
        {/*Trait de sépration */}
        <Flex
          height={{ base: '300px', md: '2px' }}
          w={{ base: '2px', md: '350px' }}
          opacity='0.5'
          bg='#D0A85C'
          alignSelf='start'
          mt={{ base: '20px', md: '10px' }}
        />

        <Flex direction='column' mt='10px' h={{ base: '550px', md: '800px' }} w={{ base: '335px', md: 'initial' }}>
          <Text>
            {selectedSpell && (
              <Text textAlign='start' color='white' fontWeight='bold' fontStyle='oblique'>
                {selectedSpell.name}
              </Text>
            )}
            {selectedPassive && (
              <Text textAlign='start' color='white' fontWeight='bold' fontStyle='oblique'>
                {passive.name}
              </Text>
            )}
          </Text>
          <Text textAlign='start' color='white' pr='10px'>
            {selectedPassive && <Text fontSize='1rem'>{passive.description}</Text>}
            {selectedSpell && <Text fontSize='1rem'>{selectedSpell.description}</Text>}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
export default ChampionDetails;
