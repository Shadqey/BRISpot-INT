import React from 'react'

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
} from "@material-tailwind/react";

import {
    BuildingOfficeIcon,
    UserGroupIcon,
    UserIcon,
    HomeIcon,
    PowerIcon,
    MapIcon,
} from "@heroicons/react/24/solid";

import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";

import { NavLink, useLocation } from 'react-router-dom';
import NavigationComponents from './NavigationComponents';

const TestSidebar = ( {children} ) => {
    const menuItem =[
        {
            path:"/",
            name:"Beranda",
            iconL:<HomeIcon/>
        },
        {
            path:"/pipeline",
            name:"Pipeline",
            iconL:<UserGroupIcon/>
        },
        {
            path:"/kunjungannasabah",
            name:"Kunjungan Nasabah",
            iconL:<MapIcon/>
        },
        {
            path:"/daftarpengajuan",
            name:"Daftar Pengajuan",
            iconL:<UserIcon/>
        },
        {
            path:"/daftarperusahaan",
            name:"Daftar Perusahaan",
            iconL:<BuildingOfficeIcon/>
        },
    ]

    const currentPath = useLocation().pathname;
    const currentMenuItem = menuItem.find(item => item.path === currentPath)
    const currentPageName = currentMenuItem ? currentMenuItem.name : '';

    return (
        <div className="flex flex-col bg-BackgroundColor">
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="h-[calc(100vh)] max-w-[20rem] w-[20rem] p-4 shadow-xl sticky top-0 bg-Blue1 rounded-br-[70px]">
                    <div className="top-section mb-2 flex items-center gap-4 p-4">
                        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                        <Typography variant="h5" color="blue-gray">
                            Sidebar
                        </Typography>
                    </div>
                    
                    <div className="p-2 my-2 w-56">
                        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" className='!border bg-white' labelProps={{className: "hidden",}} placeholder='Search'/>
                    </div>
                    {
                        menuItem.map((item, index) =>(
                            <NavLink to={item.path} key={index} className="link">
                                <ListItem className='hover:bg-BgPrimary focus:bg-BgPrimary my-2'>
                                    <ListItemPrefix>
                                        <div className="icon h-5 w-5 text-white">{item.iconL}</div>
                                    </ListItemPrefix>
                                    <div className="link_text text-white">{item.name}</div>
                                </ListItem> 
                            </NavLink>
                        ))
                    }
                </div>
                
                {/* Content */}
                <div className='w-full h-screen bg-BackgroundColor'>
                    <NavigationComponents currentPage={currentPageName}/>
                    <div className='m-4'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TestSidebar