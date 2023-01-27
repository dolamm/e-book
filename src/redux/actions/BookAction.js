import {Notification} from '../../components/notification/Notification';
import {
    GET_BOOKS,
    ADD_BOOK,
    GET_CATEGORIES,
    GET_RANDOM_BOOK
} from '../types/BookTypes.js'

import { app, auth, db } from '../../components/Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, limit } from "firebase/firestore";
import {useSelector} from 'react-redux';
const storage = getStorage(app);
const bookDB = "books";
const categoriesDB = "categories";

export const getBooks = () => {
    return async (dispatch) => {
        try {
            const q = query(collection(db, bookDB));
            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
                console.log(doc.data)
            })
            dispatch({
                type: GET_BOOKS,
                value: data
            })
            let randomNumber = 3;
            var temp = [];
            for(let i = 0; i < randomNumber; i++) {
                let random = Math.floor(Math.random() * data.length);
                temp.push(data[random]);
                data.splice(random, 1);
            }
            console.log(temp);
            dispatch({
                type: GET_RANDOM_BOOK,
                value: temp
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const q = query(collection(db, categoriesDB));
            const querySnapshot = await getDocs(q);
            let data = [];
            data.push("all");
            querySnapshot.forEach((doc) => {
                data.push(doc.id);
                console.log(doc.data)
            })
            dispatch({
                type: GET_CATEGORIES,
                value: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}