import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaPlus, FaMinus, FaCartPlus, FaMoneyBillWave } from "react-icons/fa";

export function DetailBook() {
    return (    
        <div className="Detail">
            <img src={Book} alt="Book" className="Book-img" />
            <div className="right">
                <h1 className="Book-title">The Book Title</h1>
                <div className="Category">
                    <b>Category: </b>
                    tên Category
                </div>
                <div className="Price">
                    <b>Price: </b>
                    Giá tiền
                </div>
                <div className="Description">
                    <b>Description: </b>
                    Mô tả sách <br/>
                    Mô tả sách <br/>
                    Mô tả sách <br/>
                    Mô tả sách 
                </div>
                <br/>
                <hr className="style"/>
                <div className="Buy">    
                    <p className="quantity-text">Quantity</p> 
                    <div className="all-btn">
                        <div className="quantity">
                        <FaMinus />
                        <b>1</b>
                        <FaPlus />
                        </div>
                        <button className="btn-cart">
                            <FaCartPlus />
                            <b>Add to cart</b>
                        </button>
                        <button className="btn-cart">
                            <FaMoneyBillWave />
                            <b>Buy</b>
                        </button>
                    </div>  
                </div>
            </div>

        </div>
)}