import * as React from 'react';
import { Box, Text, Center, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Sidebar from '../components/Sidebar';
import SearchResults from '../components/SearchResults';

function Home() {
  return (
    <>
      <Box
        w='362px'
        h='full'
        left='0'
        bg='#C9D9FF'
        pos='fixed'
      >        
        <Sidebar />
      </Box>

      <Center
        bg='#F4F7FE'
        h='full'
        left='362px'
        right='0'
        pos='fixed'
      >
        <SearchResults />
      </Center>
    </>
  );
}

export default Home;