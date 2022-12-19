import { useParams } from 'react-router-dom';
import { NavDetail } from './NavDetail';
import { DetailBook } from './DetailBook';
import { Recommend } from './Recommend';
import { Footer } from '../Layout/BookFooter';
import { Comment } from './Comment';
import { useState, useEffect } from "react";
import { app, auth, db } from "../Firebase";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";

export function Detail({user_info}) {

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

    return (
        <div className='home'>
            <NavDetail user_info={user_info}/>
            <DetailBook item={book}/>
            <Comment item={book}/>
            <Recommend item={book}/>
            <Footer />
        </div>
    );
}
