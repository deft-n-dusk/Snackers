import React from 'react'

function MenuShimmer() {
  return (
    <div className='mt-24'>
    {new Array(5).fill().map((_, index) => (
      <div key={index} className="mt-10 mx-auto text-center bg-[#E8E8E8] rounded-lg shadow-lg w-6/12 p-6 cursor-pointer"></div>
    ))}
 </div>
  )
}

export default MenuShimmer