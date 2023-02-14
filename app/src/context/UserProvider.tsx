import UserContext from './UserContext';
import { IProvider, IRecentUsers } from '../interfaces/IUser';
import { useState } from 'react';
import { FetchApi } from '../utils/FetchApi';

function UserProvider({ children }: IProvider) {
  const [user, setUser] = useState({});
  const [recents, setRecents] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  async function getUser(username: string) {
    const result = await FetchApi(username);
    setUser(result);
  }

  function getRecents(user: never) {
    setRecents([...recents, user])
  }

  function getIsSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <UserContext.Provider value={{
      user,
      getUser,
      recents,
      getRecents,
      isSelected,
      getIsSelected
    }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;