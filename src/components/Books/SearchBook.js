import React from "react";
import Item from "./BookListItem";
import "../../css/List.css"
import "../../css/Search.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

async function searchBook(searchText) {
    try {
        const q = query(collection(db, "books"), where("keywords", "array-contains", searchText));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        })
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function SearchBook() {
    const [books, setBooks] = useState([]);

    function search() {
        const searchText = document.getElementById('searchText').value;
        searchBook(searchText).then((data) => {
            setBooks(data);
        })
    }

    return (
        <div>
            <div class="col-md-8">
                <div class="search">
                <i class="fa fa-search"></i>
                <input type="text" id="searchText" class="form-control" placeholder="Let's search for some interesting things."/>
                <button class="btn btn-primary" onClick={search}>Search</button>
                </div>
            </div>
            <div className="list">
                {books.map((book) => {
                    return (
                        <Item item={book} />
                    )
                })}
            </div>
        </div>
    )
}