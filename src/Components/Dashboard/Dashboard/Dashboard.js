import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import SecureAdmin from '../../SecureAdmin/SecureAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import Home from '../Home/Home';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MangeOrders from '../MangeOrders/MangeOrders';
import MangeProduct from '../MangeProduct/MangeProduct';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import "./Dashboard.css";

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, user, userSignOut } = useAuth();

    return (
        <main>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{"width": "280px"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="fas fa-tachometer-alt me-2" style={{"fontSize": "22px"}}></i>
                    <span className="fs-4">Dashboard</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink exact to={`${url}`} className="nav-link text-white" >
                        <i className="fas fa-home me-2"></i>
                        Home
                        </NavLink>
                    </li>
                    {
                        admin ? <>
                            <li>
                            <NavLink to={`${url}/make_admin`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                <i className="fas fa-users-cog me-2"></i>
                                Make a admin
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to={`${url}/add_product`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                <i className="fas fa-box-open me-2"></i>
                                Add a product
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to={`${url}/manage_all_orders`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                <i className="fas fa-cog me-2"></i>
                                Manage all orders
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to={`${url}/mange_products`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                <i className="fas fa-tasks me-2"></i>
                                Manage products
                                </NavLink>
                            </li>
                        </>
                        : <>
                            <li>
                                <NavLink to={`${url}/payment`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                    <i className="fas fa-credit-card  me-2"></i>
                                    Payment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`${url}/my_orders`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                <i className="far fa-calendar-check me-2"></i>
                                    My Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`${url}/review`} className={isActive => "nav-link text-white" + (!isActive ? "" : "active") } >
                                    <i className="fas fa-comments me-2"></i>
                                    Review
                                </NavLink>
                            </li>
                        </>

                    }
                </ul>

                <hr/>
                <div className="dropdown dropup">
                    <span className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={ user.photoURL ?  user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>{ user.displayName }</strong>
                    </span>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><span className="dropdown-item">New project...</span></li>
                        <li><span className="dropdown-item">Settings</span></li>
                        <li><a href="/" className="dropdown-item">Back to Home</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li>
                            <span className="dropdown-item" onClick={userSignOut}>
                                <i className="fas fa-sign-out-alt me-2"></i>
                                Sign out
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container my-5">
                <Switch>
                    <Route exact path={`${path}`}>
                        <Home></Home>
                    </Route>
                    <SecureAdmin path={`${path}/make_admin`}>
                        <MakeAdmin></MakeAdmin>
                    </SecureAdmin>
                    <SecureAdmin path={`${path}/manage_all_orders`}>
                        <MangeOrders></MangeOrders>
                    </SecureAdmin>
                    <SecureAdmin path={`${path}/mange_products`}>
                        <MangeProduct></MangeProduct>
                    </SecureAdmin>
                    <SecureAdmin path={`${path}/add_product`}>
                        <AddProduct></AddProduct>
                    </SecureAdmin>



                    {/* for normal user */}


                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/my_orders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>
            </div>
        </main>
    );
};

export default Dashboard;