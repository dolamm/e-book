import { signOut } from "firebase/auth";
import { auth } from '../Firebase';

function Logout () {
    signOut(auth).then(() => {
        alert("You have successfully logged out!");
    }).catch((error) => {
        console.log(error);
    });
}
export function SignOut(){
    return (
        <div>
            <button onClick={Logout()}>Sign Out</button>
        </div>
    )
}