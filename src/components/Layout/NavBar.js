import "bootstrap/dist/css/bootstrap.min.css";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { app, auth } from "../Firebase";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../css/List.css";
import "../../css/Dropdown.css";
import "../../css/Layout/NavBar.css";
import Background from "../../img/background.png";

export function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [theme, setTheme] = useState([]);
  const handleDropdown = () => {
    const subMenu = document.querySelector(".dropdown-menu");
    if (isHidden) {
      subMenu.style.display = "block";
      setIsHidden(false);
    } else {
      subMenu.style.display = "none";
      setIsHidden(true);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const Name = user.displayName;
      const avt = user.photoURL;
      console.log(Name);
      setUserName(Name);
      setUserAvatar(avt);
      setIsLogin(true);
    } else {
      console.log("User is signed out");
      setIsLogin(false);
    }
  });

  console.log(userName);

  return (
    <>
      {/* user constrol  */}
      <div id="user-control">{isLogin === true && <div></div>}</div>
      {/* nav bar */}
      <div
        id="nav-bar"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div id="top-section">
          <div id="logo">
            {/* asset */}
            <img src={require("../../img/bookshop-logo.png")}></img>
          </div>
          <div id="search-bar">
            <span id="search-input">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search" name="search"></input>
            </span>
          </div>
          <div id="search-category">
            <span id="search-category-input">
              category <i className="fas fa-caret-down"></i>
            </span>
          </div>
          <div id="my-cart">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
        <div id="bottom-section">
          <div id="book-content">
            <h3>Book Title</h3>
            <h4>By Author</h4>
            <p>short description</p>
            <button>Read More</button>
          </div>
          <div id="select-theme">
            <img src="https://wallpapercave.com/wp/wp5526544.jpg" />
            <img src="https://wallpapercave.com/wp/wp5526544.jpg" />
            <img src="https://wallpapercave.com/wp/wp5526544.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
