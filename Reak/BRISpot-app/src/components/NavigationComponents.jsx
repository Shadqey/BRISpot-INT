import React from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from '@material-tailwind/react';
import iconBell from '../assets/Interface Icon.svg'



const NavigationComponents = ( {currentPage} ) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-[#FAFAFA] drop-shadow-lg dark:bg-boxdark dark:drop-shadow-none">
        <div className="flex flex-grow items-center py-4 px-4 shadow-2 md:px-6 2xl:px-3">
            <div className="hidden sm:block">
                <Typography variant='h1' className='text-[#303030] text-xl font-extrabold font-Nunito w-[916px]'>{currentPage}</Typography>
            </div>
            
            <div className="flex items-center gap-8">
                <div className='h-6 w-6'><a href="#"><img src={iconBell} alt="" /></a></div>
                <a href="" className='flex h-6 w-6 gap-2 font-nunito'>
                  <img src={iconBell} alt="" />
                  Logout
                </a>
            </div>
        </div>
    </header>
  )
}

export default NavigationComponents