import { useEffect, useState } from "react";

const useOnlineStatus= () => {
    const [onlineState, setOnlineState] =  useState(true);

    //check for online status
    useEffect(() => {

        window.addEventListener("offline", ()=>{
            setOnlineState(false);
        });

        window.addEventListener("Online", () => {
            setOnlineState(true);
        });
        }, []);

        return onlineState;
};

export default useOnlineStatus;