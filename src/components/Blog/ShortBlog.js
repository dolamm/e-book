import "../../css/Blog/DetailBlog.css"
import {FaGreaterThan} from "react-icons/fa"
export function ShortBlog({item}){
    return(
        <>
        <div className="Blog">
        <img className="Blog-img" src={item.image} alt="Book"></img>
        <br/>
        <span className="Blog-date">{item.time}</span>
            <span className="Blog-Author"> - By <a>{item.displayName}</a></span> 
            <br/>
            <a className="Blog-Title" href="/">{item.title}</a>
            <p className="Blog-Content">
            {item.content.substring(0, 200)}
            </p>
                    <a className="Blog-Viewmore" href={`/detailblog/${item.id}`}>
                View More
            <FaGreaterThan />
                </a>
                <hr/>                    
        </div>                    
        </>
    )
}