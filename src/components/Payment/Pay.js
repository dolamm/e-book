import "@css/Payment/Pay.css";
import Book from '@img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import logo from '@img/logo.png'
import { Footer } from '../Layout/BookFooter';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs, deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Notification } from '../notification/Notification.js';

const getBookFromCart = async (id) => {
    try {
        const q = query(collection(db, "cart"), where("user_id", "==", id));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc, index) => {
            doc.data();
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
    const [totalPay, settotalPay] = useState(0);


    const calculatorTotal = () =>{
        let choosingBook = document.getElementsByClassName('cb-payment');
        let price = document.getElementsByClassName('Pay-detail-Total');
        let total = 0;
        for(let i = 0; i < choosingBook.length; i++){
            if(choosingBook[i].checked){
                total += parseFloat(book[i].price);
            }
        }
        settotalPay(total);
    }

    const handlePay = () =>{
        if(book.length > 0){
            let choosingBook = document.getElementsByClassName('cb-payment');
            for (let i = 0; i < book.length; i++){
                if(choosingBook[i].checked){
                    let id = book[i].id.toString();
                    deleteDoc(doc(db, "cart", id));
                }
            }
            Notification('Payment successfully', 'success');
            setTimeout(() => {
                window.location.href = `/successPay`;
            }, 3000);
        }
        else {
            Notification('No book in cart', 'warning');
        }
    }

    $(document).ready(function(){
        $('#payment-confirm').click(function(){
            handlePay();
        });
    });

    useEffect(() => {
        getBookFromCart(uid).then((data) => {
            setBook(data);
            console.log(data);
        });
    }, []);

    return book == null? (
        <div id="loading" className="loading-modal"></div>
    ) : (
        <div className='Payment'>
            <div className='notify-tab'>
                    <Link to={`/profile/${uid}`} className="avatar-img">
                        {/* <img src={userAvatar} className="avatar-circle" alt="Avatar" loading="lazy"/>  */}
                    </Link>
                    <span>
                        {/* <span className="avatar-name">{userName}</span> */}
                        <span className="notify-text">Lets pay!! </span>
                    </span>
            </div>
            <p className="Pay-title">
                <Link to={`/homepage`}>
                        <img src={logo} alt="logo" className="logo-pay" />
                </Link>
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
                    <input className="cb-payment" type="checkbox" onChange= {calculatorTotal}/>
                        <img src={item.image} alt="book" className="Pay-book-img"/>
                        <div className="Pay-book-name">
                            {item.title.substr(0,20) + "..."} 
                        </div>
                        <div className="Pay-book-format">
                            Format: Ebook
                        </div>
                        <div className="Pay-detail-author">
                            {item.author}
                        </div>
                        <div className="Pay-detail-Total">
                            {item.price} USD
                        </div>
                    </div>
                ))}
                {
                    book.length == 0 && (
                        <div className="no-item-in-cart">
                            <p> <MdRemoveShoppingCart/>No book in cart</p>
                        </div>
                    )
                }
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
                            <span className="Total-payment-money">{totalPay} USD</span>
                        </span>
                        <br />
                        <button id="payment-confirm" className="btn-buybook">
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