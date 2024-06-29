import React from 'react'
import LOGO from "../images/logo4.png"
import BG from "../images/background.jpg"


export default function Signup() {
  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s')]">
  
    <content className="flex justify-center items-center h-screen w-screen ">
        <div className='bg-black text-white md:w-1/2 md:h-2/3'>
            <img src={LOGO} className=' w-max h-20'/>
            <div className='flex'>
            <div className='w-2/4 h-full'>
              <p>google</p>
                <div>
                </div>
            </div>
            <div className='w-2/4 h-full border-l-2 border-white'>
                <div className=' w-5/6 p-4 '>
                    <p className='pb-3'>Login</p>
                    <hr></hr>
                    <div className='flex flex-col pt-4 space-y-1'>
                    <label>Email</label>
                    <input type="email" placeholder='Your email' />
                    </div>
                    <div className='flex flex-col pt-4 space-y-1'>
                    <label>Password</label>
                    <input type="password" placeholder='Your email' />
                    </div>
                    <div className='  pt-7 items-center pb-7'>
                    <p className=' hover:underline hover:cursor-pointer float-left'>Forgot password?</p>
                    <button className='bg-slate-500 p-2 rounded-2xl float-right w-20'>Login</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </content>
    </div>
  )
}
