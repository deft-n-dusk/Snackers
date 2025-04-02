import { MENU_API} from "./constants";
import { useState, useEffect } from "react";

//custom hook for fetching restaurant menu data
const useRestaurantMenu = (restId) => {

    const[resInfo, setresInfo]= useState(null);

    useEffect(()=>{
        fetchInfo();
    },[]);

    const fetchInfo= async()=>{
        const data= await fetch ( MENU_API + restId)
        const json=await data.json();
        setresInfo(json.data);
    };

    return resInfo;

}

export default useRestaurantMenu;