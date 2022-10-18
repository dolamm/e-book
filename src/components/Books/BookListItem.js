import React from "react";
import "../../css/List.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Item = ({item}) => {
    return(
        <div className="card">
            <img src={item.image} className="card-img-top" alt="Responsive image"/>
            <div className="card-body p-4">
            <h4 className="fw-bold mb-4">{item.title}</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> {item.author}</p>
            <p className="mb-0">{item.description}</p>
            <button className="btn btn-success btn-sm text-center">Add to bookcase</button>
            </div>
        </div>
    )
}

export default Item;