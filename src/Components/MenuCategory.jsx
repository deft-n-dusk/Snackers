import React from 'react';
import ItemList from './ItemList'


function MenuCategory({data, showItems, setShowIndex}) {
 
   
  

  const handleClick = () => {
    setShowIndex(); 
  }

 

  return (
    
    <div className='mt-4 mx-auto text-center bg-[#f9f3e2] rounded-lg shadow-lg w-6/12 p-4 cursor-pointer'
     >

        <div onClick={handleClick}
         className='flex justify-between font-bold'
         
        >
            <span>{data.title} ({data.itemCards.length})</span>
            <span className='cursor-pointer'>⮟</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}

    </div>

  )
}

export default MenuCategory