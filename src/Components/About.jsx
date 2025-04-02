import React from 'react'
import UserClass from './UserClass'

function About() {
  return (
    <div>
        <UserClass name={"Sonal Tyagi"} location={"India"} role={"Front-end Developer"}/>
        <div className='w-8/12 mx-auto flex justify-center items-center text-center p-10 font-semibold text-[#743a36] border-2 border-[#743a36]  bg-[#F1EADA]'>
          <p>This is a React-based frontend project for a food delivery app that fetches live data from the Swiggy API to display a list of nearby restaurants and their menus. Users can explore restaurant details, view menu items, and easily add food to their cart. The app utilizes Redux for state management, ensuring a smooth and consistent cart experience. Tailwind CSS is used for styling, providing a clean and modern interface. By integrating live data from Swiggy, the app offers a seamless and interactive food ordering experience.</p>
        </div>
    </div>
  )
}

export default About