import axiosConfig from '../axiosConfig'


export const apiRegister =(payload)=> new Promise(async(resolve,reject)=>{
    try{
        const response =await axiosConfig({
            method: 'post',
            url: 'http://localhost:5000/api/vi/auth/register',
            data:payload
        })
        resolve(response)
    }

    catch(error){
        reject(error)
    }
})

export const apiLogin =(payload)=> new Promise(async(resolve,reject)=>{
    try{
        const response =await axiosConfig({
            method: 'post',
            url: 'http://localhost:5000/api/vi/auth/login',
            data:payload
        })
        resolve(response)
    }

    catch(error){
        reject(error)
    }
})