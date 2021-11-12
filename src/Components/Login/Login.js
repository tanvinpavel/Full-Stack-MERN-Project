import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Login.css'
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {

  const {googleSignIn, setUser, setIsLoading, newUserLogin, setError, error, facebookLogin, saveGoogleUser} = useAuth();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  //google sign in

  const handlerGoogleSignIn = () => {
      googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveGoogleUser( user.displayName, user.email );
        setError('');
        history.push(from);
      })
      .finally(() => setIsLoading(false))
      .catch((error) => { setError(error.message)})
  }

  //facebook sign in

  const handlerFacebook = () => {
    facebookLogin()
    .then((result) => {
      const user = result.user;
      setUser(user);
      saveGoogleUser( user.displayName, user.email );
      setError('');
      history.push(from);
    })
    .finally(() => setIsLoading(false))
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }

  //login with email and password

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const {email, password} = data;

    newUserLogin(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
      history.push(from);
    })
    .finally(() => setIsLoading(false))
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center pt-5">
        <div className="col-md-6">
        {error && <p className="text-danger text-center mt-4">{error.slice(10)}</p>}
        <div className="card my-5 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-center">Log In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  {...register("email")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-danger">This field is required</span>}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn cus-btn">
                  Submit
                </button>
              </div>
              <div className="form-text">
                Not a member? <Link to="/register">Register Now</Link>
              </div>
            </form>
          </div>
        </div>
        </div>
        <div className="divider mb-4">
            <hr /> <h5>or</h5> <hr />
        </div>

        <div className="d-grid gap-2 col-md-6 mx-auto mb-5">
          <button onClick={handlerGoogleSignIn} className="btn btn-outline-dark" type="button">
            <span className="me-2"><i className="fab fa-google"></i></span>
            Login with Google
          </button>
          <button onClick={handlerFacebook} className="btn btn-outline-dark fb" type="button">
            <span className="me-2 fb-icon"><i className="fab fa-facebook-f"></i></span>
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
