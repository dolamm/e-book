import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import "../../css/Category/AllCategory.css"
import Book from '../../img/book1.png'
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";

export function AllCategory() {
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
                        <div className="content-category-button">
                            <button type="">All</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Action</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Comedy</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Drama</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Fantasy</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Romance</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Science-fiction</button>
                        </div>
                        <div className="content-category-button">
                            <button type="">Tragedy</button>
                        </div>
                        <div className="content-category-button-back">
                            <button type="">Back to home</button>
                        </div>

                    </div>
                    <div className="content-category">
                    <div className="content-category-right">
                            <div class="grid-CateBook">
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
                        </div>
                        <div className="Cate-Book">
                            <img src={Book} alt="Book" className="Book-item"/>
                            <p className="Book-name">tên sách</p>
                            <p className="Author-name">tên Tác giả</p>
                            <p className="Price-Category">Giá tiền 55$</p>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
                    
                
            </div>
            <Footer />
        </div>
    );
}