import React from 'react';
import "./DisplayReview.css";

const DisplayReview = (props) => {
    const {userName, img, comment, rating} = props.details;
    return (
        <div className="col text-center">
            <div className="card h-100 shadow">
                <img src={img ? img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className="user-img" alt="customer"/>
                <div className="card-body">
                <span>
                    {1 <= rating ?
                        <i class="fa fa-star filled"></i>
                    : <i class="fa fa-star empty"></i>
                    }
                    {2 <= rating ?
                        <i class="fa fa-star filled"></i>
                    : <i class="fa fa-star empty"></i>
                    }
                    {3 <= rating ?
                        <i class="fa fa-star filled"></i>
                    : <i class="fa fa-star empty"></i>
                    }
                    {4 <= rating ?
                        <i class="fa fa-star filled"></i>
                    : <i class="fa fa-star empty"></i>
                    }
                    {5 <= rating ?
                        <i class="fa fa-star filled"></i>
                    :  <i class="fa fa-star empty"></i>
                    }
                </span>
                    <h5 className="card-title">{userName}</h5>
                    <p className="card-text">{comment.slice(0,100)+'...'}.</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;