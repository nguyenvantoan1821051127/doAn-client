import React from 'react'
import { InputForm,Button } from "../../components";


const Register = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
    <h3 className="font-senibuld text-2xl mb-3">Dang ki</h3>
    <div className="w-full flex flex-col gap-5">
        <InputForm label={'Ho ten'}/>
        <InputForm label={'email'}/>
        <InputForm label={'so dien thoai'}/>
        <InputForm label={'mat khau'}/>
        <InputForm label={'xac nhan mat khau'}/>
        <Button 
        text='Dang ki'
        textColor='text-white'
        bgColor='bg-secondary1'
        fullwidth
    />
    </div>
</div>
  )
}

export default Register