import { Nav } from './NavBar';
import { BookList } from '../Books/BookList';
import "../../css/List.css"

export function HomeScreen() {
    return (
        <div className='home'>
            <Nav />
            <div><img className='homeImg' src="http://time.com/wp-content/uploads/2014/12/children.jpg" alt="web khong ban sach nua"></img></div>
            <BookList />
        </div>
    );
    }