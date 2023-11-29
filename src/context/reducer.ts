import { Reducer } from "react";
import { IActions, IState } from "./types";

const reducer: Reducer<IState, IActions> = (state, action) => {
  switch (action.type) {
    case "check_auth":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case "add_user_info":
      return {
        ...state,
        userInfo: action.user,
      };
    case "add_books":
      return {
        ...state,
        books: action.book,
      };
    default:
      return state;
  }
};

export default reducer;
