import React from 'react'
import github from "../assets/github.svg"
import theme from "../assets/theme.svg"

const Navbar = () => {
    return (
        <>
            <div className='flex justify-end gap-4'>
                <div className='flex justify-center items-center w-10 rounded p-2 bg-[#e9e9e9]'>
                    <img src={github} alt="" />
                </div>
                <div className='flex justify-center items-center w-10 rounded p-2 bg-[#e9e9e9]'>
                    <img src={theme} alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bg-[#f9f9f9] w-2/5 min-h-80 border-b-8
             border-[#fd6259] p-5'>

                    <div>
                        <h1 className='text-center text-3xl font-normal'>TIMER</h1>
                    </div>

                    <div>
                     <div></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
