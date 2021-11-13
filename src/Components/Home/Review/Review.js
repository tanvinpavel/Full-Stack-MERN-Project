import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';
import "./Review.css";

const Review = () => {
    const [review, setReview] = useState([]);
    
    useEffect(() => {
        axios.get('https://arcane-anchorage-83436.herokuapp.com/getAllReview')
        .then(res => setReview(res.data))
    },[])

    return (
        <div>
            <div className="container my-5">
                <div className="text-center mt-3 mb-5">
                    <h3 className="head-title">What People Are Saying</h3>
                </div>

                { review.length < 1 ?
                    <div className="text-center my-5 py-5">
                        <div className="spinner-border text-dark" role="status"> <span className="visually-hidden">Loading...</span> </div>
                    </div>
                :
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            review.map(singleReview => <DisplayReview key={singleReview._id} details={singleReview}></DisplayReview>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Review;