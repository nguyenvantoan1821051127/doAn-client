import React,{memo} from 'react'

const InputForm = ({label,value, setValue,type,invalidfields,setinvalidfields}) => {
  return (
    <div>
        <label htmlFor='phone' className='text-xs'>{label}</label>
        <input 
        type='text'
        id='phone'
        className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full'
        value={value}
        onChange={(e)=>setValue(prev =>({...prev,[type]:e.target.value}))}
        onFocus={()=>setinvalidfields([])}
        ></input>
        {invalidfields.length > 0 && invalidfields.some(i =>i.name===type) && <small className='text-blue-500-italic'>{invalidfields.find(i=>i.name===type)?.message}</small>}
    </div>
  )
}

export default memo(InputForm)