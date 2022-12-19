import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import bg0 from '../../img/bg0.png'
import bg1 from '../../img/bg1.jpg'
import bg2 from '../../img/bg4.jpg'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, limit } from "firebase/firestore";
import {app, auth, db } from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Layout/NavHome.css"
import logo from '../../img/logo-white.png'
import { FaSearch, FaBars, FaShoppingCart } from "react-icons/fa";
import Book from "../../img/book1.png";
import $ from 'jquery';

var background = [bg0, 
    bg1,
    bg2];

const get3Book = async () => {
    try {
        const q = query(collection(db, "books"),limit(3));
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

    const getCategories = async () => {
        const category = query(collection(db, "categories"));
        const querySnapshot = await getDocs(category);
        let data = [];
        data.push("all");
        querySnapshot.forEach((doc, index) => {
            data.push(doc.id);
            console.log(doc.id)
        })
        return data;
    }

export function NavHome({uid}) {
    const [categories, setCategories] = useState([]);
    const [books, setBooks] = useState([]);
    useEffect(() => {
            get3Book().then((data) => {
                setBooks(data);
                console.log(data);
            })
            getCategories().then((data) => {
                setCategories(data);
                console.log(data);
            })
    }, [])
    console.log(books);
    $(document).ready(function () {
        let changeBG = document.getElementsByClassName("bg-book");
        let bgNav = document.getElementById("nav-background");
        let bookTitle = document.getElementById("book-title");
        let bookAuthor = document.getElementById("book-author");
        let bookContent = document.getElementById("book-content");
        let seeMore = document.getElementById("see-more-detail");
        for(let i = 0; i < changeBG.length; i++) {
            changeBG[i].addEventListener("click", function() {
                bgNav.src = background[i];
                bookTitle.innerHTML = books[i].title;
                bookAuthor.innerHTML = books[i].author;
                bookContent.innerHTML = books[i].description.substr(0,120)+"...";
                seeMore.href = `/book/${books[i].id}`;
            })
        }
    })
    return books.length === 0 ? (
        <div id="loading" className="loading-modal"></div>
      ) : (    
        <div className="navhome">
            <div className="navhome-bg">
                <img src={bg2} alt="bg" className="bg-nav" id="nav-background" />
                <img src={logo} alt="logo" className="logo-nav" />
                <div className="nav-content-book">
                    <h2>
                        <marquee id="book-title">{books[0].title}</marquee>
                    </h2>
                    <h3>By <span id="book-author">{books[0].author}</span></h3>
                    <div id="book-content" className="nav-content-book-text">
                            {books[0].description.substr(0,120)+"..."}
                    </div>
                </div>
                <div className="navhome-seemore">
                    <h4><a id="see-more-detail" href={`/book/${books[0].id}`}>See more</a></h4>
                </div>
                <input type="text" className="Search-nav" placeholder="Search" />
                <FaSearch className="i-search"/>
                <div className="vertical">
                    
                </div>
                <div id="category-menu" className="navhome-category">
                    <h5>Category</h5>
                    <FaBars className="i-bars"/>
                    <div id="category-list" className="navhome-category-list">
                        {categories.map((category, index) => (
                            <p><a className="category-list-item" href={`/allcategory/${category}`} key={index}>{category}</a></p>
                        ))}
                    </div>
                </div>
                <img src={books[0].image} alt="book" className="bg-book bg-book1"/>
                <img src={books[1].image} alt="book" className="bg-book bg-book2"/>
                <img src={books[2].image} alt="book" className="bg-book bg-book3"/>
                <Link to={`/pay/${uid}`} className="navhome-cart">
                    <FaShoppingCart className="nav-cart"/>
                </Link>
            </div>
            <div className="navbar-home">
                <a className="sub-navbar" href="/homepage">Home</a>
                <a className="sub-navbar" href="/category">Best sellers</a>
                <a className="sub-navbar" href="/blog">Blogs</a>
                <a className="sub-navbar" href="/payment">Payment</a>
            </div>
        </div>
    )
}
