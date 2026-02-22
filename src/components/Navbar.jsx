import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

function Navbar() {

    const [visible, setVisible] = useState(false);
    const {setShowSearch} = useContext(ShopContext);


  return (
    <div className='flex items-center justify-between py-5 font-medium '>
        
        <Link to='/'><img src={assets.logo} alt="logo" className='w-46' /></Link>

        <ul className='hidden sm:flex text-sm gap-5 text-slate-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden'/>
            </NavLink>
             <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
            <div className='group relative '>
                <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
                
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 rounded text-gray-500'>
                        <p className='cursor-pointer hover:text-black'>My Account</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>

                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5 cursor-pointer' />
            <p className='text-xs text-white bg-slate-700 rounded-full w-4 h-4 flex items-center justify-center absolute -bottom-2 -right-2'>3</p> 
            </Link>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden' />
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

            <div className='flex flex-col text-gray-600' >
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt="close" className='h-4 rotate-180' />
                    <p>Close</p>
                </div>

                <NavLink onClick={()=>setVisible(false)} to='/' className='flex flex-col items-center gap-1 py-4 border-t border-slate-200'>
                <p>Home</p>
                <hr className='w-1/9 border-none h-[1.5px] bg-slate-700 hidden'/>
                </NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/collection' className='flex flex-col items-center gap-1 py-4 border-t border-slate-200'>
                <p>Collection</p>
                <hr className='w-1/9 border-none h-[1.5px] bg-slate-700 hidden'/>
                </NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/about' className='flex flex-col items-center gap-1 py-4 border-t border-slate-200'>
                <p>About</p>
                <hr className='w-1/9 border-none h-[1.5px] bg-slate-700 hidden'/>
                </NavLink>
                 <NavLink onClick={()=>setVisible(false)} to='/contact' className='flex flex-col items-center gap-1 py-4 border-t border-slate-200'>
                <p>Contact</p>
                <hr className='w-1/9 border-none h-[1.5px] bg-slate-700 hidden'/>
                </NavLink>

            </div>

        </div>
      
    </div>
  )
}

export default Navbar
