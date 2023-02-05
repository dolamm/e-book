import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavHome } from './NavHome';
import { Footer } from './BookFooter';
import "@css/Layout/Notify.css";
import { BookList } from '../Books/BookList';
import { FaBookOpen } from "react-icons/fa";
import $ from 'jquery';
import { ImExit } from "react-icons/im";
import {Notification} from '../notification/Notification'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '@redux/actions/BookAction';

export function HomePage() {
    const {user} = useSelector((state) => state.UserReducer);
    const {books} = useSelector((state) => state.BookReducer);
    const {randomBook } = useSelector((state) => state.BookReducer);
    const dispatch = useDispatch();
    Notification(`Welcome ${user.displayName}!`, 'info');
    useEffect(() => {
        dispatch(getBooks());
    },[user.uid])
    console.log(randomBook);
    return (
        <div className='home'>
            <div className='notify-tab'>
                    <Link to={`/profile/${user.uid}`} className="avatar-img">
                        <img src={user.photoURL} className="avatar-circle" alt="Avatar" loading="lazy"/>
                    </Link>
                    <span>
                        <span className="avatar-name">
                            <span>{user.displayName}</span>
                            <span className="sign-out"><a href="/signout"><ImExit/></a></span>
                        </span>
                        <span className="notify-text">Welcome to our BookShop!! <FaBookOpen /></span>
                    </span>
            </div>
            <NavHome/>
            <BookList/>
            <Footer />
        </div>
    );
}