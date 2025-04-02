import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

function Cart() {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl text-[#743a36] font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>

        <button 
          className='p-2 m-6 bg-[#743a36] text-white rounded-lg'
          onClick={handleClearCart}>
         Clear Cart</button>

          
         {cartItems.length === 0 && 
         <div className="p-5 rounded-lg flex items-center justify-center h-[40vh]">
            <h1 className="text-xl p-10 bg-[#F1EADA] border-2 text-[#743a36] font-semibold rounded-lg border-[#743a36]">
                Your Cart feels so light!!!🛒 Add some items!
            </h1>
          </div>
        }
            <ItemList items = {cartItems} />
        </div>
    </div>
  )
}

export default Cart