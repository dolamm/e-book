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
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="40"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Bookcase</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addbook">Add book</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Search</a>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        {/* <div className="dropdown">
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div> */}
        <div className='nameBox'>
          <p>{userName}</p>
        </div>
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={userAvatar}
              className="rounded-circle"
              height="40"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#"><p>{userName}</p></a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="/signout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}