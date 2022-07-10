import { typesLogin } from "../types/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case typesLogin.login:
      return {
        id: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};