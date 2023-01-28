
import { useState, useEffect } from 'react'
import logo from '../../img/logo-white.png'
import "../../css/Detail/NavDetail.css"
import { useSelector } from 'react-redux'
export function NavDetail() {
    const {user} = useSelector((state) => state.UserReducer);
    return (    
        <div className="nav">
            <img src={logo} alt="logo" className="logo" />
            <a className="sub-nav" href="/homepage">Home</a>
            <a className="sub-nav" href="/allcategory">Best sellers</a>
            <a className="sub-nav" href="/blogcontain">Blogs</a>
            <a className="sub-nav" href={`/pay/${user.uid}`}>Payment</a>
            <input className="sub-search" type="text" placeholder="Search"/>
        </div>
)}