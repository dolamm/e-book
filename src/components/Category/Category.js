import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import { CategoryBook } from '../Category/CategoryBook';

export function Category() {
    return (
        <div className='home'>
            <NavDetail />
            <CategoryBook />
            <Footer />
        </div>
    );
}