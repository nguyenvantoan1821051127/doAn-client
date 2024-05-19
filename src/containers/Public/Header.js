import React,{useCallback} from "react";
import logo from '../../assets/logo-removebg-preview.png'
import { Button } from "../../components";
import icons from '../../ultils/icons'
import { useNavigate,Link } from "react-router-dom";
import { path } from "../../ultils/constant";

const {AiOutlinePlusCircle}= icons


const Header=()=>{
    const navigate = useNavigate()
    const gotLogin=useCallback((flag)=>{
        navigate(path.LOGIN, {state:{flag }})
    },[])
    return(
        <div className="w-1100">
            <div className="w-1100 flex itens-center justify-between">
                <Link to={'/'}>
                <img 
                    src={logo}
                    alt='logo'
                    className='w=[240px] h=[70px] object-contain' 
                    />
                </Link>
                <div className="flex items-center gap-1">
                    <small>agoda xin chao!</small>
                    <Button 
                        text={'dang nhap'}
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]'
                        onClick={()=>gotLogin(false)}    
                    />
                    <Button 
                        text={'dang ki'}
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]'
                        IcAlter={AiOutlinePlusCircle}
                        onClick={()=>gotLogin(true)}       
                    />
                    <Button text={'dang tin'}textColor='text-white' bgColor='bg-secondary2'IcAlter={AiOutlinePlusCircle}/>
                </div>
            </div>
        </div>
        
    )
}

export default Header