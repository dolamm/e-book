import React from "react";
import Message from "./Message";
import "../../css/List.css"
import { useEffect, useState, useRef } from "react";
import { app, auth, db } from '../Firebase';
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { serverTimestamp } from "firebase/database";

const docRef = (db, "message", new Date().getTime().toString());

export function ChatRoom(){
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setUserName] = useState('');
    const [avatar, setUserAvatar] = useState('');

    onAuthStateChanged(auth, (user) => {
        if(user){
            const userName = user.displayName
            const userAvatar = user.photoURL
            setUserName(userName);
            setUserAvatar(userAvatar);
        }
        else {
            console.log("No user here")
        }
    })

    const Send = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            createdAt: serverTimestamp(),
            uid,
            photoURL,
            name
        });
        setMessage('');
        console.log("Message sent")
    }

    // useEffect(() => {
    //     const q = query(collection(db, "messages"));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const data = querySnapshot.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id,
    //         }));
    //         setMessages(data);
    //     });
    //     return unsubscribe;
    // }, [db]);


    // const Send = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const data = {
    //             text: message,
    //             user: name,
    //             avatar: avatar,
    //             time: serverTimestamp()
    //         }
    //         console.log(data)
    //         await setDoc(docRef, data).then(() => {
    //             setMessage('');
    //         })
    //         console.log("Message sent")
    //     } catch (error) {
    //         console.log("Error sending message");
    //     }
    // }

    const Receive = async () => {
        const q = query(collection(db, "message"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
        setMessages(doc.data)
    }

    useEffect(() => {
        async function fetchData() {
            const msg = await Receive();
            setMessages(msg);
        }
        fetchData();
    },[])

    return (
        <div className='chatRoom'>
            <div className="list-item">
                {messages && messages.map((msg) => {
                    return <Message key={msg.id} message={msg} />
                })}
            </div>
            <div>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={Send}>Send</button>
            </div>
        </div>
    )
}

