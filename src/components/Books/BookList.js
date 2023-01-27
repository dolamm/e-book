import React from "react";
import Item from "./BookListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import $ from 'jquery';
import "../../css/Category/CategoryBook.css";
import "../../css/Book/ListBook.css"
import {Notification} from '../notification/Notification.js';
import { getBooks } from "../../redux/actions/BookAction";

export  function BookList(){
    const {books} = useSelector((state) => state.BookReducer);
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.UserReducer);

    
    $(document).ready(async (e) => {
        // e.preventDefault();
        let title_popup = document.getElementsByClassName("title-popup");
        let hover = document.getElementsByClassName("Book-item");
        console.log(hover);
        for (let i = 0; i < hover.length; i++) {
            hover[i].addEventListener("mouseover", function () {
                title_popup[i].classList.toggle("display-title-popup");
            });
            hover[i].addEventListener("mouseleave", function () {
                title_popup[i].classList.toggle("display-title-popup");
            })
        }
    })
    return (
        <div>
            <div className="grid-listbook">
                { books.map((book) => {
                    return <Item item={book} />
                })}
            </div>
        </div>
    )
}
