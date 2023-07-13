import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#efac41',
      200: '#de8531',
      300: '#b32900',
    },
  },
  components: {
    Heading: {
      variants: {
        primary: {
          fontFamily: 'Parisienne',
          fontSize: { sm: '2.5em', lg: '4.5em' },
          color: 'yellow.900',
        },
        secondary: {
          fontFamily: 'Martel',
          fontSize: { sm: '1em', lg: '3em' },
        },
        paragraph: { fontFamily: 'Trykker' },
      },
    },
  },
});

export default theme;
