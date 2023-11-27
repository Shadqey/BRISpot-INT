import React from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from '@material-tailwind/react';



const NavigationComponents = ( {currentPage} ) => {
  const navItem =[
    {
        name:"Logout",
        iconL:<BellIcon/>
    },
  ]
  return (
    <header className="sticky top-0 z-999 flex w-full bg-[#FAFAFA] drop-shadow-lg dark:bg-boxdark dark:drop-shadow-none">
        <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-3">
            <div className="hidden sm:block">
                <Typography variant='h1' className='font-[#303030] text-xl font-extrabold'>{currentPage}</Typography>            </div>
            <div className="flex items-center gap-10 2xsm:gap-7">
                <h1>Buat naruh Icon</h1>
                <h1>Icon 2</h1>
            </div>
        </div>
    </header>
  )
}

export default NavigationComponents