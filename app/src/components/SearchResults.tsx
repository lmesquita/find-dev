import React, { useContext } from 'react';
import { Text, Center, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';
import ProfileCard from './ProfileCard';
import RepositoriesCard from './RepositoriesCard';

function SearchResults() {
  const { isSelected } = useContext(UserContext);

  return (
    <Box>
      {
        !isSelected
        ?
          (<Center
            w='978px'
            flexDirection='column'
            my='252px'
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
        : <Box pl='105px'>
            <ProfileCard />
            <RepositoriesCard />
          </Box>
      }
    </Box>
  );
}

export default SearchResults;