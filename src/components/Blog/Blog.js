import { NavDetail } from '../Detail-book/NavDetail';
import { Footer } from '../Layout/BookFooter';
import { BlogContain } from './BlogContain';
import {app, auth, db} from '../Firebase';
export function Blog() {
    return (
        <div className='home'>
            <NavDetail user_info={auth.currentUser}/>
            <BlogContain />
            <Footer />
        </div>
    );
}