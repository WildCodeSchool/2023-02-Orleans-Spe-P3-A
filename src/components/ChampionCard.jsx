import { Box, Image, Badge, Text, Center, Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ChampionCard({ champion }) {
  const { name, image, tags } = champion;

  return (
    <Box
      maxW='sm'
      borderWidth='2px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'
      m='1rem'
      mb='1rem'
      _hover={{
        backgroundColor: 'blue.800',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s ease-in-out',
        transform: 'scale(1.02)',
      }}
    >
      <Center h='80%'>
        <Image src={image} alt={name} objectFit='cover' h='100%' w='100%' />
      </Center>

      <Box p='2' justifyContent='center'>
        <Text mt='0' fontWeight='bold' fontSize='l' lineHeight='tight' color='white'>
          {name}
        </Text>

        <Flex align='baseline' justify='center'>
          {tags.map(tag => (
            <Badge key={tag} bg='#d0a85c' borderRadius='lg' px='2' m='1'>
              {tag}
            </Badge>
          ))}
        </Flex>
        <Box justifyContent='center' p='2'>
          <Link to={`/champion/${champion.id}`}>
            <Button variant='solid' h='30%' w='100%' margin='auto'>
              {'Sélectionnez ce champion'}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

ChampionCard.propTypes = {
  champion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isLoading: PropTypes.bool,
};

export default ChampionCard;
