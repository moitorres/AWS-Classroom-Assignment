import React, {useState} from 'react';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from './UserPool'

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser ({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        //Authenticate user when they click the login button
        user.authenticateUser(authDetails, {

            onSuccess: data =>{
                console.log('onSuccess: ', data);
            },

            onFailure: data =>{
                console.error('onFailure: ', data);
            },

            newPasswordRequired: data =>{
                console.log('newPasswordRequired: ', data)
            }
        });
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type='submit'>Login</button>
                
            </form>
        </div>
    );
}