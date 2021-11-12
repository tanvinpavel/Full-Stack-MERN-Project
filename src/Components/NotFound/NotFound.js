import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" text-center">
            <img className="img-fluid" src="https://i.ibb.co/ctKsXNM/404.jpg" alt="Page Not Found" />

            <Link to="/home" className="my-5 btn btn-outline-info">Back to Home</Link>
        </div>
    );
};

export default NotFound;