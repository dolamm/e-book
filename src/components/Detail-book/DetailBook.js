import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaPlus, FaMinus, FaCartPlus, FaMoneyBillWave, FaHeadphonesAlt, FaBook } from "react-icons/fa";

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
                <div className="Price">
                    <b>Author: </b>
                    Tên tác giả sách
                </div>
                <div className="Price">
                    <b>Bảo hiểm: </b>
                    Sách bản quyền 100%
                </div>
                <div className="Price">
                    <b>Select format: </b>
                </div>
                <div className="btn-format">
                        <button className="btn-audio">
                            <FaHeadphonesAlt />
                            <b className="sp-btn">Audio</b>
                        </button>
                        <button className="btn-audio btn-ebook">
                            <FaBook />
                            <b className="sp-btn">Ebook</b>
                        </button>
                </div>
                <br/>
                <div className="style-border">
                    
                </div>
                <div className="Buy">  
                    
                    <div className="all-btn">
                        <div>
                        <button className="btn-cart">
                            <FaCartPlus />
                            <b className="sp-btn">Add to cart</b>
                        </button>
                        <button className="btn-cart">
                            <FaMoneyBillWave />
                            <b className="sp-btn">Buy</b>
                        </button>
                        </div>
                    </div>  
                </div>
            </div>

        </div>
)}