import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Route, Routes } from 'react-router-dom';
import { auth } from './components/Firebase';
import { SignIn } from './components/LoginComponents/SignIn';
import { SignUp } from './components/LoginComponents/SignUp';
import { SignOut} from './components/LoginComponents/SignOut';
import { UpdateProfile } from './components/User/UpdateProfile';
import { HomeScreen } from './components/Layout/HomeScreen';
import { AddBook } from './components/Books/AddBook';
import { SearchBook } from './components/Books/SearchBook';
import { ChatRoom } from './components/Chat/ChatRoom';
import { Detail } from './components/Detail-book/Detail';
import { Blog } from './components/Blog/Blog';
import { Category } from './components/Category/Category';
import { CategoryBook } from './components/Books/ShowAll';

import { Pay } from './components/Payment/Pay';
import { Profile } from './components/Profile/Profile';
import { DetailBlog } from './components/Blog/DetailBlog';
import { AllCategory } from './components/Category/AllCategory';
import { HomePage } from './components/Layout/HomePage';
import { CreateBlog } from './components/Profile/CreateBlog';

import './css/global.css';

export default function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const User = auth.currentUser;
      setUser(User);
      console.log(user)
    } else {
      console.log("User is signed out");
    }
  });

  return user === null ? (
    <div id="loading" className="loading-modal"></div>
  ) :  (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/update" element={<UpdateProfile/>}/>
        <Route path="/update/:uid" element={<UpdateProfile/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/search" element={<SearchBook/>}/>
        <Route path="/chat" element={<ChatRoom/>}/>
        <Route path="/detail" element={<Detail/>}/>
        {/* <Route path="/blog" element={<Blog/>}/> */}
        <Route path="/category" element={<Category/>}/>
        <Route path="/pay/:uid" element={<Pay/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/:uid" element={<Profile user_info={user}/>}/>
        <Route path="/detailblog" element={<DetailBlog/>}/>
        <Route path="/book/:id" element={<Detail/>}/>
        <Route path="/allcategory" element={<AllCategory/>}/>
        <Route path="/allcategory/:category_id" element={<AllCategory/>}/>
        <Route path="/homepage" element={<HomePage user_info={user}/>}></Route>
        <Route path="/blog/:uid" element={<CreateBlog user_info={user}/>}></Route>
        <Route path="/createblog" element={<CreateBlog user_info={user}/>}></Route>
      </Routes>
    </div>
  )
}
