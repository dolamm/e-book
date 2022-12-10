import React from "react";
import "../../css/List.css"
import "../../css/Category/CategoryBook.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="Cate-Book">
                    <img src={item.image} alt="Book" className="Book-item"/>
                    <p className="Book-name">{item.title}</p>
                    <p className="Author-name">{item.author}</p>
                    <p className="Description">{item.description}</p>
                    <p className="Price-Category">{item.price}$</p>
                    <div class="d-grid gap-2 ">
                        <Link to={`/book/${item.id}`} className="btn btn-success btn-sm text-center">View more</Link>
                    </div>
        </div>
    )
}

export default Item;