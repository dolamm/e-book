import "../../css/Payment/Pay.css";
import Book from '../../img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '../../img/logo.png'
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Footer } from '../Layout/BookFooter';
import { NavDetail } from '../Detail-book/NavDetail';
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";

const storage = getStorage(app);

const docRef = doc(db, "blogs", new Date().getTime().toString());

const postBlog = async (title, content, image, uid) => {
    try {
        await setDoc(docRef, {
            title: title,
            content: content,
            image: image,
            user_id: uid,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export function Blog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const { uid } = useParams();
    console.log(uid);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = uploadBytes(ref(storage, `images/${image.name}`), image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function ...
            },
            (error) => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                });
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postBlog(title, content, url, uid);
        setTitle("");
        setContent("");
        setImage(null);
        setUrl("");
    };

    return (
        <div></div>
    )
}