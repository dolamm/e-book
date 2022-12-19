import firebase from 'firebase/compat/app';
import { app, auth, db } from '../Firebase';
import { useParams } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { Navigate, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Notification} from '../notification/Notification.js';

const user = auth.currentUser;

export function UpdateProfile() {
  const [isUpdate, setIsUpdate] = useState (
    localStorage.getItem(localStorage.getItem('isUpdate') || false)
  )
  let {uid}  = useParams();
  console.log(uid)
  const update = (setAuthenticated) => {

    const displayName = document.getElementById('displayName').value
    const photoURL = document.getElementById('photoURL').value

    updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
    }).then(() => {
        // alert('Profile updated!')
        Notification("Profile updated!", "success");
        setAuthenticated(true)

        updateDoc(doc(db, "users", uid), {
            displayName: displayName,
            photoURL: photoURL
        }).then(() => {
            console.log("Document written with ID: ", user.uid);
        }
        ).catch((error) => {
            console.error("Error adding document: ", error);
        }
        );
    }).catch((error) => {
        console.log(error)
    })
  }
  const handleUpdate = () => {
    update(setIsUpdate)
  }

    return (
        <div>
          <section class="vh-100">
              <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://media.istockphoto.com/vectors/male-and-female-characters-are-editing-profile-online-vector-id1300004790?k=20&m=1300004790&s=612x612&w=0&h=ECJkSK1bNjOaC1oWbrCsqtsGCLNKA0MuKa6TPzGGmmA=" class="img-fluid" alt="Sample image"></img>
                  </div>
                  <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                      <div class="form-outline mb-4">
                        <input type="url" id="photoURL" class="form-control form-control-lg"
                          placeholder="Enter a valid image URL" />
                        <label class="form-label">Image URL</label>
                      </div>

                      <div class="form-outline mb-3">
                          <input type="text" id="displayName" class="form-control form-control-lg"
                            placeholder="What your's name ?" />
                          <label class="form-label">Name..</label>
                      </div>
            
                      <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg" onClick={handleUpdate} >Update Profile</button>
                      </div>
                      {isUpdate && <Navigate to="/homepage" />}
                    </form>
                  </div>
                </div>
              </div>
            </section>
</div>

    )
}