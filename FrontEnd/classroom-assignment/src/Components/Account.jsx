import React, {createContext} from 'react';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import Pool from './UserPool'

const AccountContext = createContext();

const Account = props => {

    const getSession = async () => 
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if(user){
                user.getSession((err, session) => {
                    if(err)
                        reject();
                    else{
                        resolve(session)
                    }
                });
            }
            else{
                reject();
            }
        });
    

    const authenticate = async (Username, Password) => 
        
        await new Promise((resolve, reject) => {

            const user = new CognitoUser ({ Username, Pool});

            const authDetails = new AuthenticationDetails({ Username, Password});

            //Authenticate user when they click the login button
            user.authenticateUser(authDetails, {

                onSuccess: data =>{
                    console.log('onSuccess: ', data);
                    //Save the current user in the local storage
                    localStorage.setItem('user', user.username);
                    window.location.href = "/"
                    resolve(data);
                },

                onFailure: err =>{
                    alert(err.message);
                    reject(err);
                },

                newPasswordRequired: data =>{
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                }
            });
        });
    
    const logout = () => {
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
            console.log("Signout");
            window.location.href = "/"
        }
    }

    return (
        <AccountContext.Provider value={{
            authenticate,
            getSession,
            logout
        }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export{Account, AccountContext};