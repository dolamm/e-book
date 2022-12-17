import React from "react";
import Item from "./BookListItem";
import { useEffect, useState } from "react";
import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';
import $ from 'jquery';
import "../../css/Category/CategoryBook.css";
import "../../css/Book/ListBook.css"

const docRef = (db, "bookcase", new Date().getTime().toString());

const getBookList = async () => {
    try {
        const q = query(collection(db, "books"));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data)
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export  function BookList({user_info}){
    const [books, setBooks] = useState([]);
    const [userName, setUserName] = useState(user_info.displayName);
    async function buyBook(book) {
        // await onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         const name = user.displayName;
        //         setUserName(name);
        //     }
        //     else {
        //         console.log('No user logged in');
        //     }
        // });

        const data = {
            title: book,
            userName: userName
        }
        setDoc(docRef, data).then(() => {
            alert('Book added successfully!');
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    }

    useEffect(() => {
        getBookList().then((data) => {
            setBooks(data);
            console.log(data);
        })
    }, [user_info])
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
                { books && books.map((book) => {
                    return <Item item={book} />
                })}
            </div>
        </div>
    )
}
