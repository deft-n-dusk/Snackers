import React from 'react'

function Shimmer() {
  return (
    <div  className="shimmer-container w-full h-screen pt-12 flex flex-wrap justify-evenly">
      {new Array(5).fill().map((_, index) => (
        <div key={index} className="shimmer-card w-52 h-[55vh] rounded-xl ml-8 mt-8 bg-[#E8E8E8]"></div>
      ))}
    </div>
  );
}

    
    
  
  

export default Shimmer
