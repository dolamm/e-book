import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import logo from '../../img/logo.png'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/NavDetail.css"

export function NavDetail() {

    return (    
        <div className="nav">
            <img src={logo} alt="logo" className="logo" />
            <a className="sub-nav" href="/home">Home</a>
            <a className="sub-nav" href="/category">Best sellers</a>
            <a className="sub-nav" href="/blog">Blogs</a>
            <a className="sub-nav" href="/">ChatRoom</a>
            <input className="sub-search" type="text" placeholder="Search"/>
        </div>
)}