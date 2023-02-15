import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { FormatDate } from '../helpers/FormatDate';

function ProfileCard() {
  const { user } = useContext(UserContext);

  return (    
    <Box w='787px' h='366px' mt='38px'>
      <Text fontSize='20px' fontWeight='800'>Detalhes do Perfil</Text>
        {
          user
          ?
            (
              <Link href={ user.html_url } isExternal>
                <Box w='767px' h='319px' bg='#FFFFFF' rounded='md' mt='24px' ml='20px'>
                  <Flex justify='space-around'>
                    <Image
                      borderRadius='full'
                      boxSize='196px'
                      src={ user.avatar_url }
                      alt='Profile picture'
                      mt='60px'
                      ml='76px'
                      mr='41px'
                    />
                    <Flex wrap='wrap'>
                      <Box mt='50px'>
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
                      <Box ml='50px' mt='50px'>
                        <Text
                          fontSize='14px'
                          fontWeight='400'
                          color='#000000'
                          opacity='50%'
                        >
                          Ingressou em { user.created_at ? FormatDate(user.created_at) : '' }
                        </Text>
                      </Box>

                      <Box w='377px' mb='30px' mt='30px'>
                        <Text
                          fontSize='14px'
                          fontWeight='400'
                          color='#000000'
                          opacity='50%'
                        >
                          { user.bio }
                        </Text>
                      </Box>
                      <Flex
                        w='377px'
                        h='87px'
                        bg='#F5F5F5'
                        rounded='md'
                        justify='space-around'
                        align='center'
                        textAlign='center'
                      >
                        <Box>
                          <Text
                            fontSize='14px'
                            fontWeight='400'
                            color='#1C255C'
                          >
                            Repositórios
                          </Text>
                          <Text
                            fontSize='16px'
                            fontWeight='800'
                            color='#1C255C'
                          >
                            { user.public_repos }
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontSize='14px'
                            fontWeight='400'
                            color='#1C255C'
                          >
                            Seguidores
                          </Text>
                          <Text
                            fontSize='16px'
                            fontWeight='800'
                            color='#1C255C'
                          >
                            { user.followers }
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontSize='14px'
                            fontWeight='400'
                            color='#1C255C'
                          >
                            Seguindo
                          </Text>
                          <Text
                            fontSize='16px'
                            fontWeight='800'
                            color='#1C255C'
                          >
                            { user.following }
                          </Text>
                        </Box>                    
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Link>
            )
          : ''
        }
    </Box>
  );
}

export default ProfileCard;