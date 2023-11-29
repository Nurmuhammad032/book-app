import { IBook } from "../types/book";
import { IUser } from "../types/userInfo";

// Application State
export interface IState {
  isAuthenticated: boolean;
  userInfo: IUser | null;
  books: IBook[] | null;
}

// Actions
type CheckAuth = { type: "check_auth"; payload: boolean };
type AddUserInfo = { type: "add_user_info"; user: IUser };
type AddBooks = { type: "add_books"; book: IBook[] };

export type IActions = CheckAuth | AddUserInfo | AddBooks;
