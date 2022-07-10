import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { typesLogin } from "../types/types";
import {addSync} from "./actionUser";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const loginAsync = (email, password) => {
    const getUser = async (email) => {
      const coleccionTraer = collection(db, "users");
      const q = query(
        coleccionTraer,
        where("email", "==", email)
      );
      const datosPropertie = await getDocs(q);
      let user = {};
      datosPropertie.forEach((docu) => {
        user = docu.data();
      });
      localStorage.setItem('user', JSON.stringify(user))
  }
  return (dispatch) => { 
    const auth = getAuth(); 
    signInWithEmailAndPassword(auth, email, password) 
      .then(({ user }) => {
        dispatch(loginSync(email))
        const userObj = {
          name: user.displayName,
          email: email,
          password: password,
          img: user.photoURL
        }
        getUser(email)
        dispatch(addSync(userObj))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginSync = (email, password) => {
  return {
    type: typesLogin.login,
    payload: {
      email
    },
  };
};

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutSync());
        localStorage.removeItem('user')
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const logoutSync = () => {
  return {
    type: typesLogin.logout,
  };
};
