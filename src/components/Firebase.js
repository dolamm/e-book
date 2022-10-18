import { initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
    projectId: "e-book-d712c",
    apiKey: "AIzaSyAtWIMLfTLSWFhrncWCh2zrayY57RVDjVU",
    storageBucket: 'gs://e-book-d712c.appspot.com',
    databaseURL: "gs://e-book-d712c.appspot.com",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);