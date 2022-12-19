import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavHome } from './NavHome';
import { Footer } from './BookFooter';
import "../../css/Layout/Notify.css";
import { BookList } from '../Books/BookList';
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaBookOpen } from "react-icons/fa";
import { Notificaton } from '../notification/Notification.js';
import $ from 'jquery';
import { ImExit } from "react-icons/im";
import {Notification} from '../notification/Notification'
export function HomePage({user_info}) {
    const userAvatar = user_info.photoURL;
    const userName = user_info.displayName;
    const user_id = user_info.uid;
    if(user_id!=null){
        Notification(`Welcome ${userName}!`, 'info');
    }
    return (
        <div className='home'>
            <div className='notify-tab'>
                    <Link to={`/profile/${user_id}`} className="avatar-img">
                        <img src={userAvatar} className="avatar-circle" alt="Avatar" loading="lazy"/>
                    </Link>
                    <span>
                        <span className="avatar-name">
                            <span>{userName}</span>
                            <span className="sign-out"><a href="/signout"><ImExit/></a></span>
                        </span>
                        <span className="notify-text">Welcome to our BookShop!! <FaBookOpen /></span>
                    </span>
            </div>
            <NavHome uid={user_id}/>
            <BookList user_info={user_info} />
            <Footer />
        </div>
    );
}