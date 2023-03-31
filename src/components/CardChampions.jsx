import { Box, Image, Badge, Text, Center, Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function CardChampions({ champion }) {
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
        backgroundColor: 'blue.100',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <Center h='80%'>
        <Image src={image} alt={name} objectFit='contain' h='100%' w='100%' />
      </Center>

      <Box p='2' justifyContent='center'>
        <Text mt='0' fontWeight='bold' fontSize='l' lineHeight='tight' color='blue.500'>
          {name}
        </Text>

        <Box d='flex' alignItems='baseline' justifyContent='center'>
          {tags.map(tag => (
            <Badge key={tag} bg='#d0a85c' borderRadius='full' px='2' m='1'>
              {tag}
            </Badge>
          ))}
        </Box>
        <Box justifyContent='center' p='0'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button variant='solid' height='30%' w='100%'>
              {'Sélectionnez ce champion'}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

CardChampions.propTypes = {
  champion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CardChampions;
