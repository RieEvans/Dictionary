import React, {useContext, useState } from 'react'
import { InputContext } from '../App'



export const Header = () => {
    const {inputValue, setInputValue} = useContext(InputContext)
    const [value, setValue] = useState("")

    const handleInput = e => setValue(e.target.value)

    const handleSubmit = () => {
        setInputValue(value)
        setValue("")
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter'){
            setInputValue(value)
            setValue("")
        }
    }
  return (
    <header className='bg-slate-900 w-full relative '>
        <section className='m-auto w-[80%] py-8'>
            <h1 className='text-zinc-100 text-center text-4xl tracking-wide'>Dictionary</h1> {/* Title Section */}
            <p className='text-center text-sm text-zinc-100 opacity-70 mt-2'>Find the meaning of the word you want</p>
            {/* Search Bar Section */}
            <div className=' mt-5'>
                    <div className='relative overflow-hidden'>
                      <input value={value} onChange={handleInput} onKeyDown={handleOnKeyDown} className='p-2 w-full w-full  rounded-md outline outline-offset-2 outline-4 outline-sky-600 overflow-hidden ' type="text" placeholder='Search' />
                      <button onClick={handleSubmit} className='bg-blue-600 py-2 px-2 text-white rounded-tr-md rounded-br-md absolute right-[-1px] '>Search</button>
                    </div>
                    {/* If the Input value is true display it with the value else empty */}
                {inputValue && <p className='mt-5 text-center text-zinc-100'>Results for : {inputValue}</p> }
            </div>
        </section>
        
    </header>
  )
}
