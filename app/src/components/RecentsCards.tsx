import { Box, Divider, Text } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { IUser } from "../interfaces/IUser";
import UserCard from "./UserCard";

function RecentsCards() {
  const {
    recents
  } = useContext(UserContext);

  return (
    <Box my='51px'>
      {
        recents && recents?.length > 0
        ?
          (<>
            <Divider />
            <Text
              fontSize='14px'
              fontWeight='800'
              color='#1C255C'
              mt='12px'
              ml='22px'
            >
              Recentes
            </Text>
            {
              recents.map((user: IUser) => (
                <Box key={ user.id}>
                  <UserCard user={ user } isRecents={ true } />
                </Box>
              ))
            }
          </>)
        : ''
      }

    </Box>
  );
}

export default RecentsCards;