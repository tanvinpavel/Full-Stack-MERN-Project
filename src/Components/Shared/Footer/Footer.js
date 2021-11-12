import React from 'react';

const Footer = () => {
    return (
        <div style={{"border-top": "2px solid gray"}}>
          <footer className="text-center text-lg-start text-dark" style={{"color": "black", "background": "#f2f2f2"}} >

            <section>
              <div className="container text-center text-md-start pt-5">
              
                <div className="row">
                
                  <div className="col-md-3 col-lg-4  col-xl-3 mx-auto mb-4">
                  
                    <h6 className="text-uppercase fw-bold">
                      <img style={{"width": "160px"}} src="https://i.ibb.co/6tF84Jg/clipart1293061.png" alt="" />
                    </h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "300px","backgroundColor": "rgb(253 253 253)", "height": "2px"}} ></hr>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"backgroundColor": "#6351ce"}} />
                    <p>Drone Industry Insight recognizes that this feat was made possible by Terra Drone’s rapid growth across a wide range of industries and geographic regions. Terra Drone has a presence in more than 25 countries around the world and continues to partner with manufacturers of cutting-edge drone technology.</p>
                    
                    <h6 className="fw-bold mt-4 mb-3"><img style={{height:50}} src="" alt="" />Copyright :</h6>
                    <p>&copy; All Right Reserved by Drone World</p>
                  </div>
                
                  <div className="col-md-4 col-lg-4 d-flex justify-content-center  col-xl-3 mx-auto mb-md-0 mb-4">
                    <div>
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "60px","backgroundColor": "rgb(253 253 253)", "height": "2px"}} ></hr>
                      <p><i className="fas fa-home mr-3"></i> chittagong</p>
                      <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                      <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                      <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-4 col-xl-3  mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold">Social</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "60px","backgroundColor": "rgb(253 253 253)", "height": "2px"}} ></hr>
                      <div>
                        <a target="blank" href="https://www.facebook.com/tanvin.pavel.1/" className="text-dark mx-2">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/home" className="text-dark mx-2">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/home" className="text-dark mx-2">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/home" className="text-dark mx-2">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/tanvinpavel" className="text-dark mx-2">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                  </div>
                </div>
              
              </div>
            </section>
          </footer>
        </div>
          );
      };

export default Footer;