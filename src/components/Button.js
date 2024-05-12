import React,{memo} from 'react'


const Button = ({text,textColor,bgColor,IcAlter,onClick,fullwidth}) => {
  return (
    <button
    type='button'
    className={`pg-2 px-4 ${textColor} ${bgColor} ${fullwidth && 'w-full'} outline-none rounded-nd hover:underline flex items-center justify-center gap-1`}
    onClick={onClick}>
        <span>{text} </span>   
        <span>{IcAlter && <IcAlter />} </span>
    </button>
  )
}

export default memo(Button)