import 'bootstrap/dist/css/bootstrap.min.css'
import {Notification} from '../notification/Notification'
import "../../css/Payment/Pay.css";
import {UserLogin} from '../../redux/actions/UserAction'
import {useDispatch, useSelector} from 'react-redux'

export function SignIn() {
    const {user} = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch()
    const signInWithForm = () => {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      dispatch(UserLogin(email, password))
    }
    if(user==null){
      Notification('Please login to continue', 'info')
      console.log(user)
    }
    else {
      window.location.href = '/homepage'
    }
    // localStorage.clear()

    return (
<div className="form-group">
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"></img>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="password" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label">Password</label>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={signInWithForm} >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                className="link-danger">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    )
}