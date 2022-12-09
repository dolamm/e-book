import { useParams } from 'react-router-dom';
import { NavDetail } from './NavDetail';
import { DetailBook } from './DetailBook';
import { Recommend } from './Recommend';
import { Footer } from '../Layout/BookFooter';
import { Comment } from './Comment';

export function Detail() {
    return (
        <div className='home'>
            <NavDetail />
            <DetailBook />
            <Comment />
            <Recommend />
            <Footer />
        </div>
    );
}