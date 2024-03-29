import "@css/Payment/Pay.css";
import Book from '@img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '@img/logo.png'
import {app, auth, db} from '~/Firebase';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Footer } from '~/Layout/BookFooter';
import { NavDetail } from '~/Detail-book/NavDetail';
import {Notification} from '~/notification/Notification.js';
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'

const storage = getStorage(app);


const postBlog = () => {
    const doc_id = new Date().getTime().toString();
    const docRef = doc(db, "blogs", doc_id);
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = document.getElementById("customFile").files[0];
    const uid = auth.currentUser.uid;
    const displayName = auth.currentUser.displayName;
    const storageRef = ref(storage, `blogs/${image.name}`);
    const createAt = new Date();
    const time = createAt.getDate() + " Tháng" + createAt.getMonth() + ", " + createAt.getFullYear() 
    + " " + createAt.getHours() + ":" + createAt.getMinutes()
    uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setDoc(docRef, {
                id : doc_id,
                displayName: displayName,
                title: title,
                content: content,
                image: url,
                uid: uid,
                time: time
            });
        });
        // alert("Post thành công");
        Notification("Post thành công", "success");
    }).catch((error) => {
        console.log(error);
    });
};

export function CreateBlog() {
    return (
        <div className="CreateBlog">
            <NavDetail/>
            <div className="CreateBlog-Container">
                <div className="name-category-text">
                    <h1>Create Blog</h1>
                </div>
                <div className="CreateBlog-Content">
                    <div className="CreateBlog-Content-Title">
                        <p>Title</p>
                        <input type="text" id="title" placeholder="Title" />
                    </div>
                    <div className="CreateBlog-Content-Content">
                        <p>Content</p>
                        <textarea id="content" rows="4" cols="120" placeholder="Content"></textarea>
                    </div>
                    <label class="form-label" for="customFile">Add cover image</label>
                    <input type="file" class="form-control" id="customFile" />
                    <div className="CreateBlog-Content-Button post-blog">
                        <button onClick={postBlog} type="button" class="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}