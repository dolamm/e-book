import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavHome } from './NavHome';
import { Footer } from './BookFooter';
import "../../css/Layout/Notify.css";
import { BookList } from '../Books/BookList';
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function HomePage({user_info}) {

    const userAvatar = user_info.photoURL;
    const userName = user_info.displayName;
    const user_id = user_info.uid; 

    return (
        <div className='home'>
            <div className='notify-tab'>
                    <Link to={`/profile/${user_id}`} className="avatar-img">
                        <img src={userAvatar} className="rounded-circle" height="40" alt="Black and White Portrait of a Man" loading="lazy"/>
                    </Link>
                    <span>
                        <span className="avatar-name">{userName}</span>
                        <span className="notify-text">Đã có 1 cuốn sách mới được thêm vào thư viện</span>
                    </span>
            </div>
            <NavHome uid={user_id}/>
            <BookList />
            <Footer />
        </div>
    );
}