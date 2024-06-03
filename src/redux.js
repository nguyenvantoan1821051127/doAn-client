import {applyMiddleware, combineReducers,createStore} from 'redux';
import authReducer from './store/reduces/authReducer';
import userreducer from './store/reduces/userReducer';
import {thunk} from 'redux-thunk'

const rootReducer=combineReducers({
    authReducer: authReducer,
    userreducer:userreducer,

});


export const store =createStore(rootReducer,applyMiddleware((thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__());


    // import rootReducer from "./store/reduces/rootReducer";
// import { persistStore } from "redux-persist";
// import { createStore } from "redux";


// const reduxStore = ()=>{
//     try{
//         const store= createStore(rootReducer)
//         const persitor= persistStore(store)
//         console.log("da vao reducer store")
//     return (store,persitor)
//     }catch(err){
//         console.error('error: ', err)
//     }
    
// };

// export default reduxStore;