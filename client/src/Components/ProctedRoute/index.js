import React from 'react';
import auth from '../../auth';
import {Route,Redirect} from 'react-router-dom';

const ProctectedRoute = ({component:Component,...rest }) => {
    return (

        <Route {...rest} render={props=>{
            if(auth.isAuthencated())
            {
                return <Component />
            }
            else
            {
                return(
                    <Redirect to={{pathname:"/",
                state:{
                    from:props.location
                }}} />
                )
            }
        }}/>
    );
};

export default ProctectedRoute;