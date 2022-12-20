import { app, auth, db } from '../Firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
 // import { HomeScreen } from '../../HomeComponents/HomeScreen'
 import 'bootstrap/dist/css/bootstrap.min.css'
 import { useState } from 'react'
 import { Navigate, Outlet } from 'react-router-dom'
 import { render } from '@testing-library/react'
 import { async } from '@firebase/util'
 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
 import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
 import "../../css/Payment/Pay.css";
 import {Notification} from '../notification/Notification'

 const storage = getStorage(app);

//  const signUp = (setAuthenticated) => {
//      const email = document.getElementById('email').value
//      const password = document.getElementById('password').value

//      createUserWithEmailAndPassword(auth, email, password)
//          .then((userCredential) => {
//              const user = userCredential.user
//              console.log(user)
//              console.log('You have successfully signed up!')
//              setAuthenticated(true)

//              const docRef = doc(db, "users", user.uid);
//              setDoc(docRef, {
//                   email: email,
//                   uid: user.uid,
//                   displayName: null,
//                   photoURL: null,
//               }).then(() => {
//                   console.log("Document written with ID: ", docRef.id);
//               }
//               ).catch((error) => {
//                   console.error("Error adding document: ", error);
//               }
//               );
//          })
//          .catch((error) => {
//              const errorCode = error.code
//              const errorMessage = error.message
//          })
//  }

 export function SignUp() {
     const [authenticated, setAuthenticated] = useState(
         localStorage.getItem(localStorage.getItem('authenticated') || false)
     )

     const [user, setUser] = useState(null)

    const signUp = (setAuthenticated) => {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const re_password = document.getElementById('re-password').value
        if(password !== re_password){
          Notification('Password does not match', 'error')
        }else{
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user
              console.log(user)
              setUser(user.uid)
              console.log('You have successfully signed up!')
              Notification('You have successfully signed up!')
              setAuthenticated(true)
              const docRef = doc(db, "users", user.uid);
              setDoc(docRef, {
                   email: email,
                   uid: user.uid,
                   displayName: null,
                   photoURL: null,
               }).then(() => {
                   console.log("Document written with ID: ", docRef.id);
                   window.location.href = '/homepage'
               }
               ).catch((error) => {
                   console.error("Error adding document: ", error);
               }
               );
          })
          .catch((error) => {
              const errorCode = error.code
              const errorMessage = error.message
              Notification(errorMessage, 'error')
          })
        }
      }

       const handleSubmit = () => {
         signUp(setAuthenticated)
      }

  console.log(user)

     
  // localStorage.clear()

     return (
 <div className="form-group">
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"></img>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign up</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label">Email address</label>
          </div>
          <div class="form-outline mb-3">
            <input type="password" id="password" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label">Password</label>
          </div>
          <div class="form-outline mb-3">
            <input type="password" id="re-password" class="form-control form-control-lg"
              placeholder="Confirm your Password" />
            <label class="form-label">Confirm your Password</label>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit} >Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Do you have an account? <a href="/"
                class="link-danger">Login</a></p>
          </div>
          {/* {authenticated &&<Navigate to ={`/update/${user}`}/>} */}
        </form>
      </div>
    </div>
  </div>
</section>
 </div>
     )
 }
