import React from "react";
import Item from "./BookListItem";
import "../../css/List.css"
import { useEffect, useState } from "react";
import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

const docRef = (db, "content", new Date().getTime().toString());

const addContent = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];
}