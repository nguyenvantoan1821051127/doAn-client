import actionTypes from './actionTypes'
import { apiRegister,apiLogin } from '../../services/auth'
import { type } from '@testing-library/user-event/dist/type'

export const register = (payload)=>async(dispatch)=>{
    try{
        const response=await apiRegister(payload)
        console.log(response)
        if(response?.data.err === 0){
            dispatch({
                type:actionTypes.REGISTER_SUCCESS,
                data:response.data.token
            })
        }else{
            dispatch({
                type:actionTypes.REGISTER_FALT,
                data:response.data.msg
            })
        }


    }catch(error){
        dispatch({
            type:actionTypes.REGISTER_FALT,
            data:null
        })
    }
}


export const login = (payload)=>async(dispatch)=>{
    try{
        const response=await apiLogin(payload)
        console.log(response)
        if(response?.data.err === 0){
            dispatch({
                type:actionTypes.LOGIN_SUCCESS,
                data:response.data.token
            })
        }else{
            dispatch({
                type:actionTypes.LOGIN_FALT,
                data:response.data.msg
            })
        }


    }catch(error){
        dispatch({
            type:actionTypes.LOGIN_FALT,
            data:null
        })
    }
}


export const logout=()=>({
    type: actionTypes.LOGOUT
})