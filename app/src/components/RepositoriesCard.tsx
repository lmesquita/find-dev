import { Box, Center, Flex, Link, Square, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { colors } from '../data/github-lang-colors';
import { FormatDate } from '../helpers/FormatDate';

function RepositoriesCard() {
  const { repositories } = useContext(UserContext);

  const findColor = (language: string) => {
    if (language === 'C#') {
      return colors['C Sharp'];
    }
    const verify = Object.keys(colors).find((color) => { return color === language });
    if (verify) {
      verify.toString();
      const color = (colors as unknown as Record<string, string>)[verify];
      return color;
    }
    return "#FFFFFF";
  };

  return (
    <Box mt='75px'>
      <Text
        fontSize='20px'
        fontWeight='800'
      >
        Repositórios
      </Text>
      <Flex wrap='wrap' w='787px' justifyContent='start' mt='24px'>
        {
          repositories && repositories.length > 0
          ?
            (
              repositories.map((repo) => (
                <Link href={ repo.html_url } isExternal key={ repo.id }>
                  <Box
                    w='170px'
                    h='159px'
                    bg='#FFFFFF'
                    rounded='md'
                    ml='26px'
                    mb='29px'
                    textAlign='center'
                    overflow='auto'
                    textOverflow='ellipsis'
                  >
                    <Text
                      fontSize='14px'
                      fontWeight='800'
                      mx='10px'
                      mt='16px'
                      lineHeight='16px'
                    >
                      { repo.name }
                    </Text>

                    <Text
                      fontSize='11px'
                      fontWeight='400'
                      my='11px'
                      lineHeight='12px'
                    >
                      { repo.description }
                    </Text>
                    <Center alignItems='baseline'>
                      {
                        Object.keys(colors).length > 0 && repo.language
                        ?
                          (<>
                            <Square
                              size='13px'
                              rounded='full'
                              bg={ repo.language ? findColor(repo.language) : '#FFFFFF' }
                              mr='10px'
                            />
                            <Text fontSize='14px' fontWeight='400' mb='11px' lineHeight='16px'>
                              { repo.language }
                            </Text>
                          </>)
                        : ''
                      }
                    </Center>
                    <Text
                      fontSize='11px'
                      fontWeight='400'
                      lineHeight='12px'
                    >
                      Criado em { repo.created_at ? FormatDate(repo.created_at) : '' }
                    </Text>
                    <Text
                      fontSize='11px'
                      fontWeight='400'
                      mb='11px'
                      lineHeight='12px'
                    >
                      Atualizado em { repo.updated_at ? FormatDate(repo.updated_at) : '' }
                    </Text>
                  </Box>
                </Link>
              ))
            )
          : ''
        }
      </Flex>
    </Box>
  );
}

export default RepositoriesCard;