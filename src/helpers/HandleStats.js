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

import { db } from "../firebase/firebaseConfig";

export const AddStat = async (id, user) => {
  const colleccionTraer = collection(db, "users");
  const q = query(colleccionTraer, where("id", "==", id));
  const traerDatosQ = await getDocs(q);
  let id_firestore;
  traerDatosQ.forEach(async (docu) => {
    id_firestore = docu.id;
  });
  const documenRef = doc(db, "users", id_firestore);
  await updateDoc(documenRef, user)
    .then((resp) => {
      console.log("editado");
    })
    .catch((err) => console.log(err));
};
