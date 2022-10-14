import 'bootstrap/dist/css/bootstrap.min.css'
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/List.css"
import "../../css/Dropdown.css"

export function Nav() {
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  const [isHidden, setIsHidden] = useState(true)
  const handleDropdown = () => {
    const subMenu = document.querySelector('.dropdown-menu')
    if (isHidden) {
      subMenu.style.display = 'block'
      setIsHidden(false)
    } else {
      subMenu.style.display = 'none'
      setIsHidden(true)
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const Name = user.displayName;
      const avt = user.photoURL;
      console.log(Name);
      setUserName(Name);
      setUserAvatar(avt);
    } else {
      console.log("User is signed out");
    }
  });

  console.log(userName);

  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "lightblue"}}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="mb-2 navbar-nav me-auto mb-lg-0">
            <li key='1' className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li key='2' className="nav-item">
              <a className="nav-link" href="UserCourse/">
                Library
              </a>
            </li>
          </ul>
          <div className="nav-item">
            <a className="nav-link" href="/Home">
              Logout
            </a>
          </div>
          <div className="nav-item">
            <div className="avt-box">
                <img className="rounded-circle" src={userAvatar} alt="Avatar" width="50px" height="50px"/>
                <p>{userName}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}