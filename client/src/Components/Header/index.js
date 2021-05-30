import React from 'react';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import ProtectedRoute from '../ProctedRoute';
import Landing from '../Landing';
import auth from '../../auth';
import { Button } from 'react-bootstrap';
import{BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";


const Header = (props) => {


    function handleLogout(event)
    {
        auth.logout(()=>{
            {window.location.assign('/')}
        })
    }
    return (
        <Router>
        <div className="navbar">
        <div className="IconHeader">
            <h1><Link  style={{ textDecoration: 'none',color:"white" }} to="/">Fasting App</Link></h1>

        </div>
        {
            auth.isAuthencated()?
            <div className="buttons">
            <Button variant="outline-light" onClick={(event)=>handleLogout(event)}><Link style={{ textDecoration: 'none',color:"white" }} to="/signup">Log Out</Link></Button>
            </div>:
            <div className="buttons">
            <Button variant="outline-light" className="loginbutton">
            <Link style={{ textDecoration: 'none',color:"white" }} to="/login">Log In</Link>
            
            </Button>
            <Button variant="outline-light"><Link style={{ textDecoration: 'none',color:"white" }} to="/signup">Sign Up</Link></Button>
        </div>
        }
        
    </div>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <ProtectedRoute path="/app" exact component={Landing} />
      </Switch>
    </Router>);
};

export default Header;