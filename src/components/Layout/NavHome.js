import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import bg from '../../img/bg-mountain.png'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Layout/NavHome.css"
import logo from '../../img/logo.png'
import { FaSearch, FaBars, FaShoppingCart } from "react-icons/fa";
import Book from "../../img/book1.png";

export function NavHome() {

    return (    
        <div className="navhome">
            <div className="navhome-bg">
                <img src={bg} alt="bg" className="bg-nav" />
                <img src={logo} alt="logo" className="logo-nav" />
                <div className="nav-content-book">
                    <h2>Tên sách</h2>
                    <h3>By <span>TênTác giả</span></h3>
                    <div className="nav-content-book-text">
                        Content sách  Book Store Concept designed by Kenneth Jensen. Connect with them on Dribbble; the global community for designers.
                    </div>
                </div>
                <div className="navhome-seemore">
                    <h4>See more</h4>
                </div>
                <input type="text" className="Search-nav" placeholder="Search" />
                <FaSearch className="i-search"/>
                <div className="vertical">
                    
                </div>
                <div className="navhome-category">
                    <h5>Category</h5>
                    <FaBars className="i-bars"/>
                </div>
                <img src={Book} alt="book" className="bg-book bg-book1"/>
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