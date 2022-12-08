import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Blog/Blog.css"
import "../../css/Category/CategoryBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan, FaPlusCircle, FaLongArrowAltRight, FaSearch } from "react-icons/fa";

export function BlogContain() {
    return (    
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
                    <img className="Blog-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                    <br/>
                    <span className="Blog-date">December 2,2022 /</span>
                    <span className="Blog-Author">By Thanh Hieu</span> <br/>
                    <a className="Blog-Title" href="/">5 Attractive Bookstore WordPress Themes</a>
                    <p className="Blog-Content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat […]
                    </p>
                    <a className="Blog-Viewmore" href="/">
                        View More
                        <FaGreaterThan /> 

                    </a>
                    <hr/>


                    {/* test */}
                    <img className="Blog-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                    <br/>
                    <span className="Blog-date">December 2,2022 /</span>
                    <span className="Blog-Author">By Thanh Hieu</span> <br/>
                    <a className="Blog-Title" href="/">5 Attractive Bookstore WordPress Themes</a>
                    <p className="Blog-Content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat […]
                    </p>

                </div>
                <div className="Blog-right">
                    <div className="Create-Blog">
                        <p>Create Blogs</p>
                        <button className="btn-create-blog">
                            <b className="btn-create">Create</b>
                            <FaPlusCircle />
                        </button>


                        <p>Tạo data xóa dòng này đi: tạo blog bao gồm title, 1 hình nền, tên tác giả, ngày khởi tạo , nội dung</p>
                    </div>
                    <div className="Search-Blog">
                        <p>Search Blogs</p>

                            <input className="ip-Search-blog" type="text" placeholder="Search"/>
                            <FaSearch />
                        
                    </div>

                    <div className="Recent-Post">
                        <p>Recent Posts</p>
                        <div className="Recent-Post-Contain">
                            <img className="Recent-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                            <div className="Recent-content"> 
                                <span className="Blog-date">December 2,2022 </span> <br/>
                                <a className="Recent-Title">5 Attractive Bookstore WordPress Themes</a>
                            </div>
                            
                        </div>

                        <div className="Recent-Post-Contain">
                            <img className="Recent-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                            <div className="Recent-content"> 
                                <span className="Blog-date">December 2,2022 </span> <br/>
                                <a className="Recent-Title">5 Attractive Bookstore WordPress Themes</a>
                            </div>
                            
                        </div>


                        <div className="Recent-Post-Contain">
                            <img className="Recent-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                            <div className="Recent-content"> 
                                <span className="Blog-date">December 2,2022 </span> <br/>
                                <a className="Recent-Title">5 Attractive Bookstore WordPress Themes</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>                     
        </div>
        
)}