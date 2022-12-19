import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { app, auth, db } from '../Firebase';
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import "../../css/Category/AllCategory.css"
import Book from '../../img/book1.png'
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";
import Item from "../Books/BookListItem";

export function AllCategory({user_info}) {

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

    const [category, setCategories] = useState([]);
    const getCategories = async () => {
        const category = query(collection(db, "categories"));
        const querySnapshot = await getDocs(category);
        let data = [];
        data.push('all');
        querySnapshot.forEach((doc, index) => {
            data.push(doc.id);
        })
        return data;
    }

    useEffect (() => {
        getBooksByCategory().then((data) => {
            setBookonpage(data);
            console.log(bookonpage);
        })
        getCategories().then((data) => {
            setCategories(data);
        })
    }, [category_id])

    return bookonpage.length===null ? (
        <div id="loading" className="loading-modal"></div>
    ):(
        <div className='Contain-All-category'>
            <NavDetail user_info={user_info}/>
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
                        <h3>Page 1 of 1</h3>
                    </div>
                </div>
                <div className="contain-category">
                    <div className="content-category-left">
                        {
                            category.map((cate) => (
                                <Link to={`/allcategory/${cate}`} className="content-category-button">
                                    <button className={cate == category_id ? ("active-category") : ("")}type="">{cate}</button>
                                </Link>
                            ))
                        }
                        {/* <Link to={`/allcategory/${category.action}`} className="content-category-button">
                            <button type="">Action</button>
                        </Link>
                        <Link to={`/allcategory/${category.comedy}`} className="content-category-button">
                            <button type="">Comedy</button>
                        </Link>
                        <Link to={`/allcategory/${category.drama}`} className="content-category-button">
                            <button type="">Drama</button>
                        </Link>
                        <Link to={`/allcategory/${category.fantasy}`} className="content-category-button">
                            <button type="">Fantasy</button>
                        </Link>
                        <Link to={`/allcategory/${category.romance}`} className="content-category-button">
                            <button type="">Romance</button>
                        </Link>
                        <Link to={`/allcategory/${category.science}`} className="content-category-button">
                            <button type="">Science-fiction</button>
                        </Link>
                        <Link to={`/allcategory/${category.tragedy}`} className="content-category-button">
                            <button type="">Tragedy</button>
                        </Link> */}
                        <Link to="/homepage" className="content-category-button-back">
                            <button type="">Back to home</button>
                        </Link>
                    </div>
                    <div className="content-category">
                    <div className="content-category-right">
                        <div class="grid-CateBook-1">
                            {bookonpage.map((book) => (
                                <Item item={book} />
                                // <div className="Cate-Book">
                                //     <img src={book.image
                                //     } alt="Book" className="Book-item"/>
                                //     <p className="Book-name">{book.name}</p>
                                //     <p className="Author-name">{book.author}</p>
                                //     <p className="Price-Category">{book.price}$</p>
                                // </div>
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