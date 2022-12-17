import { onAuthStateChanged } from 'firebase/auth';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import "../../css/Detail/Comment.css"
import Book from '../../img/book1.png'
import { FaGreaterThan, FaPaperPlane } from "react-icons/fa";
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {Notification} from '../notification/Notification.js';
const storage = getStorage(app);

const docRef = doc(db, "comment", new Date().getTime().toString());

export function Comment({item}) {

    const comment = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;
        const { content } = e.target.elements;
        console.log(content.value)
        const commentAt = new Date();
        const time = commentAt.getDate() + "/" + (commentAt.getMonth()) + "/" + commentAt.getFullYear() 
        + " " + commentAt.getHours() + ":" + commentAt.getMinutes() + ":" + commentAt.getSeconds();
        console.log(time);
        await setDoc(docRef, {
            content: content.value,
            displayName: displayName,
            uid: uid,
            time: time,
            photoURL: photoURL,
            book_id: item.id,
        }).then(() => {
            console.log("Document written with ID: ", docRef.id);
            Notification("Comment thành công", "success");
            // alert("Comment thành công");
        });
    };

    const [comments, setComments] = useState([]);

    const getComments = async () => {
        try {
            const q = query(collection(db, "comment"), where("book_id", "==", item.id));
            const querySnapshot = await getDocs(q);
            let comments = [];
            querySnapshot.forEach((doc) => {
                comments.push(doc.data());
            }
            );
            setComments(comments);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getComments();
    }, [item]);

    console.log(comments);

    return (    
        <div className="Comment">
                <form className="post-comment" onSubmit={comment}>
                    <input type="text" name="content" className="comment-input" placeholder="write your comment"/>
                    <button id="submit-comment" type="submit">
                        <FaPaperPlane />
                    </button>
                </form>
            <div id="display-comment" className="comment">
                {comments&&comments.map((comment) => (
                    
                    <div className="comment-item">
                        <div className="comment-item-avatar">
                            <img src={comment.photoURL} alt="" />
                        </div>
                        <div className="comment-item-content">
                                <p className="user-name">{comment.displayName} <span className="comment-time">{comment.time}</span></p>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
)}