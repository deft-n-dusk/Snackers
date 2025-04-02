import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import {Provider} from 'react-redux'

import { Outlet } from 'react-router-dom'
import appStore from './utils/AppStore'




function App() {
 
  return (
    <Provider store={appStore}>

    <div className='w-full min-h-screen bg-white'>
     <Header/>
      <Outlet/>
    </div>
    
    </Provider>
  )
} 



 


export default App;

