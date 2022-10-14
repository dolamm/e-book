import { useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './components/Firebase'

import { SignIn } from './components/LoginComponents/SignIn';
import { SignUp } from './components/LoginComponents/SignUp';
import { SignOut} from './components/LoginComponents/SignOut';
import { HomeScreen } from './components/HomeScreen';
import { Nav } from './components/NavBar';

export default function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const Name = user.displayName;
      console.log(Name);
      setUser(Name);
    } else {
      console.log("User is signed out");
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}
