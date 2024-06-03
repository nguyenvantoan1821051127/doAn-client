import React,{ useState, useEffect} from "react";
import { InputForm,Button } from "../../components";
import{useLocation,useNavigate} from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch,useSelector } from "react-redux";

const Login=()=>{

    const location = useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {isLoggedIn} = useSelector(state=>state.authReducer)
    const [invalidfields,setinvalidfields]=useState([])
    const [isRegister,setisRegister]=useState(location.state?.flag)
    useEffect(()=>{
        setisRegister(location.state?.flag)
    },[location.state?.flag])
    console.log("isLoggedIn",isLoggedIn);
    useEffect(()=>{
        isLoggedIn && navigate('/')
    },[isLoggedIn])


    const [payload,setPayload]= useState({
        phone:'',
        password:'',
        name:'',
    })
    const handleSubmit=async()=>{
        // console.log(payload)
        
        // console.log(response)
        
        let finalPayload= isRegister ? payload : {
            phone:payload.phone,
            password:payload.password
        }
        let invalids= validate(finalPayload)
        if(invalids===0) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
        console.log(invalids)
    }
    const validate=(payload)=>{
       
        let invalids = 0
        let fields=Object.entries(payload)
        fields.forEach(item=>{
            if(item[1] === '') {
                setinvalidfields(prev=>[...prev,{
                    name:item[0],
                    message:'Ban khong duoc bo trong truong nay',
            }])
            invalids++
        }
        })
        fields.forEach(item=>{
            switch(item[0]){
                case 'password':
                    if(item[1].length < 6){
                        setinvalidfields(prev=>[...prev,{
                            name:item[0],
                            message:'Mat khau phai co toi thieu 6 ki tu',
                    }])
                    invalids++
                    }
                    break;
                    case 'phone':
                        if( !+item[1]){
                            setinvalidfields(prev=>[...prev,{
                                name:item[0],
                                message:'So dien thoai khong hop le',
                        }])
                        invalids++
                        }
                        break

                default:
                    break;
            }
        })
        return invalids
    }


    return(
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-senibuld text-2xl mb-3">{isRegister ? 'dang ki tai khoan' : 'dang nhap'}</h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister && <InputForm label={'HO TEN'} setinvalidfields={setinvalidfields} invalidfields={invalidfields}  value={payload.name} setValue={setPayload} type={'name'}/>}
                <InputForm label={'so dien thoai'} setinvalidfields={setinvalidfields} invalidfields={invalidfields} value={payload.phone} setValue={setPayload} type={'phone'}/>
                <InputForm label={'mat khau'} setinvalidfields={setinvalidfields} invalidfields={invalidfields} value={payload.password} setValue={setPayload} type={'password'}/>
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
                onClick={()=>{
                    setisRegister(false)
                    setPayload({
                        phone:'',
                        password:'',
                        name:'',
                    })
                }}
                className="text-blue-500 hover:underline cursor-pointer"
                >
                    Dang nhap ngay
                </span></small>
                : <>
                    <small className="text-[blue] hover:text-[red] cursor-pointer">Ban quen mat khau</small>
                    <small 
                    onClick={()=>{
                        setisRegister(true)
                        setPayload({
                            phone:'',
                            password:'',
                            name:'',
                        })
                    }} 
                    className="text-[blue] hover:text-[red] cursor-pointer ">tao tai khoan moi</small>
                </>}

            </div>
            
        </div>
    )
}

export default Login