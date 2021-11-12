import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllProducts from './Components/AllProducts/AllProducts';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/allProducts">
            <AllProducts></AllProducts>
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/details/:servicesId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
