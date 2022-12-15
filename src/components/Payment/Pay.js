import "../../css/Payment/Pay.css";
import Book from '../../img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '../../img/logo.png'
import { Footer } from '../Layout/BookFooter';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';

const getBookFromCart = async (id) => {
    try {
        const q = query(collection(db, "cart"), where("user_id", "==", id));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export function Pay() {
    const [book, setBook] = useState([]);
    const { uid } = useParams();
    console.log(uid);
    
    useEffect(() => {
        getBookFromCart(uid).then((data) => {
            setBook(data);
            console.log(data);
        });
    }, []);

    return (
        <div className='Payment'>
            <div className='notify-tab'>
                    <Link to={`/profile/${uid}`} className="avatar-img">
                        {/* <img src={userAvatar} className="avatar-circle" alt="Avatar" loading="lazy"/> */}
                    </Link>
                    <span>
                        {/* <span className="avatar-name">{userName}</span> */}
                        <span className="notify-text">Lets pay!! </span>
                    </span>
            </div>
            <p className="Pay-title">
                <img src={logo} alt="logo" className="logo-pay" />
                <span>Payment</span>
            </p>
            <p className="Pay-product">
            
                <div className="Pay-Title">
                    <p className="Pay-Title-Product">Product</p>
                    <div className="Pay-Title-Right">
                        <p className="Pay-Title-Unit-Price Pay-Title-Author">Author</p>
                        <p className="Pay-Title-Unit-Price Pay-Title-Total">Price</p>
                    </div>
                </div>
                {book&&book.map((item) => (
                    <div className="Pay-detail-product">
                    <input className="cb-payment" type="checkbox"/>
                        <img src={item.image} alt="book" className="Pay-book-img"/>
                        <div className="Pay-book-name">
                            {item.title} 
                        </div>
                        <div className="Pay-book-format">
                            Format: Audio hoặc Ebook
                        </div>
                        <div className="Pay-detail-author">
                            {item.author}
                        </div>
                        <div className="Pay-detail-Total">
                            {item.price} USD
                        </div>
                    </div>
                ))}
                {/* <div className="Pay-detail-product">
                <input className="cb-payment" type="checkbox"/>
                    <img src={Book} alt="book" className="Pay-book-img"/>
                    <div className="Pay-book-name">
                        Ten sach. Nếu tên sách dài hơn width hiện ... 
                    </div>
                    <div className="Pay-book-format">
                        Format: Audio hoặc Ebook
                    </div>
                    <div className="Pay-detail-author">
                        Tên tác giả
                    </div>
                    <div className="Pay-detail-Total">
                        50 USD
                    </div>
                </div> */}
                
                <hr />
                <div className="Pay-money">
                    <div className="Pay-method">
                        <p>Payment methods</p>
                        <button className="Pay-method-choose">
                            <span>Momo</span>
                        </button>
                        <select  className="Pay-method-choose Bank">
                            <option value="Card" selected disabled>credit card</option>
                            <option value="ACB">Ngân hàng TMCP Á Châu (ACB)</option>
                            <option value="Vietcombank">Ngân hàng TMCP Ngoại Thương Việt Nam(Vietcombank)</option>
                            <option value="Agribank">Ngân hàng Nông Nghiệp và Phát triển nông thôn Việt Nam(Agribank)</option>
                        </select >
                        
                    </div>
                    <hr />
                    <div className="Pay-total-money">
                        <span className="Total-payment">Total payment:
                            <span className="Total-payment-money">200 USD</span>
                        </span>
                        <br />
                        <button className="btn-buybook">
                            <FaMoneyBillWave />
                            <b className="btn-buybook-text">Buy</b>
                        </button>
                        <span className="rules">Clicking <span>"Buy"</span> means that you agree to purchase</span>
                    </div>
                </div>
            </p>
            <Footer />
        </div>
    );
}