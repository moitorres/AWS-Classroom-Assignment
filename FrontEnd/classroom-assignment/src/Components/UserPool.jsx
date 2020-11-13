import {CognitoUserPool} from 'amazon-cognito-identity-js';

//Information for the user pool data
const poolData = {
    UserPoolId: 'us-east-1_ibvcU9mNO',
    ClientId: '349dsnpljkni9jp2e44988ffd1'
}

export default new CognitoUserPool(poolData);