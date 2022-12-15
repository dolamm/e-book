import { onAuthStateChanged } from 'firebase/auth';
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan } from "react-icons/fa";
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

const docRef = doc(db, "comment", new Date().getTime().toString());

export function Comment({item}) {

    const comment = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        const { content } = e.target.elements;
        const contentValue = content.value;
        const time = serverTimestamp();
        const docRef = doc(db, "comment", time);
        await setDoc(docRef, {
            content: contentValue,
            uid: uid,
            time: time,
            photoURL: photoURL,
            book_id: item.id,
        });
        alert("Comment thành công");
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
            <div className="post-comment">
                <form onSubmit={comment}>
                    <input type="text" name="content" placeholder="Comment" />
                    <button type="submit">Comment</button>
                </form>
            </div>
            <div className="comment">
                {comments.map((comment) => (
                    <div className="comment-item">
                        <div className="comment-item-avatar">
                            <img src={comment.photoURL} alt="" />
                        </div>
                        <div className="comment-item-content">
                            <p>{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="Recommend-text">Comment
            <div className="hr"></div>
            </p> 
            avatar          Tên
            Cmnt của người trên

            ô cmt

            
            
            
        </div>
        
)}