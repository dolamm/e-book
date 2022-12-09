import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan } from "react-icons/fa";

export function Recommend(id) {


    return (    
        <div className="Recommend">
            <p className="Recommend-text">Recommend
            <div className="hr"></div>
            </p> 
            
            <p className="More">View More <FaGreaterThan /> <FaGreaterThan /></p>
            <div class="grid-container">
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
            </div>
            
        </div>
        
)}