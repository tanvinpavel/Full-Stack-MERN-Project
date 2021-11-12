import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./MyOrder.css";

const MyOrder = () => {

    const {user} = useAuth();
    const [services, setServices] = useState([]);


    const email = user.email;
    // console.log(email);
    
    useEffect(() => {
        axios.post("http://localhost:5000/services/myOrder", {
            email: `${email}`})
            .then(res => setServices(res.data));
    } ,[]);

    const handlerDeleteBtn = (id) => {

        const confirmation = window.confirm('Are you sure you want to delete this order');

        if(confirmation){
            axios.get(`http://localhost:5000/order/deleteOrder/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        const resData = services.filter(sServices => sServices._id !== id);
                        setServices(resData);
                    }
                })
        }
    }

    return (
                <div className="row justify-content-center">
                        <div className="text-center my-3">
                            <h2>My Order</h2>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                        </div>
                    <div className="col-md-8 cus-table">
                        <div style={{"width": "700px", "margin": "0 auto"}}>
                            <div className="ms-4 d-flex justify-content-around align-items-center" style={{"borderBottom": "2px solid gray"}}>
                                <h6>Name</h6>
                                <h6>Email</h6>
                                <h6>Services Name</h6>
                                <h6>District</h6>
                                <h6>Action</h6>
                            </div>
                            <div>
                                { 

                                services.length < 1 ? <div className="text-center">
                                        <h2 className="my-5 text-danger">No Order has been parches</h2>
                                        <Link className="cus-btn px-4 d-inline-block mb-3" to={`/home`}>Order Now</Link>
                                    </div>
                                    :
                                    services.map(singleOrder => <div>
                                        <div className="card my-3 shadow">
                                            <div className="card-body d-flex justify-content-around align-items-center">
                                                <h6 className="card-title">{singleOrder.name}</h6>
                                                <h6 className="card-title">{singleOrder.email}</h6>
                                                <h6 className="card-title">{singleOrder.title}</h6>
                                                <h6 className="card-title">{singleOrder.district}</h6>
                                                <button onClick={() => handlerDeleteBtn(singleOrder._id)} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default MyOrder;