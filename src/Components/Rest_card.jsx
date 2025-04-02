import React from 'react'
import {CDN_URL} from "../utils/constants"

function Rest_card(props) {
const {resData}=props;
const {name,  avgRatingString, locality, sla}=resData?.info;

  return (
    <div className='w-52 h-5/6 bg-[#F1EADA] rounded-xl ml-8 mt-8 hover:border-[1px] border-[#743a36]' >
      <img className='overflow-hidden p-2 rounded-xl w-full h-1/2'
       src={CDN_URL+resData.info.cloudinaryImageId}></img>
      <div className='p-4 leading-loose text-[#743a36]'>
      <h1 className='font-bold text-lg'>{name}</h1>
      <h1>{locality}</h1>
      <h1>{avgRatingString} ★</h1>
      <h1> {sla.slaString}</h1>
      </div>
    </div>
  )
}

export default Rest_card
