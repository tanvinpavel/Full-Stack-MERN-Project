import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container mt-5 pt-5">
                <section id="bg-img" className="text-center text-color">
                    <div class="container">
                        <div class="row">
                            <div class="col mt-5 pt-5">
                                <h2 className="display-1">Ready for some family fun?</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-5">
                    <div className="text-center mb-3">
                        <h2>Planning your next get-together?</h2>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "35%", "height": "4px"}} ></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 mx-5">
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <span className="card-img-top event-card-img">
                                    <i class="fas fa-birthday-cake"></i>
                                </span>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Events</h5>
                                    <p className="card-text">Learn about some of our annual festivals and celebrations, and what kind of fun we have planned for the year ahead! From days just for girl and boy scouts to our Halloween-themed weekends, you'll find events and entertainment around every corner!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <span className="card-img-top event-card-img">
                                    <i class="fas fa-theater-masks"></i>
                                </span>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Entertainment</h5>
                                    <p className="card-text">No matter the time of day, there's always something happening! Relax and watch a variety of shows, including music groups, magicians, storytelling and puppet shows!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-hover">
                                <span className="card-img-top event-card-img">
                                    <i class="fas fa-utensils"></i>
                                </span>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Dining</h5>
                                    <p className="card-text">Knoebels has been chosen 17 times as a champion for BEST PARK FOOD in the world! But, don't just take our word for it; take a break from the rides, games and shopping to sample some of our down-home deliciousness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row my-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1>2022 Season Passes</h1>
                        <h6 className="text-muted">Unlimited Visits This Year and Next</h6>
                        <p>Includes unlimited visits for the rest of 2021 and all of 2022, free parking, exclusive discounts and more!</p>
                        <h6 className="text-muted">Lowest price of the year! Just $89.* Hurry! Offer ends Oct. 31.</h6>
                    </div>
                    <div className="col-md-6 d-flex align-item-center">
                        <img className="img-fluid" src="https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/dp-en-us/ctas/tickets/dp-fall22sp-desktop-cta.jpg" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;