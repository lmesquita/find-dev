import { extendTheme } from '@chakra-ui/react';
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    body: 'Roboto'
  },
  styles: {
    global: () => ({
      body: {
        bg: '#F4F7FE'
      },
    }),
  },
});

export default theme;