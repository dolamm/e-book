import { app, auth, db } from '../../components/Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {Notification} from '../../components/notification/Notification';
import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
} from '../types/UserTypes.js';

export const UserLogin = (email, password) => {
    return async (dispatch) => {
        try {
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = auth.currentUser;
                console.log(user)
                dispatch({
                    type: USER_LOGIN,
                    value: user
                })
                Notification('You have successfully logged in!\nWelcome to Book Shop!', 'success')
                setTimeout(() => {
                    window.location.href = '/homepage'
                }, 2000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                Notification(errorMessage, 'error')
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const UserLogout = () => {
    return async (dispatch) => {
        try{
            signOut(auth).then(() => {
                // alert("You have successfully logged out!");
                Notification("You have successfully logged out!", "success");
                dispatch({
                    type: USER_LOGOUT,
                    value: null
                })
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }).catch((error) => {
                // console.log(error);
                Notification(error, "error");
            });
        }
        catch(error){
            console.log(error)
        }
    }
}