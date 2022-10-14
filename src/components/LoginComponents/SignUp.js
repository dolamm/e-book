import { app, auth } from '../Firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// import { HomeScreen } from '../../HomeComponents/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { render } from '@testing-library/react'
import { async } from '@firebase/util'

const signUp = (setAuthenticated) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            alert('You have successfully signed up!')
            setAuthenticated(true)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
}

export function SignUp() {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem(localStorage.getItem('authenticated') || false)
    )

    const handleSubmit = () => {
        signUp(setAuthenticated)
    }

    // localStorage.clear()

    return (
<div>
    <section class="vh-100 bg-success" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" >
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="email" class="form-control" />
                        <label class="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="password" class="form-control" />
                        <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="password" class="form-control" />
                        <label class="form-label" for="form3Example4cd">Confirm your password</label>
                      </div>
                    </div>
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Sign Up</button>
                    </div>
  
                    {authenticated && <Navigate to="/" />}
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image"></img>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    )
}