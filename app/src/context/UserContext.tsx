import { createContext } from 'react';
import { IContext } from '../interfaces/IUser';

const UserContext = createContext<IContext>({} as IContext);

export default UserContext;