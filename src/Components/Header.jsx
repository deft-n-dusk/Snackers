import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {LOGO_URL} from "../utils/constants"
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from "react-redux";



function Header() {

  
  const onlineState = useOnlineStatus();


  // Selector
 // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);



  return (
    <div className=' w-full pb-4 bg-white  flex justify-between border-[#743a36] border-b-[1px] shadow-xl'>

      <div className='w-24 mt-4 ml-4'>
          <img className=' w-16 ml-10 rounded-full' src={LOGO_URL} alt="" />
      </div>

      <div className='navItems text-black '>

        <ul className='list-none flex gap-14 mt-10 mr-12 text-xl tracking-tight font-semibold text-[#743a36]'>

          <Link>Online Status : {onlineState === true ? "✅" : "❌"}</Link>

          <Link to='/'>Home </Link>

          <Link to='/about'>About </Link>

          <Link to='/contact'>Contact</Link>

          <Link to='/cart' className='font-semibold'>Cart ({cartItems.length})</Link>

          

        </ul>

      </div>

    </div>
  )
}

export default Header
