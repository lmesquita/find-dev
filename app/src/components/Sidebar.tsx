import React, {useContext, useState} from 'react';
import { Input, Text, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';
import UserCard from './UserCard';
import RecentsCards from './RecentsCards';

function Sidebar() {
  const {
    user,
    getUser,
    getIsSelected
  } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [find, setFind] = useState(false);

  const searchClick = () => {
    getIsSelected(false);
    if (username) {
      getUser(username);
      if (user && Object.keys(user).length > 1) {
        setFind(true);
      }
    }
  };

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
          <UserCard user={ user } isRecents={ false } />
        : ''
      }

      <RecentsCards />
    </>
  );
}

export default Sidebar;
