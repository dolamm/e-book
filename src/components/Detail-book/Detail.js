import { NavDetail } from './NavDetail';
import { DetailBook } from './DetailBook';
import { Recommend } from './Recommend';
import { Footer } from '../Layout/BookFooter';

export function Detail() {
    return (
        <div className='home'>
            <NavDetail />
            <DetailBook />
            <Recommend />
            <Footer />
        </div>
    );
}