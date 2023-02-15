import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { FormatDate } from '../helpers/FormatDate';

function RepositoriesCard() {
  const { repositories } = useContext(UserContext);

  useEffect( () => {
    console.log(repositories);
    
  });

  return (
    <Box>
      <Text
        fontSize='20px'
        fontWeight='800'
      >
        Repositórios
      </Text>
      <Flex>
        {
          repositories && repositories.length > 0
          ?
            (
              repositories.map((repo) => (
                <Box>
                  <Text fontSize='14px' fontWeight='800'>{ repo.name }</Text>
                  <Text fontSize='11px' fontWeight='400'>{ repo.description }</Text>
                  <Text fontSize='14px' fontWeight='400'>{ repo.language }</Text>
                  <Text fontSize='11px' fontWeight='400'>Criado em { repo.created_at ? FormatDate(repo.created_at) : '' }</Text>
                  <Text fontSize='11px' fontWeight='400'>Atualizado em { repo.updated_at ? FormatDate(repo.updated_at) : '' }</Text>
                </Box>
              ))
            )
          : ''
        }
      </Flex>
    </Box>
  );
}

export default RepositoriesCard;