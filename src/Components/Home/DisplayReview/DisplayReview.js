import React from 'react';

const DisplayReview = (props) => {
    const {userName, img, comment} = props.details;
    return (
        <div className="col text-center">
            <div className="card h-100 shadow">
                <img src={img ? img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className="user-img" alt="customer"/>
                <div className="card-body">
                    <h5 className="card-title">{userName}</h5>
                    <p className="card-text">{comment.slice(0,100)+'...'}.</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;