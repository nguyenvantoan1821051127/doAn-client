import React,{ useState, useEffect} from "react";
import { InputForm,Button } from "../../components";
import{useLocation} from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

const Login=()=>{

    const location = useLocation()
    const dispatch=useDispatch()



    const [isRegister,setisRegister]=useState(location.state?.flag)
    useEffect(()=>{
        setisRegister(location.state?.flag)
    },[location.state?.flag])

    const [payload,setPayload]= useState({
        phone:'',
        password:'',
        name:'',
    })
    const handleSubmit=async()=>{
        console.log(payload)
        isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
        // console.log(response)
    }

    return(
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-senibuld text-2xl mb-3">{isRegister ? 'dang ki tai khoan' : 'dang nhap'}</h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister && <InputForm label={'HO TEN'} value={payload.name} setValue={setPayload} type={'name'}/>}
                <InputForm label={'so dien thoai'} value={payload.phone} setValue={setPayload} type={'phone'}/>
                <InputForm label={'mat khau'}value={payload.password} setValue={setPayload} type={'password'}/>
                {/* <InputForm label={'ma nguoi dung'}value={payload.id} setValue={setPayload} type={'ma nguoi dung'}/> */}
                <Button 
                text={isRegister ? 'dang ki' : 'dang nhap'}
                textColor='text-white'
                bgColor='bg-secondary1'
                fullwidth
                onClick={handleSubmit}
            />
            </div>
            <div className="mt-7 flex items-center justify-between">
                {isRegister 
                ? <small>ban da co tai khoan? <span 
                onClick={()=>{setisRegister(false)}}
                className="text-blue-500 hover:underline cursor-pointer"
                >
                    Dang nhap ngay
                </span></small>
                : <>
                    <small className="text-[blue] hover:text-[red] cursor-pointer">Ban quen mat khau</small>
                    <small 
                    onClick={()=>{setisRegister(true)}} 
                    className="text-[blue] hover:text-[red] cursor-pointer ">tao tai khoan moi</small>
                </>}

            </div>
            
        </div>
    )
}

export default Login