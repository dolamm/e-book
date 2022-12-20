import { NavDetail } from '../Detail-book/NavDetail';
import {app, auth, db} from '../Firebase';
import { Footer } from '../Layout/BookFooter';
import { FaLongArrowAltRight,FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../css/Blog/DetailBlog.css"
import "../../css/global.css"
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDoc, deleteDoc } from "firebase/firestore";
import {Notification} from '../notification/Notification.js';

const getBlog = async (id) => {
    const docRef = doc(db, "blogs", id);
    console.log(id)
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

const deleteBlog = async (id, user_id) => {
    if (auth.currentUser.uid === user_id) {
        const docRef = doc(db, "blogs", id);
        await deleteDoc(docRef).then(() => {
            Notification("Xóa thành công", "success");
            window.location.href = "/blog";
        });
    } else {
        Notification("Bạn không có quyền xóa bài viết này", "error");
    }
};


export function DetailBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        getBlog(id).then((data) => {
            setBlog(data);
        });
    },[]);
    return blog==null? (
        <div id="loading" className="loading-modal"></div>
    ) : (
        <div className='home'>
            <NavDetail user_info={auth.currentUser}/>
            <div className="content">
                <div className="DetailBlog-path">
                    <span className="path-text"><a href="/homepage">Home</a></span>
                    <FaLongArrowAltRight />
                    <span className="path-text"><a href="/blogcontain">Blog</a></span>
                    <FaLongArrowAltRight />
                    <span className="path-text">{blog.title}</span>
                </div>
                <div className="DetailBlog-bg">
                    <img className="DetailBlog-img" src={blog.image} alt="Book"></img>
                </div>
                <div className="DetailBlog-Content-index">
                    <div className="DetailBlog-Content">
                        <span className="Blog-date">{blog.time} - </span>      
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