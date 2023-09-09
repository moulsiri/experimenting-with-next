import IUser from "./IUser";

export default interface IUserResponse {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user: IUser | null;
}
