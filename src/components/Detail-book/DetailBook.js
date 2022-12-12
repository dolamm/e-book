import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, auth, db } from "../Firebase";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import "../../css/Detail/DetailBook.css";
import "../../css/global.css";
import Book from "../../img/book1.png";
import { FaLongArrowAltRight, FaCartPlus, FaMoneyBillWave, FaHeadphonesAlt, FaBook } from "react-icons/fa";

export function DetailBook() {
  const { id } = useParams();

  const getInfo = async () => {
    try {
      const q = query(collection(db, "books"), where("id", "==", id));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        console.log(doc.data);
      });
      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  const [book, setBook] = useState([]);
  useEffect(() => {
    getInfo().then((data) => {
      setBook(data);
      console.log(data);
    });
  }, []);

  return book.length === 0 ? (
    <div id="loading" className="loading-modal"></div>
  ) : (
    <div className="DetailBook">
      <div className="Detail-path">
        <span className="path-text">Home</span>
        <FaLongArrowAltRight />
        <span className="path-text">Detail</span>
        <FaLongArrowAltRight />
        <span className="path-text">Tên Sách</span>
      </div>
      <div className="Detail">
        <img src={book.image} alt="Book" className="Book-img" />
        <div className="right">
          <h1 className="Book-title">{book.title}</h1>
          <div className="Category">
            <b>Category: </b>
            {
              book.category.map((item) => {
                return <span className='category-item'> {item} </span>
              })
            }
          </div>
          <div className="Price">
            <b>Price: </b>
            Giá tiền
          </div>
          <div className="Description">
            <b>Description: </b>
            {book.description.substring(0, 200) + "..."}
          </div>
          <div className="Price">
            <b>Author: </b>
            {book.author}
          </div>
          <div className="Price">
            <b>Bảo hiểm: </b>
            Sách bản quyền 100%
          </div>
          <div className="Price">
            <b>Select format: </b>
          </div>
          <div className="btn-format">
            <button className="btn-audio">
              <FaHeadphonesAlt />
              <b className="sp-btn">Audio</b>
            </button>
            <button className="btn-audio btn-ebook">
              <FaBook />
              <b className="sp-btn">Ebook</b>
            </button>
          </div>
          <br />
          <div className="style-border"></div>
          <div className="Buy">
            <div className="all-btn">
              <div>
                <button className="btn-cart">
                  <FaCartPlus />
                  <b className="sp-btn">Add to cart</b>
                </button>
                <button className="btn-cart">
                  <FaMoneyBillWave />
                  <b className="sp-btn">Buy</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
