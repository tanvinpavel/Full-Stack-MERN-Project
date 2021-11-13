import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MangeProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('https://arcane-anchorage-83436.herokuapp.com/services')
            .then(res => setAllProducts(res.data))
    },[])

    const handlerDeleteOrder = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete this item');
    
        if(confirmation){
            axios.get(`https://arcane-anchorage-83436.herokuapp.com/delete_product/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    const restData = allProducts.filter(sOrder => sOrder._id !== id);
                    setAllProducts(restData);
                }
            })
        }
    }

    return (
        <div className="container">
            <div className="text-center my-3">
                <h2>Mange All Orders</h2>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
            </div>
            <div className="table-responsive">

                {
                    allProducts.length < 1 ? <div className="text-center my-5 py-5">
                        <div className="spinner-border text-dark" role="status"> <span className="visually-hidden">Loading...</span> </div>
                    </div>
                    : <table className="table table-striped table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">img</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map((singleProduct, index) => <tr key={singleProduct._id}>
                                    <th scope="row">{index + 1}</th>
                                    <th scope="row">{singleProduct.title}</th>
                                    <th scope="row">
                                        <img src={singleProduct.img} style={{"width": "70px", "height": "35px"}} alt="img" />
                                    </th>
                                    <th scope="row">{singleProduct.price} tk</th>
                                    <td>
                                        <button onClick={() => handlerDeleteOrder(singleProduct._id)} className="btn btn-sm btn-outline-danger mx-1 mt-1">delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                }
            </div>
        </div>
    );
};

export default MangeProduct;