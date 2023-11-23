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
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';
const TestSidebar = ({children}) => {
    const menuItem =[
        {
            path:"/",
            name:"Beranda",
            iconL:<InboxIcon/>
        },
        {
            path:"/kunjungannasabah",
            name:"KunjungaNasabah",
            iconL:<PowerIcon/>
        },
        {
            path:"/pipeline",
            name:"PiplinePage",
            iconL:<Cog6ToothIcon/>
        },
    ]
    return (
        <div className="container flex">
            <div className="sidebar h-[calc(100vh)] max-w-[20rem] p-4 shadow-xl">
                <div className="top-section mb-2 flex items-center gap-4 p-4">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                    <Typography variant="h5" color="blue-gray">
                        Sidebar
                    </Typography>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="icon h-5 w-5">{item.iconL}</div>
                                </ListItemPrefix>
                                <div className="link_text">{item.name}</div>
                            </ListItem> 
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
  )
}

export default TestSidebar