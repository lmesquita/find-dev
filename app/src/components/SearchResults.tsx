import React, { useContext } from 'react';
import { Text, Flex, Center, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';
import CardProfile from './CardProfile';
import RepositoriesCard from './RepositoriesCard';

function SearchResults() {
  const { isSelected } = useContext(UserContext);

  return (
    <Flex direction='column' align='center'>
      {
        !isSelected
        ?
          (<Center
            bg='#F4F7FE'
            h='full'
            left='362px'
            right='0'
            pos='fixed'
            flexDirection='column'
          >
            <Box>
              <Text
                color='#1A235B'
                opacity='49%'
                fontSize='24px'
                fontWeight='800'
              >
                PESQUISE UM PERFIL DO GITHUB
              </Text>
            </Box>
            <Box>
              <SearchIcon
                color='#1C255C'
                opacity='50%'
                w='75px'
                h='75px'
              />
            </Box>
          </Center>)
        : <>
            <CardProfile />
            <RepositoriesCard />
          </>
      }
    </Flex>
  );
}

export default SearchResults;