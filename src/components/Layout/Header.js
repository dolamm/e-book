import 'bootstrap/dist/css/bootstrap.min.css'
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import {app, auth, db} from '../Firebase';
import { Link } from "react-router-dom";
import "@css/List.css"


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

export function ThreeBook(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
            console.log(data);
        })
    }, [])

    return(
        <div className="row">
            {books.map((book) => (
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
