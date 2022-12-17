import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../css/Detail/DetailBook.css"
import Item from "../../components/Books/BookListItem";
import { FaGreaterThan } from "react-icons/fa";
import { limit } from 'firebase/firestore';
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";

export function Recommend({item}) {

    const [book, setBook] = useState('');

    console.log(item.category);

    const getInfo = async () => {
        try {
          const q = query(collection(db, "books"), where("category", "array-contains", item.category[0]), limit(5));
          const querySnapshot = await getDocs(q);
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data);
          }); 
          setBook(data);
          console.log(book)
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getInfo()
    },[item]);

    console.log(book);

    return (    
        <div className="Recommend">
            <p className="Recommend-text">Recommend
            <div className="hr"></div>
            </p> 

            <Link to={``} className="More">
              View more
               <FaGreaterThan className="i-greater"/> <FaGreaterThan className="i-greater"/>
            </Link>
            <div class="grid-container">
                {book && book.map((item) => (
                    <div className="grid-item">
                        <img src={item.image} alt="Book" className="Recommend-Book" />
                        <p className="text-into text-into-title">{item.title}</p>
                        <p className="text-into text-into-price">Price: {item.price}$</p>
                    </div>
                ))}
            </div>
            
        </div>
        
)}