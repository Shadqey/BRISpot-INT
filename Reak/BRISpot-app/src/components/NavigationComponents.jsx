import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



const NavigationComponents = ( {currentPage} ) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-blue-gray-300 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
            <div className="hidden sm:block">
                <h1 className='font-black text-2xl'>{currentPage}</h1>
            </div>
            <div className="flex items-center gap-10 2xsm:gap-7">
                <h1>Buat naruh Icon</h1>
                <h1>Icon 2</h1>
            </div>
        </div>
    </header>
  )
}

export default NavigationComponents