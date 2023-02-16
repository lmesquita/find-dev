import React, { useContext, useState } from 'react';
import { Text, Box, Image, Flex } from '@chakra-ui/react';
import { ChevronRightIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
import UserContext from '../context/UserContext';
import { IUser } from '../interfaces/IUser';
import FilterUsers from '../helpers/FilterUsers';

function UserCard(props: { user: IUser, isRecents: boolean }) {
  const {
    recents,
    isSelected,
    getIsSelected,
    getRepositories,
    getRecents,
  } = useContext(UserContext);

  const [list] = useState([] as IUser[]);

  const cardClick = () => {
    if (!props.isRecents) {
      getIsSelected(!isSelected);
      if (props.user && props.user.repos_url && recents) {
        
        const verify = FilterUsers(recents, props.user);
        if (!verify) {
          if (recents && recents.length < 5) {
            list.push(props.user);
          } else {
            list.shift();
            list.push(props.user)
          }        
  
          getRecents(list);
        }

        getRepositories(props.user.repos_url);
      }
    }
  }

  return (
    <Box>
    {
      props.user && props.user.id
      ?
        (
          <Box
            w='317px'
            h='91px'
            ml='22px'
            mb='21px'
            bg='#FFFFFF'
            rounded='md'
            shadow='md'
            cursor='pointer'
            onClick={ cardClick }
          >
            <Flex
              pt='12px'
              alignItems='center'
              justify='space-around'
            >
              <Image
                borderRadius='full'
                boxSize='66px'
                src={ props.user.avatar_url }
                alt='Profile picture'
              />
              <Box>
                <Text
                  fontSize='18px'
                  fontWeight='800'
                  color='#1A235B'
                >
                  { props.user.name }
                </Text>
                <Text
                  fontSize='14px'
                  fontWeight='400'
                  color='#3A8E3D'
                >
                  { '@' + props.user.login }
                </Text>
              </Box>
              <Box width='44px'  textAlign='center'>
                {
                  props.isRecents
                  ? ''
                  : 
                    (
                      !isSelected
                      ?
                        <ChevronRightIcon fontSize='44px' />
                      :
                        <CloseIcon fontSize='18px' />
                    )
                }
                
              </Box>
            </Flex>
          </Box>
        )
      :
        (
          <Flex
            w='317px'
            ml='22px'
            mt='25px'
            justify='center'
            alignItems='center'
          >
            <WarningTwoIcon color='red' fontSize='30px' mr='5px'/>
            <Text fontSize='18px' fontWeight='800'>Usuário não encontrado</Text>
          </Flex>
        )
    }
    </Box>
  )
}

export default UserCard;