import React, { useContext } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';
import CardProfile from './CardProfile';
import RepositoriesCard from './RepositoriesCard';

function SearchResults() {
  const { user, isSelected } = useContext(UserContext);

  return (
    <Flex direction='column' align='center'>
      {
        !isSelected
        ?
          (<>
            <Text
              color='#1A235B'
              opacity='49%'
              fontSize='24px'
              fontWeight='800'
            >
              PESQUISE UM PERFIL DO GITHUB
            </Text>
            <SearchIcon
              color='#1C255C'
              opacity='50%'
              w='75px'
              h='75px'
            />
          </>)
        : <>
            <CardProfile />
            <RepositoriesCard />
          </>
      }
    </Flex>
  );
}

export default SearchResults;