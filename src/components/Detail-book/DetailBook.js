import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {Notification} from '../notification/Notification.js';
import "../../css/Detail/DetailBook.css";
import "../../css/global.css";
import Book from "../../img/book1.png";
import { FaLongArrowAltRight, FaCartPlus, FaMoneyBillWave, FaHeadphonesAlt, FaBook, FaBookOpen} from "react-icons/fa";

const storage = getStorage(app);

let docID = new Date().getTime().toString();
const docRef = doc(db, "cart", docID);
const addToCart = async (item) => {
    try {
        const data = {
            id: docID,
            title: item.title,
            image: item.image,
            price: item.price,
            category: item.category,
            book_id: item.id,
            author: item.author,
            user_id: auth.currentUser.uid,
        };
        await setDoc(docRef, data).then(() => {
            // alert("Thêm vào giỏ hàng thành công");
            Notification("Thêm vào giỏ hàng thành công", "success");
        });
    } catch (error) {
        console.log(error);
    }
};

export function DetailBook({item}) {
    const handleBuy = () => {
        addToCart(item);
    };
    const BuyNow = () => {
        addToCart(item).then(() => {
            window.location.href = `/pay/${auth.currentUser.uid}`;
        });
    }
  return item.length === 0 ? (
    <div id="loading" className="loading-modal"></div>
  ) : (
    <div className="DetailBook">
      <div className="Detail-path">
        <span className="path-text"><a href="/homepage">Home</a></span>
        <FaLongArrowAltRight />
        <span className="path-text">Detail</span>
        <FaLongArrowAltRight />
        <span className="path-text">{item.title}</span>
      </div>
      <div className="Detail">
        <img src={item.image} alt="Book" className="Book-img" />
        <div className="right">
          <h5 className="Book-title">{item.title}</h5>
          <div className="Category">
            <b>Category: </b>
            {
              item.category.map((category) => {
                if(category != 'all')
                return <span> <a className='category-item' href={`/allcategory/${category}`}>{category}</a> </span>
              })
            }
          </div>
          <div className="Price">
            <b>Price: </b>
            <span>{item.price}$</span>
            
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
            <b>Insurance: </b>
            100% copyrighted book
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
                <button className="btn-cart" onClick={BuyNow}>
                  <FaMoneyBillWave />
                  <b className="sp-btn">Buy</b>
                </button>
                <button className="btn-cart">
                  <FaBookOpen />
                  <b className="sp-btn">preview</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
