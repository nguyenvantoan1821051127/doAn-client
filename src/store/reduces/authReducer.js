import actionTypes from "../actions/actionTypes";

const initState ={
    isLoggedIn:false,
    token: null,
    msg:''
}
const authReducer =(state= initState,action)=>{
    switch(action.type){
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
        return{
            ...state,
            isLoggedIn:true,
            token:action.data,
            msg:'123'
        }
        case actionTypes.REGISTER_FALT:
            case actionTypes.LOGIN_FALT:
            return{
                ...state,
                isLoggedIn:false,
                msg:action.data,
                token:null,
            }
            case actionTypes.LOGOUT:
                return{
                    ...state,
                    isLoggedIn:false,
                    token:null,
                    msg:''
                }

        default:
            return state;
    }
}
export default authReducer