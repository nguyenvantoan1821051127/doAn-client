import React,{useCallback} from "react";
import logo from '../../assets/logo-removebg-preview.png'
import { Button } from "../../components";
import icons from '../../ultils/icons'
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const {AiOutlinePlusCircle}= icons


const Header=()=>{
    const navigate = useNavigate()
    const gotLogin=useCallback(()=>{
        navigate(path.LOGIN)
    },[])
    return(
        <div className="w-1100">
            <div className="w-1100 flex itens-center justify-between">
                <img 
                src={logo}
                alt='logo'
                className='w=[240px] h=[70px] object-contain' 
                />
                <div className="flex items-center gap-1">
                    <small>agoda xin chao!</small>
                    <Button 
                        text={'dang nhap'}
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]'
                        onClick={gotLogin}    
                    />
                    <Button 
                        text={'dang ki'}
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]'
                        IcAlter={AiOutlinePlusCircle}
                        onClick={gotLogin}       
                    />
                    <Button text={'dang tin'}textColor='text-white' bgColor='bg-secondary2'IcAlter={AiOutlinePlusCircle}/>
                </div>
            </div>
        </div>
        
    )
}

export default Header