import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs
} from "firebase/firestore";

import { db } from "../config/firebase";

export const subscribeNewsletter = async (

    name:string,
    email:string

)=>{
    const q = query(
        collection(db, "newsletter"),
        where("email", "==", email)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        throw new Error("Email already exists");
    }

    await addDoc(

        collection(db,"newsletter"),

        {

            name,

            email,

            createdAt:serverTimestamp()

        }

    );

}