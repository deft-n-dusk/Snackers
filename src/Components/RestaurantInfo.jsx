import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants';
import {useParams} from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import MenuCategory from './MenuCategory';
import MenuShimmer from './MenuShimmer';

function RestaurantInfo() {

const {restId} =useParams();

//fetching data from custom hook useRestaurantMenu
const resInfo = useRestaurantMenu(restId);

const[showIndex, setShowIndex] = useState(null);


if(resInfo === null) return <MenuShimmer/>;


const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const itemCards = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

                    

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) => 
    c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  return (
    <div className='text-[#743a36] pb-16'>
        <h1  className='font-bold text-2xl mb-2 text-center mt-5 '>{name}</h1>
        <p className='font-semibold text-lg mt-4 text-center' > {cuisines.join(", ")} - {costForTwoMessage} </p>

        {
  itemCards?.length > 0 ? (

    categories.map((category, index) => (

      <MenuCategory

       key={category?.card?.card?.categoryId} 
       data={category?.card?.card}
       showItems={index === showIndex}
       setShowIndex={() => setShowIndex(index === showIndex ? null : index)} 
      />
    ))
  ) : (
    <div className="flex items-center justify-center h-[50vh]">
  <h1 className="font-bold text-2xl mb-2 text-center">No menu items available.</h1>
</div>
  )
}

</div>
    
  )
}

export default RestaurantInfo