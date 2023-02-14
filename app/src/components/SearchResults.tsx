import * as React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchResults() {
  return (
    <Flex direction='column' align='center'>
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
    </Flex>
  );
}

export default SearchResults;