import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err=useRouteError();
    console.log(err);
  return (


    <div>
        <h1 className="text-3xl font-semibold text-gray-800">OOPS!!!!!</h1>
        <h2 className="text-3xl font-semibold text-gray-800">SOMETHING WENT WRONG!!!!</h2>
        <h1 className="text-2xl  text-gray-800">{err.status} : {err.statusText}</h1>
       
    </div>
  )
}

export default Error