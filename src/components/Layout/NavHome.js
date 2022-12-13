import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import bg from '../../img/bg-mountain.png'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, limit } from "firebase/firestore";
import {app, auth, db } from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Layout/NavHome.css"
import logo from '../../img/logo.png'
import { FaSearch, FaBars, FaShoppingCart } from "react-icons/fa";
import Book from "../../img/book1.png";

const get3Book = async () => {
    try {
        const q = query(collection(db, "books"),limit(1));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data)
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function NavHome() {

    const [books, setBooks] = useState('');

    useEffect(() => {
        get3Book().then((data) => {
            setBooks(data[0]);
            console.log(data);
        })
    }, [])

    console.log(books);

    return (    
        <div className="navhome">
            <div className="navhome-bg">
                <img src={bg} alt="bg" className="bg-nav" />
                <img src={logo} alt="logo" className="logo-nav" />
                <div className="nav-content-book">
                    <h2>{books.title}</h2>
                    <h3>By <span>{books.author}</span></h3>
                    <div className="nav-content-book-text">
                        {books.description}
                    </div>
                </div>
                <Link to={`/book/${books.id}`} className="navhome-seemore">
                    <h4>See more</h4>
                </Link>
                <input type="text" className="Search-nav" placeholder="Search" />
                <FaSearch className="i-search"/>
                <div className="vertical">
                    
                </div>
                <div className="navhome-category">
                    <h5>Category</h5>
                    <FaBars className="i-bars"/>
                </div>
                <img src={books.image} alt="book" className="bg-book bg-book1"/>
                <img src={Book} alt="book" className="bg-book bg-book2"/>
                <img src={Book} alt="book" className="bg-book bg-book3"/>
                <FaShoppingCart className="nav-cart"/>
            </div>
            <div className="navbar-home">
                <a className="sub-navbar" href="/home">Home</a>
                <a className="sub-navbar" href="/category">Best sellers</a>
                <a className="sub-navbar" href="/blog">Blogs</a>
                <a className="sub-navbar" href="/">ChatRoom</a>
            </div>
        </div>
)}