import { NavDetail } from '~/Detail-book/NavDetail';
import { Footer } from '~/Layout/BookFooter';
import { BlogContain } from './BlogContain';
export function Blog() {
    return (
        <div className='home'>
            <NavDetail/>
            <BlogContain />
            <Footer />
        </div>
    );
}