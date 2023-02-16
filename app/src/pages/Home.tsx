import React, { useContext, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
      <Flex>
        <Box
          w='362px'
          minHeight='720px'
          bg='#C9D9FF'
        >        
          <Sidebar />
        </Box>

        <Box>
          <SearchResults />
        </Box>

      </Flex>

    </>
  );
}

export default Home;