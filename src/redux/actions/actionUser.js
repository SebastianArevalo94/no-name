import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {typesUser} from '../types/types';

export const saveUser = (user) => {
    return (dispatch) => {
      addDoc(collection(db, "users"), user)
        .then((resp) => {
          dispatch(addSync(user));
        })
        .catch((error) => {
          console.warn(error);
        });
    };
};

export const addSync = (user) => {
  return {
    type: typesUser.addUser,
    payload: user,
  };
};