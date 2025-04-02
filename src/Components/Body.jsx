import React, { useState, useEffect} from 'react'
import Rest_card from './Rest_card'
import Shimmer from './Shimmer';
import { REST_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

//import resList from '../utils/mockdata'

function Body() {

 const [listres, setlistres]=useState([]);
 const [searchedList, setsearchedList]= useState([]);
 const [filterMode, setFilterMode] = useState('all');
    const [searchText, setsearchText]=useState("");

 useEffect(()=>{
  fetchdata();
 }, [])

  const fetchdata = async()=>{
     const data= await fetch(
      REST_API
     )

     const json=await data.json();
      
    
     setlistres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setsearchedList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
  }

  

  const OnlineState = useOnlineStatus();
  if(OnlineState === false)
    return(
  <div className="grid place-items-center mt-52">
    <h1 className="text-3xl font-semibold text-[#743a36]">
        Oops!!🙁 Looks like you are offline!!! Please check your internet connection.
      </h1>
  </div>
      
    );

    const handleSearchTextChange = (e) => {
      const value = e.target.value;
      setsearchText(value);
      
      // Filter listres as you type
      const searchedResults = listres.filter((res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase())
      );
      setsearchedList(searchedResults);
    };

    const handleFilterToggle = () => {
      if (filterMode === 'all') {
        // Filter to show only top-rated restaurants
        const topRated = listres.filter(res => res.info.avgRatingString > 4.3);
        setsearchedList(topRated);
        setFilterMode('top-rated'); // Update filter mode to 'top-rated'
      } else {
        // Show all restaurants
        setsearchedList(listres);
        setFilterMode('all'); // Update filter mode to 'all'
      }
    };
  
  

    if (listres.length === 0) {
      // Render shimmer components when listres is empty
      return (
        <Shimmer/>
      );
    }



  return (
    <div className='w-full h-screen bg-white pt-6'>

  
     
      <div className='filters ml-4 pl-12 flex gap-14'>

      <div className=' search flex gap-1'>
      <input type='text'
              
               className='p-2 border-[1px]  border-[#743a36] bg-[#F1EADA] text-[#743a36] rounded-md' 
               value={searchText}
               onChange={handleSearchTextChange}>
              
      </input>


      <button className='text-[#743a36] text-lg' 
      onClick={()=>{
        const searchedList = listres.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase() ))
       setsearchedList(searchedList)
      }}>
        Search</button>
      </div>



        <button type='button' className='filter-btn p-2 border text-[#F1EADA] border-[#F1EADA] rounded-full bg-[#743a36]'
        onClick={handleFilterToggle}
        >
          {filterMode === 'all' ? 'Top rated restaurants' : 'All restaurants'}
        </button>
      </div>
     
      <div className='rest_container flex flex-wrap justify-evenly pr-6 pb-12 gap-6'>

      { searchedList.length === 0 ? (
        <div className=' p-5 rounded-lg flex items-center justify-center h-[50vh]'>
        <h1 className='p-10 bg-[#F1EADA] border-2 text-[#743a36] font-semibold rounded-lg border-[#743a36]'>Uh-oh!🥺 Looks like nothing matches your search. Try something else!</h1>
        </div>
      ) :
        searchedList.map((restaurant)=>
        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Rest_card  resData={restaurant}/></Link>
      )
        }
        
        
      </div>
    </div>
  )
}

export default Body
