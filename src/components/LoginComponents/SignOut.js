import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import {Notification} from '../notification/Notification'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

export function SignOut(){
    function Logout () {
        signOut(auth).then(() => {
            // alert("You have successfully logged out!");
            Notification("You have successfully logged out!", "success");
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        }).catch((error) => {
            // console.log(error);
            Notification(error, "error");
        });
    }
    useEffect(() => {
        Logout();
    })
}