import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Book from '../../img/book1.png'
import { FaGreaterThan } from "react-icons/fa";
import { limit } from 'firebase/firestore';
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";

export function Recommend({item}) {

    console.log(item.category);

    const getInfo = async () => {
        try {
          const q = query(collection(db, "books"), where("category", "array-contains", item.category[0]));
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

    const [book, setBook] = useState([]);

    useEffect(() => {
        getInfo().then((data) => {
            setBook(data);
            console.log(data);
        });
    }, []);

    return (    
        <div className="Recommend">
            <p className="Recommend-text">Recommend
            <div className="hr"></div>
            </p> 
            
            <p className="More">View More <FaGreaterThan /> <FaGreaterThan /></p>
            <div class="grid-container">
                {book&&book.map((item) => (
                    <div className="grid-item">
                        <img src={item.image} alt="Book" className="Recommend-Book" />
                    </div>
                ))}
                {/* <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" />
                <img src={Book} alt="Book" className="Recommend-Book" /> */}
            </div>
            
        </div>
        
)}