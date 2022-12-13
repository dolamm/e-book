import { useParams } from 'react-router-dom';
import { NavHome } from './NavHome';
import { Footer } from './BookFooter';
import "../../css/Layout/Notify.css";
import { BookList } from '../Books/BookList';

export function HomePage() {
    const userAvatar="https://i.pinimg.com/originals/3c/0d/0d/3c0d0d8b1b0f1f1b1c1b1b1b1b1b1b1b.jpg"
    const userName="Nguyen Van A"
    return (
        <div className='home'>
            <div className='notify-tab'>
                    <div className="avatar-img">
                        <img src={userAvatar} className="rounded-circle" height="40" alt="Black and White Portrait of a Man" loading="lazy"/>
                    </div>
                    <span>
                        <span className="avatar-name">{userName}</span>
                        <span className="notify-text">Đã có 1 cuốn sách mới được thêm vào thư viện</span>
                    </span>
            </div>
            <NavHome />
            <BookList />
            <Footer />
        </div>
    );
}