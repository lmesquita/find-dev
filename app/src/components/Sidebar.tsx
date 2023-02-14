import * as React from 'react';
import { Input, Text, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Sidebar() {
  return (
    <>
      <Text
          color='#1C255C'
          fontSize='20px'
          fontWeight='800'
          pt='37px'
          pl='22px'
        >
          Encontrar Dev
        </Text>
        
        <InputGroup
          size='lg'
          ml='22px'
          w='317px'
          mt='7px'
          shadow='md'
          rounded='md'
        >
          <InputLeftElement>
            <SearchIcon />          
          </InputLeftElement>

          <Input
            variant='filled'
            placeholder='Github username'
          />

          <InputRightElement width='75px'>
            <Button
              h='33px'
              size='sm'
              bg='#1C255C'
              color='#FFFFFF'
              fontSize='14px'
              fontWeight='400'
            >
              Buscar
            </Button>
          </InputRightElement>
        </InputGroup>
    </>
  );
}

export default Sidebar;
