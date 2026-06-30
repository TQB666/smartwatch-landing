import {
    collection,
    addDoc,
    serverTimestamp
} from "firebase/firestore";

import { db } from "../config/firebase";

export const subscribeNewsletter = async (

    name:string,
    email:string

)=>{

    await addDoc(

        collection(db,"newsletter"),

        {

            name,

            email,

            createdAt:serverTimestamp()

        }

    );

}