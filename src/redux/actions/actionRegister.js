import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesRegister } from "../types/types";
import { saveUser } from "./actionUser";
import { useDispatch } from "react-redux";
//   import Swal from 'sweetalert2';

export const registerAsync = (name, email, password, img) => {
  const firestoreAutoId = () => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let autoId = "";

    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return autoId;
  };
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, img)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img,
        });
        dispatch(registerSync(name, email, password, img));
        const userObj = {
          id: firestoreAutoId(),
          name: name,
          email: email,
          password: password,
          img: img,
          stars: 0,
          correctAnswers: 0,
          incorrectAnswers: 0,
          languageStats: {
            English: 0
          }
        }
        addDoc(collection(db, "users"), userObj)
        .then((resp) => {
          localStorage.setItem('user', JSON.stringify(userObj))
        })
        .catch((error) => {
          console.warn(error);
        });
        //   Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: `Bienvenido ${name}!`,
        //     showConfirmButton: true
        //   })
      })
      .catch((error) => {
        console.warn(error, "No autorizado");
      });
  };
};

export const registerSync = (name, email, password, img) => {
  return {
    type: typesRegister.register,
    payload: {
      name,
      email,
      password,
      img
    },
  };
};
