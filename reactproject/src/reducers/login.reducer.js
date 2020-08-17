import React from 'react'
import userConstants from '../constants/user.constants';

user = json.parse(localStorage.getItem("user"));
const initialState = user? {loggerdIn:true, user}:{}

export function loginUser(state=initialState, action)
{
    switch(action.type)
    {
        case userConstants.LOGIN_REQUEST:
            return{
            loggerdIn:true,
            user:action.user
        }
        case userConstants.LOGIN_SUCCESS:
            return{
                loggerdIn:true,
                user:action.user
            }
        case userConstants.LOGIN_FAILURE:
            return{
                loggerdIn:false,
                user:{}
            }  
        default:
            return state;      

    }
}

export default loginUser;