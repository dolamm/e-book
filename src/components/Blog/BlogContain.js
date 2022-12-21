import {app, auth, db} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Blog/Blog.css"
import "../../css/Category/CategoryBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { NavDetail } from '../Detail-book/NavDetail';
import { useState, useEffect } from "react";
import {ShortBlog} from './ShortBlog';
const getALlBlogs = async () => {
    const q = query(collection(db, "blogs"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
};

export function BlogContain() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getALlBlogs().then((data) => {
            setBlogs(data);
        });
    }, []);
    return (   
    <div>
        <NavDetail user_info={auth.currentUser}/>
        <div className="name-category">
            <p className="name-category-text">
                Blog
            </p>
            <div className="DetailBlog-path">
                    <span className="path-text">Home</span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Blog </span>
                </div>
            <div className="Blog-contain">
                <div className="Blog-left">
                    {
                        blogs&&blogs.map((blog_item) => (
                            <ShortBlog item={blog_item} />
                        ))
                    }
                </div>
                <div className="Blog-right">
                    <div className="Create-Blog">
                        <p>Create Blogs</p>
                        <button className="btn-create-blog">
                            <Link to={`/createblog`} className="btn-create"> <b>Create</b>
                            <FaPlusCircle /></Link>
                        </button>
                    </div>
                    <div className="Search-Blog">
                        <p>Search Blogs</p>
                            <input className="ip-Search-blog" type="text" placeholder="Search"/>
                            <FaSearch />
                    </div>

                </div>
            </div>                     
        </div>
    </div>
)}