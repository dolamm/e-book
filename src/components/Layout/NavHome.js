import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from "../../redux/actions/BookAction";
import bg0 from '../../img/bg0.png'
import bg1 from '../../img/bg1.jpg'
import bg2 from '../../img/bg4.jpg'
import { Link } from "react-router-dom";
import "../../css/Layout/NavHome.css"
import logo from '../../img/logo-white.png'
import { FaSearch, FaBars, FaShoppingCart } from "react-icons/fa";
import $ from 'jquery';

var background = [bg0, 
    bg1,
    bg2];

export function NavHome() {
    const {categories} = useSelector((state) => state.BookReducer);
    const dispatch = useDispatch();
    const {randomBook} = useSelector((state) => state.BookReducer);
    const {user} = useSelector((state) => state.UserReducer);
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    console.log(randomBook);
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
                bookTitle.innerHTML = randomBook[i].title;
                bookAuthor.innerHTML = randomBook[i].author;
                bookContent.innerHTML = randomBook[i].description.substr(0,120)+"...";
                seeMore.href = `/book/${randomBook[i].id}`;
            })
        }
    })
    return randomBook.length ==0 ? (
        <div id="loading" className="loading-modal"></div>
      ) : (    
        <div className="navhome">
            <div className="navhome-bg">
                <img src={bg2} alt="bg" className="bg-nav" id="nav-background" />
                <img src={logo} alt="logo" className="logo-nav" />
                <div className="nav-content-book">
                    <h2>
                        <marquee id="book-title">{randomBook[0].title}</marquee>
                    </h2>
                    <h3>By <span id="book-author">{randomBook[0].author}</span></h3>
                    <div id="book-content" className="nav-content-book-text">
                            {randomBook[0].description.substr(0,120)+"..."}
                    </div>
                </div>
                <div className="navhome-seemore">
                    <h4><a id="see-more-detail" href={`/book/${randomBook[0].id}`}>See more</a></h4>
                </div>
                <input type="text" className="Search-nav" placeholder="Search" />
                <FaSearch className="i-search"/>
                <div className="vertical">
                    
                </div>
                <div id="category-menu" className="navhome-category">
                    <h5>Category</h5>
                    <FaBars className="i-bars"/>
                    <div id="category-list" className="navhome-category-list">
                        {categories&&categories.map((category, index) => (
                            <p><a className="category-list-item" href={`/allcategory/${category}`} key={index}>{category}</a></p>
                        ))}
                    </div>
                </div>
                <img src={randomBook[0].image} alt="book" className="bg-book bg-book1"/>
                <img src={randomBook[1].image} alt="book" className="bg-book bg-book2"/>
                <img src={randomBook[2].image} alt="book" className="bg-book bg-book3"/>
                <Link to={`/pay/${user.uid}`} className="navhome-cart">
                    <FaShoppingCart className="nav-cart"/>
                </Link>
            </div>
            <div className="navbar-home">
                <a className="sub-navbar" href="/homepage">Home</a>
                <a className="sub-navbar" href="/allcategory/all">Best sellers</a>
                <a className="sub-navbar" href="/blogcontain">Blogs</a>
                <a className="sub-navbar" href={`/pay/${user.uid}`}>Payment</a>
                <a className="sub-navbar" href="/addbook">Add your book</a>
            </div>
        </div>
    )
}
