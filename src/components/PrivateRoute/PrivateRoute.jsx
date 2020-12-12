import React,{useEffect, useState} from 'react';
import queryString from 'query-string'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...props }) => {
    const [auth, setAuth] = useState(false);

useEffect(() => {
debugger
    let query = queryString.parse(props.location.search)
    if (query.token) {
        window.localStorage.setItem('jwt', query.token)
        setAuth(true)
    } else {
        setAuth(false)
    }
}, []);

    return ( 
        <Route {...props} render={props => !auth
            ? (
                <Redirect to="/" />
            )
            : (
                <Component {...props} />
            )}
        />
     );
}
 
export default PrivateRoute;