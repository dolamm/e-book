import "../../css/Payment/Pay.css";
import { FaMoneyBillWave } from "react-icons/fa";
import {app, auth, db} from '../Firebase';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { Footer } from '../Layout/BookFooter';
import { NavDetail } from '../Detail-book/NavDetail';
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";
import { ShortBlog } from '../Blog/ShortBlog';
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
            <NavDetail/>
            <div className="name-category">
                <img className="name-category-img" src={user_info.photoURL}/>
            <p className="name-category-text">
                {user_info.displayName}
            </p>
            </div>
            <div className="Blog-contain">
                <div className="Blog-left">
                    {blogs&&blogs.map((blog_item) => (
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
                    <div className="Create-Blog Edit-profile">
                        <p>Edit profile</p>
                        <button className="btn-create-blog btn-edit-profile">
                            <Link to={`/update-profile/${user_info.uid}`} className="btn-create">
                            <b className="btn-create">Edit</b>
                            <FaEdit />
                            </Link>
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