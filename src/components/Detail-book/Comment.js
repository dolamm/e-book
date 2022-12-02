import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan } from "react-icons/fa";

export function Comment() {
    return (    
        <div className="Comment">
            <p className="Recommend-text">Comment
            <div className="hr"></div>
            </p> 
            avatar          Tên
            Cmnt của người trên

            ô cmt

            
            
            
        </div>
        
)}