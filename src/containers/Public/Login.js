import React from "react";
import { InputForm,Button } from "../../components";


const Login=()=>{
    return(
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-senibuld text-2xl mb-3">Dang Nhap</h3>
            <div className="w-full flex flex-col gap-5">
                <InputForm label={'so dien thoai'}/>
                <InputForm label={'mat khau'}/>
                <Button 
                text='Dang nhap'
                textColor='text-white'
                bgColor='bg-secondary1'
                fullwidth
            />
            </div>
            <div className="mt-7 flex items-center justify-between">
                <small className="text-[blue] hover:text-[red]">Ban quen mat khau</small>
                <small className="text-[blue] hover:text-[red]">tao tai khoan moi</small>

            </div>
            
        </div>
    )
}

export default Login