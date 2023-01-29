import "../../css/Category/CategoryBook.css"
import Book from '../../img/book1.png'
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from 'react-router-dom';
export function CategoryBook() {
    const {category} = useParams();
    return (
        <div className="name-category">
            <p className="name-category-text">
                category: {category}
            </p>
            <div className="Category-path">
                    <span className="path-text">Home</span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Category</span>
                    <FaLongArrowAltRight />
                    <span className="path-text">Tên Category</span>
                </div>
            <div className="filter">
                <FaFilter />
                <span className="filter-text">Filter</span>
            </div>
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
    );
}