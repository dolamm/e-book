import React from "react";
import "../../css/List.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div class="card mb-3">
            <img class="card-img-top" src={item.image} alt="Card image cap"/>
            <div class="card-body">
            <h3 class="card-title">{item.title}</h3>
            <p class="card-text">{item.description.substr(0,130)+"..."}</p>
            <p class="card-text"><small class="text-muted">{item.author}</small></p>
            <div class="d-grid gap-2 ">
                <Link to={`/book/${item.id}`} className="btn btn-success btn-sm text-center">View more</Link>
            </div>
            </div>
        </div>
    )
}

export default Item;