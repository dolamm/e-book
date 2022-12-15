import "../../css/Payment/Pay.css";
import Book from '../../img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '../../img/logo.png'
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { Footer } from '../Layout/BookFooter';
import { NavDetail } from '../Detail-book/NavDetail';
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";

const getUserBlogs = async (uid) => {
    const q = query(collection(db, "blogs"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
};

export function Profile({user_info}) {
    console.log(user_info.uid);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getUserBlogs(user_info.uid).then((data) => {
            setBlogs(data);
        });
    }, [user_info]);

    console.log(blogs);

    return (
        <div className='Profile'>
            <NavDetail />
            <div className="name-category">
                <img className="name-category-img" src={user_info.photoURL}/>
            <p className="name-category-text">
                {user_info.displayName}
            </p>
            </div>
            <div className="Blog-contain">
                <div className="Blog-left">
                    {blogs&&blogs.map((item) => (
                        <div className="Blog">
                            <img className="Blog-img" src={item.image} alt="Book"></img>
                            <br/>
                            <span className="Blog-date">  </span>
                            <span className="Blog-Author">By {item.uid}</span> <br/>
                            <a className="Blog-Title" href="/">{item.title}</a>
                            <p className="Blog-Content">
                            {item.content}
                            </p>
                            <a className="Blog-Viewmore" href="/">
                                View More
                                <FaGreaterThan />
                            </a>
                            <hr/>
                        </div>
                    ))
                    }
                </div>
                <div className="Blog-right">
                    <div className="Create-Blog">
                        <p>Create Blogs</p>
                        <button className="btn-create-blog">
                            <Link to={`/createblog`} className="btn-create">Create</Link>
                            <FaPlusCircle />
                        </button>
                    </div>
                    <div className="Create-Blog Edit-profile">
                        <p>Edit profile</p>
                        <button className="btn-create-blog btn-edit-profile">
                            <b className="btn-create">Edit</b>
                            <FaEdit />
                        </button>
                    </div>
                    <div className="Search-Blog">
                        <p>Search Blogs</p>

                            <input className="ip-Search-blog" type="text" placeholder="Search"/>
                            <FaSearch />
                        
                    </div>
                </div>
            </div>                     
        
        
            <Footer />
        </div>
    );
}