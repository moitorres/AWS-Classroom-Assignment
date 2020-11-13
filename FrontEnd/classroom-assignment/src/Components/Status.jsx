import React, {useState, useContext, useEffect} from 'react';
import {AccountContext} from './Account'
import LoginForm from './LoginForm';
import App from '../App';

export default () => {
    const [status, setStatus] = useState(false);
    const {getSession} = useContext(AccountContext);

    useEffect( () => {
        getSession()
        .then(session => {
            console.log("Session", session);
            setStatus(true);
        })
    }, []);

    return(
        <div>
            {status ? <App/> : <LoginForm/>}
        </div>
    );
}