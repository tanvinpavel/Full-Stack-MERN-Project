import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services/limit")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    },[])

    return (
        <div>
            <div className="container my-5">
                <div className="text-center my-3">
                    <h2>Services</h2>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                </div>
                { services.length < 1 ?
                    <div className="text-center my-5 py-5">
                        <div class="spinner-border text-dark" role="status"> <span class="visually-hidden">Loading...</span> </div>
                    </div>
                :
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {services.map(service => <Service key={service._id} data={service}></Service>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;