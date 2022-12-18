import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import { CategoryBook } from '../Category/CategoryBook';

export function Category({user_info}) {
    return (
        <div className='home'>
            <NavDetail />
            <CategoryBook />
            <Footer />
        </div>
    );
}