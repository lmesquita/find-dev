import React, {useContext, useState} from 'react';
import { Input, Text, InputGroup, InputLeftElement, InputRightElement, Button, Box, Image, Flex } from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';

function Sidebar() {
  const {
    user, getUser, getIsSelected, getRepositories
  } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [find, setFind] = useState(false);

  const searchClick = () => {
    if (username) {
      getUser(username);
      console.log(user);
      if (user && Object.keys(user).length > 1) {
        setFind(true);
      }
    }
  };

  const cardClick = () => {
    getIsSelected();
    if (user && user.repos_url) {
      getRepositories(user.repos_url);
    }    
  }

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
          onChange={ (e) => setUsername(e.target.value) }
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
            onClick={ searchClick }
          >
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>

      {
        find && user
        ?
        (
          <Box
            w='317px'
            h='101px'
            ml='22px'
            mt='25px'
            bg='#FFFFFF'
            rounded='md'
            shadow='md'
            cursor='pointer'
            onClick={ cardClick }
          >
            <Flex
              pt='17px'
              alignItems='center'
              justify='space-around'
            >
              <Image
                borderRadius='full'
                boxSize='66px'
                src={ user.avatar_url }
                alt='Profile picture'
              />
              <Box>
                <Text
                  fontSize='18px'
                  fontWeight='800'
                  color='#1A235B'
                >
                  { user.name }
                </Text>
                <Text
                  fontSize='14px'
                  fontWeight='400'
                  color='#3A8E3D'
                >
                  { '@' + user.login }
                </Text>
              </Box>
              <Box>
                <ChevronRightIcon fontSize='44px' />
              </Box>
            </Flex>
          </Box>
        )
        : ''
      }
    </>
  );
}

export default Sidebar;
