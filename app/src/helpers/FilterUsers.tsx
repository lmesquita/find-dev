import { IUser } from "../interfaces/IUser";

function FilterUsers(array: IUser[], newUser: IUser) {
  const findUser = array.find((user) => user.id === newUser.id);
  return findUser;
}

export default FilterUsers;