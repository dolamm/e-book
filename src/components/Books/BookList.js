import React from "react";
import Item from "./BookListItem";
import "../../css/List.css"
import { useEffect, useState } from "react";
import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

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

export function BookList(){
    const [books, setBooks] = useState([]);
    const [userName, setUserName] = useState('');

    function buyBook(book) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const name = user.displayName;
                setUserName(name);
            }
            else {
                console.log('No user logged in');
            }
        });

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
        })
    }, [])

    return (
        <div>
            <div className="border1">
                <strong> Book List </strong>
            </div>
            <div className="list">
                        { books && books.map((book) => {
                            return <Item item={book} />
                        })}
            </div>
        </div>
    )
}
