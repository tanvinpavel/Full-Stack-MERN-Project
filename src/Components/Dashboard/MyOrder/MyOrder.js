import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./MyOrder.css";

const MyOrder = () => {

    const {user} = useAuth();
    const [order, setOrder] = useState([]);


    const email = user.email;
    // console.log(email);
    
    useEffect(() => {
        axios.post("https://arcane-anchorage-83436.herokuapp.com/services/myOrder", {
            email: `${email}`})
            .then(res => setOrder(res.data));
    });

    const handlerDeleteBtn = (id) => {

        const confirmation = window.confirm('Are you sure you want to delete this order');

        if(confirmation){
            axios.get(`https://arcane-anchorage-83436.herokuapp.com/order/deleteOrder/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        const resData = order.filter(sServices => sServices._id !== id);
                        setOrder(resData);
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
                        <div style={{"width": "770px", "margin": "0 auto"}}>
                            <div style={{"borderBottom": "2px solid gray"}}>
                                <h6 className="d-inline" style={{"padding":"0 55px"}}>Name</h6>
                                <h6 className="d-inline" style={{"padding":"0 60px"}}>Email</h6>
                                <h6 className="d-inline" style={{"paddingLeft":"40px"}}>Services Name</h6>
                                <h6 className="d-inline" style={{"padding":"0 22px"}}>Status</h6>
                                <h6 className="d-inline" style={{"padding":"0 24px"}}>District</h6>
                                <h6 className="d-inline" style={{"padding":"0 30px"}}>Action</h6>
                            </div>
                            <div>
                                { 
                                    order.length < 1 ? <div className="text-center">
                                        <h2 className="my-5 text-danger">No Order has been parches</h2>
                                        <Link className="cus-btn px-4 d-inline-block mb-3" to={`/home`}>Order Now</Link>
                                    </div>
                                    :
                                    order.map(singleOrder => <div key={singleOrder._id}>
                                        <div className="card my-3 shadow">
                                            <div className="card-body d-flex justify-content-evenly align-items-center">
                                                <h6 className="card-title">{singleOrder.name}</h6>
                                                <h6 className="card-title">{singleOrder.email}</h6>
                                                <h6 className="card-title">{singleOrder.title}</h6>

                                                {
                                                singleOrder.status === 'pending' ?
                                                    <span className="bg-warning p-1 rounded text-white d-inline-block">{singleOrder.status}</span>
                                                :
                                                    <span className="bg-success p-1 rounded text-white d-inline-block">{singleOrder.status}</span>
                                                }
                                                
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