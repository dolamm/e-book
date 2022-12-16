import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../css/Detail/DetailBook.css";
import "../../css/global.css";
import Book from "../../img/book1.png";
import { FaLongArrowAltRight, FaCartPlus, FaMoneyBillWave, FaHeadphonesAlt, FaBook } from "react-icons/fa";

const storage = getStorage(app);

const docRef = doc(db, "cart", new Date().getTime().toString());

const addToCart = async (item) => {
    try {
        const data = {
            title: item.title,
            image: item.image,
            price: item.price,
            category: item.category,
            book_id: item.id,
            author: item.author,
            user_id: auth.currentUser.uid,
        };
        await setDoc(docRef, data).then(() => {
            alert("Thêm vào giỏ hàng thành công");
        });
    } catch (error) {
        console.log(error);
    }
};

export function DetailBook({item}) {

    const handleBuy = () => {
        addToCart(item);
    };

  return item.length === 0 ? (
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
        <img src={item.image} alt="Book" className="Book-img" />
        <div className="right">
          <h1 className="Book-title">{item.title}</h1>
          <div className="Category">
            <b>Category: </b>
            {
              item.category.map((category) => {
                if(category != 'all')
                return <span className='category-item'> {category} </span>
              })
            }
          </div>
          <div className="Price">
            <b>Price: </b>
            Giá tiền
          </div>
          <div className="Description">
            <b>Description: </b>
            {item.description.substring(0, 200) + "..."}
          </div>
          <div className="Price">
            <b>Author: </b>
            {item.author}
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
                <button onClick={handleBuy} className="btn-cart">
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
