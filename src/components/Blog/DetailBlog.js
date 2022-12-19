import { NavDetail } from '../Detail-book/NavDetail';
import {app, auth, db} from '../Firebase';
import { Footer } from '../Layout/BookFooter';
import { FaLongArrowAltRight,FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../css/Blog/DetailBlog.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDoc } from "firebase/firestore";

const getBlog = async (id) => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
};

export function DetailBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(getBlog(id));
    return (
        <div className='home'>
            <NavDetail user_info={auth.currentUser}/>
            <div className="content">
                <div className="DetailBlog-path">
                    <span className="path-text">Home</span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Blog </span>
                    <FaLongArrowAltRight />
                    <span className="path-text">{blog.title}</span>
                </div>
                <div className="DetailBlog-bg">
                    <img className="DetailBlog-img" src={blog.image} alt="Book"></img>
                </div>
                <div className="DetailBlog-Content-index">
                    <div className="DetailBlog-Content">
                        <span className="Blog-date">{blog.time} /</span>      
                        <span className="Blog-Author">By {blog.author}</span> <br/>                    
                        <a className="Blog-Title" href="/">{blog.title}</a>
                        <p className="Blog-Content">
                            {blog.content}
                    </p>
                    </div>
                </div>
                <button className="btn-create-blog btn-edit-blog">
                    <b className="btn-create">Edit Blog</b>
                    <FaEdit />
                </button>
                <button className="btn-create-blog btn-remove-blog">
                    <b className="btn-create">Remove Blog</b>
                    <FaTrashAlt />
                </button>
            </div>
            <Footer />
        </div>
    );
}