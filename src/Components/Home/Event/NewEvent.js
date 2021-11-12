import React from 'react';

const NewEvent = () => {
    return (
        <div className="container my-5">
            <div className="text-center my-3">
                <h2>Upcoming Product</h2>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 card-hover">
                        <img src="https://cdn.shopify.com/s/files/1/2560/2536/products/81EY_XPiZZL._SL1500_1024x1024.jpg?v=1552901114" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Inspire 3</h5>
                            <p class="card-text">The Inspire 1 was a revelation. The first filmmaking drone in the world to integrate an HD video transmission system, 360° rotating gimbal and a 4K camera,
                            as well as the simplicity of app control. The launches of the Zenmuse X5 and X5R cameras further cemented the Inspire as a critical tool for filmmakers around the globe.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 card-hover">
                    <img src="https://www1.djicdn.com/dps/a331f7747517e1acdbe90859a8d48bbc.webp" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">DJI Phantom 4</h5>
                        <p class="card-text">Gather precise plant-level data using the P4 Multispectral – a high-precision drone with a seamlessly integrated multispectral imaging system built for agriculture missions, environmental monitoring, and more.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 card-hover">
                    <img src="https://techcrunch.com/wp-content/uploads/2021/04/Lifestyle7.jpg?w=1390&crop=1" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">DJI Mavic 3</h5>
                        <p class="card-text">The iconic Swedish brand Hasselblad designed and built the L2D-20c aerial camera just for DJI Mavic 3, embedding a professional-grade 4/3 CMOS in an unbelievably compact space. Rigorous Hasselblad standards are applied to both hardware performance and software algorithms, bringing imaging quality to an entirely new level.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewEvent;