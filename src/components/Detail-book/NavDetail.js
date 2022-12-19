import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import logo from '../../img/logo-white.png'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/NavDetail.css"

export function NavDetail({user_info}) {

    return (    
        <div className="nav">
            <img src={logo} alt="logo" className="logo" />
            <a className="sub-nav" href="/homepage">Home</a>
            <a className="sub-nav" href="/allcategory/all">Best sellers</a>
            <a className="sub-nav" href="/blogcontain">Blogs</a>
            <a className="sub-nav" href={`/pay/${user_info.uid}`}>Payment</a>
            <input className="sub-search" type="text" placeholder="Search"/>
        </div>
)}