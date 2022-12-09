import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import { FaLongArrowAltRight,FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../css/Blog/DetailBlog.css"

export function DetailBlog() {
    return (
        <div className='home'>
            <NavDetail />
            <div className="content">
                <div className="DetailBlog-path">
                    <span className="path-text">Home</span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Blog </span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Tên Blog</span>
                </div>
                <div className="DetailBlog-bg">
                    <img className="DetailBlog-img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-1125x540.jpg" alt="Book"></img>
                </div>
                <div className="DetailBlog-Content-index">
                    <div className="DetailBlog-Content">
                        <span className="Blog-date">December 2,2022 /</span>      
                        <span className="Blog-Author">By Thanh Hieu</span> <br/>                    
                        <a className="Blog-Title" href="/">5 Attractive Bookstore WordPress Themes</a>
                        <p className="Blog-Content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat […]Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecatLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecatLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecatLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat
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