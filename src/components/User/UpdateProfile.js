import firebase from 'firebase/compat/app';
import { app, auth, db } from '../../Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const user = auth.currentUser;

const updateProfile = (setAuthenticated) => {
    const displayName = document.getElementById('displayName').value
    const photoURL = document.getElementById('photoURL').value

    updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
    }).then(() => {
        console.log('Profile updated!')
        setAuthenticated(true)
    }).catch((error) => {
        console.log(error)
    })
}

export function UpdateProfile() {
    <div>
        <form>
            <h2>Update Profile</h2>
            <div className="">
                <div className="mb-3">
                    <label className="form-label">Display Name</label>
                    <input type="text" id="displayName" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Photo URL</label>
                    <input type="text" id="photoURL" className="form-control"></input>
                </div>
                <button type="button" className="btn btn-primary" onClick={updateProfile}>
                    Update Profile
                </button>
            </div>
        </form>
    </div>
}