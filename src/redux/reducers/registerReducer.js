import { typesRegister } from "../types/types";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.register:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        img: action.payload.img
      };

    default:
      return state;
  }
};