import 'bootstrap/dist/css/bootstrap.min.css'
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import {app, auth, db} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/List.css"
import "../../css/Dropdown.css"
import "../../css/global.css"

const getBooks = async () => {
    try {
        const q = query(collection(db, "books"));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data)
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

// const getBooksByCategory = async (category) => {
//     try {
//         const q = query(collection(db, "books"), where("category", "==", category));
//         const querySnapshot = await getDocs(q);
//         let data = [];
//         querySnapshot.forEach((doc) => {
//             data.push(doc.data());
//             console.log(doc.data)
//         })
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export function CategoryBook(props){

    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState('action');

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
            console.log(data);
        })
    }, [])

    let categoryBook = document.getElementById("categoryBook");
    categoryBook.addEventListener("click", function(){
        setCategory(categoryBook.value);
    })
    
    let booksByCategory = books.filter(book => book.category === category);
    console.log(booksByCategory);

    return books.length === 0 ? (
        <div id="loading" className="loading-modal"></div>
    ) : (
        <div className="row">
            {booksByCategory.map((book) => (
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={book.image} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                        <div className="card-body">
                            <p className="card-text">{book.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Link to={`/book/${book.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                </div>
                                <small className="text-muted">{book.author}</small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
