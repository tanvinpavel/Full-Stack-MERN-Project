import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className="text-center my-5 py-5">
            <div className="spinner-border text-dark" role="status"> <span className="visually-hidden">Loading...</span> </div>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({location}) => user.email ? (
                    children
                ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location }
                      }} />
                )
            }
        ></Route>
    );
};

export default PrivateRoute;