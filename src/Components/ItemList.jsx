import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

function ItemList({items}) {
 
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }
    
  return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id}
                className = 'p-2 m-2 border-[#743a36] border-b-[1px] text-left'
                >

               <div className='flex justify-between bg-[#F1EADA] text-[#743a36] p-5 rounded-lg'>

                <div className='py-2 font-semibold'>
                    <span className='text-lg' >{item.card.info.name}</span>
                    <span > - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    

                    <p className='text-xs py-2 m-2'> {item.card.info.description} </p>
                    
                </div>

                  
                    <div>
                         { cartItems.some((cartItems) => cartItems.card.info.id === item.card.info.id) ?
                         (

                            <button className='bg-[#602e2a] right-[32.2rem] p-3 text-white rounded-lg absolute  '
                                  onClick = {() => handleRemoveItem(item)}
                          > Remove - </button>
                          ) :
                          (  <button className='bg-[#602e2a] right-[32.2rem] p-3 text-white rounded-lg absolute  '
                            onClick = {() => handleAddItem(item)}
                    > ADD + </button>) 
                         }
                          
                          
                    </div>
                    <img
                        src={item.card.info.imageId ? `${CDN_URL + item.card.info.imageId}` : 'path/to/default-image.jpg'}
                        className="w-44"
                        alt={item.card.info.name}
                    />

            
            </div>

            </div>
        ))}
    </div>
  );
};

export default ItemList