import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

const variantButton = defineStyle({
  bg: 'blue.800',
  color: 'white',
  _hover: {
    backgroundColor: 'blue.700',
  },
  _active: {
    background: 'blue.500',
    color: 'white',
  },
});

const buttonTheme = defineStyleConfig({
  variants: { variantButton },
});

export const theme = extendTheme({
  components: { Button: buttonTheme },
});
