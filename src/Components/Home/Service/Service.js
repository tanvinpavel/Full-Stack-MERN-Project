import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const {title, img, details, _id, price} = props.data;
    return (
        <div>
            <div className="col h-100 shadow">
                <div className="card h-100">
                    <img src={img} className="card-img-top" style={{"height": "300px", "objectFit": "cover"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><b>Price:</b> {price}tk</p>
                        <p className="card-text">{details.slice(0,150)+'...'}</p>
                    </div>
                    <div className="d-grid gap-2 text-center col-6 mx-auto mb-2">
                        <Link className="cus-btn" to={`/details/${_id}`}>Buy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;