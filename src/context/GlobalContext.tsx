import { Dispatch, useEffect, useReducer, useState } from "react";
import { ReactNode, createContext } from "react";
import reducer from "./reducer";
import { IActions, IState } from "./types";
import { apiFetch } from "../utils/axiosConfig";
import { IUser } from "../types/userInfo";
import { IBook } from "../types/book";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IResponse } from "../types/response";
import Loader from "../components/Loader";

export interface ContextProps extends IState {
  dispatch: Dispatch<IActions>;
  getAllBooks: () => Promise<void>;
}

const Context = createContext<ContextProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isPending, setIsPending] = useState(true);
  const initialState: IState = {
    isAuthenticated: false,
    userInfo: null,
    books: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserInfo = async () => {
    try {
      const res = await apiFetch<IResponse<IUser>>("/myself");
      if (res.data.isOk) {
        dispatch({ type: "check_auth", payload: true });
        dispatch({ type: "add_user_info", user: res.data.data });
      }
    } catch {
      dispatch({ type: "check_auth", payload: false });
    } finally {
      setIsPending(false);
    }
  };

  const getAllBooks = async () => {
    try {
      const res = await apiFetch<IResponse<IBook[]>>("/books");

      dispatch({ type: "add_books", book: res.data.data });
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (isPending) return <Loader />;

  return (
    <Context.Provider value={{ getAllBooks, dispatch, ...state }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
