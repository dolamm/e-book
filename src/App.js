import { useDispatch, useSelector } from 'react-redux'

import { Route, Routes } from 'react-router-dom';
import { SignIn } from '~/LoginComponents/SignIn';
import { SignUp } from '~/LoginComponents/SignUp';
import { SignOut} from '~/LoginComponents/SignOut';
import { UpdateProfile } from '~/User/UpdateProfile';

import { AddBook } from '~/Books/AddBook';
import { SearchBook } from '~/Books/SearchBook';
import { ChatRoom } from '~/Chat/ChatRoom';
import { Detail } from '~/Detail-book/Detail';
import { Blog } from '~/Blog/Blog';
import { Category } from '~/Category/Category';

import { Pay } from '~/Payment/Pay';
import { Profile } from '~/Profile/Profile';
import { DetailBlog } from '~/Blog/DetailBlog';
import { AllCategory } from '~/Category/AllCategory';
import { HomePage } from '~/Layout/HomePage';
import { CreateBlog } from '~/Profile/CreateBlog';
import { SuccessPay } from '~/Payment/successPay';
import { BlogContain} from '~/Blog/BlogContain';

import '@css/global.css';

export default function App() {

  const {user} = useSelector((state) => state.UserReducer);
  return user == null ? 
  (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  ):(
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        {/* <Route path="/update" element={<UpdateProfile/>}/> */}
        <Route path="/update-profile/:uid" element={<UpdateProfile/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        {/* <Route path="/search" element={<SearchBook/>}/>
        <Route path="/chat" element={<ChatRoom/>}/> */}
        <Route path="/detail" element={<Detail/>}/>
        {/* <Route path="/blog" element={<Blog/>}/> */}
        <Route path="/category" element={<Category/>}/>
        <Route path="/pay/:uid" element={<Pay/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/:uid" element={<Profile user_info={user}/>}/>
        <Route path="/detailblog/:id" element={<DetailBlog/>}/>
        <Route path="/book/:id" element={<Detail user_info={user}/>}/>
        <Route path="/allcategory" element={<AllCategory/>}/>
        <Route path="/allcategory/:category_id" element={<AllCategory/>}/>
        <Route path="/homepage" element={<HomePage/>}></Route>
        <Route path="/blog/:uid" element={<CreateBlog user_info={user}/>}></Route>
        <Route path="/createblog" element={<CreateBlog user_info={user}/>}></Route>
        <Route path="/successPay" element={<SuccessPay/>}/>
        <Route path="/blogcontain" element={<BlogContain user_info={user}/>}/>
      </Routes>
  )
}
