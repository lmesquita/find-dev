import React, { useContext, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import SearchResults from '../components/SearchResults';
import UserContext from '../context/UserContext';

function Home() {
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser('teste');
  }, []);

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