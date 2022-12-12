import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { app, auth, db } from '../Firebase';
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import "../../css/Category/AllCategory.css"
import Book from '../../img/book1.png'
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";

export function AllCategory() {

    const { category_id } = useParams();
    const [bookonpage, setBookonpage] = useState([]);

    const getBooksByCategory = async () => {
        try {
            const q = query(collection(db, "books"), where("category", "array-contains", category_id));
            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        getBooksByCategory().then((data) => {
            setBookonpage(data);
            console.log(bookonpage);
        })
    }, [])

    const category = {
        all: "all",
        action: "action",
        comedy: "comedy",
        drama: "drama",
        fantasy: "fantasy",
        romance: "romance",
        science: "science-fiction",
        tragedy: "tragedy",
    }

    return (
        <div className='Contain-All-category'>
            <NavDetail />
            <div className='All-category'>
                <div className='Nav-category'>
                    <div className='Nav-category__text'>
                        <h3>Category</h3>
                    </div>
                    <div className='Nav-category__filter'>
                        <FaFilter className='Filter'/>
                        <button type="">Popular</button>
                        <button type="">Newest</button>
                        <button type="">Hot sale</button>
                        <select  className="Category-sort">
                            <option value="Card" selected disabled>Sort by</option>
                            <option value="up">Price: low to high</option>
                            <option value="down">Price: high to low</option>
                        </select >
                    </div>
                    <div className="Category-count-page">
                        <h3>Page 1 of 10</h3>
                    </div>
                </div>
                <div className="contain-category">
                    <div className="content-category-left">
                        <Link to={`/category/${category.all}`} className="content-category-button">
                            <button type="">All</button>
                        </Link>
                        <Link to={`/category/${category.action}`} className="content-category-button">
                            <button type="">Action</button>
                        </Link>
                        <Link to={`/category/${category.comedy}`} className="content-category-button">
                            <button type="">Comedy</button>
                        </Link>
                        <Link to={`/category/${category.drama}`} className="content-category-button">
                            <button type="">Drama</button>
                        </Link>
                        <Link to={`/category/${category.fantasy}`} className="content-category-button">
                            <button type="">Fantasy</button>
                        </Link>
                        <Link to={`/category/${category.romance}`} className="content-category-button">
                            <button type="">Romance</button>
                        </Link>
                        <Link to={`/category/${category.science}`} className="content-category-button">
                            <button type="">Science-fiction</button>
                        </Link>
                        <Link to={`/category/${category.tragedy}`} className="content-category-button">
                            <button type="">Tragedy</button>
                        </Link>
                        <Link to="/home" className="content-category-button-back">
                            <button type="">Back to home</button>
                        </Link>

                    </div>
                    <div className="content-category">
                    <div className="content-category-right">
                        <div class="grid-CateBook">
                            {bookonpage.map((book) => (
                                <div className="Cate-Book">
                                    <img src={book.image
                                    } alt="Book" className="Book-item"/>
                                    <p className="Book-name">{book.name}</p>
                                    <p className="Author-name">{book.author}</p>
                                    <p className="Price-Category">{book.price}$</p>
                                </div>
                            ))}
                        {/* <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div> */}
                        </div>
                    </div>
                </div>
                </div>    
            </div>
            <Footer />
        </div>
    );
}