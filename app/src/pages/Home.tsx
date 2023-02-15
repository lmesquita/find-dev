import React, { useContext, useEffect } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
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
      <Flex>
        <Box width='362px' />

        <Center pl='105px'>
          <SearchResults />
        </Center>

      </Flex>

    </>
  );
}

export default Home;