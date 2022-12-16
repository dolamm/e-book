import React from "react";
import "../../css/Category/CategoryBook.css"
import "../../css/Book/ListBook.css"
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="ListBook">
            <div className="des-into-img">
                <img src={item.image} alt="Book" className="Book-item"/>
                <p direction="up" className="Description-into">{item.description}</p>
            </div>
            

            <Link to={`/book/${item.id}`} className="Book-name">{item.title.substr(0,20)+"..."}</Link>
            <p className="Author-name">{item.author}</p>
            
            <p className="Price-Category">{item.price}$</p>

            {/* <div class="d-grid gap-2 ">
                <Link to={`/book/${item.id}`} className="btn btn-success btn-sm text-center">View more</Link>
            </div> */}
        </div>
    )
}

export default Item;