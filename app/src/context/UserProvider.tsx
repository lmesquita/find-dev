import UserContext from './UserContext';
import { IProvider, IRecentUsers } from '../interfaces/IUser';
import { useState } from 'react';
import { FetchApi, FetchRepositories } from '../utils/FetchApi';

function UserProvider({ children }: IProvider) {
  const [user, setUser] = useState({});
  const [recents, setRecents] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [repositories, setRepositories] = useState([]);

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

  async function getRepositories(endpoint: string) {
    const result = await FetchRepositories(endpoint);
    setRepositories(result)
  }

  return (
    <UserContext.Provider value={{
      user,
      getUser,
      recents,
      getRecents,
      isSelected,
      getIsSelected,
      repositories,
      getRepositories
    }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;