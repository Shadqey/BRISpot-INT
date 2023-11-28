import React from "react";

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
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { NavLink, useLocation } from "react-router-dom";
import NavigationComponents from "./NavigationComponents";

const TestSidebar = ({ children }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const menuItem = [
    {
      id: 1,
      path: "/",
      name: "Beranda",
      iconL: <HomeIcon />,
    },
    {
      id: 2,
      path: "/pipeline",
      name: "Pipeline",
      iconL: <UserGroupIcon />,
    },
    {
      id: 3,
      path: "/kunjungannasabah",
      name: "Kunjungan Nasabah",
      iconL: <MapIcon />,
    },
    {
      id: 4,
      path: "/daftarpengajuan",
      name: "Daftar Pengajuan",
      iconL: <UserIcon />,
    },
    {
      id: 5,
      path: "/daftarperusahaan",
      name: "Daftar Perusahaan",
      iconL: <BuildingOfficeIcon />,
    },
  ];

  const currentPath = useLocation().pathname;
  const currentMenuItem = menuItem.find((item) => item.path === currentPath);
  const currentPageName = currentMenuItem ? currentMenuItem.name : "";

  return (
    <div className="sidebar flex bg-BackgroundColor">
      <div className="sidebar-1 flex flex-1">
        {/* Sidebar */}
        <aside className="sidebar-2 h-screen max-w-[20rem] w-[20rem] p-4 bg-Blue1 rounded-br-[70px] sticky top-0 left-0 z-40">
          <div className="top-section mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>

          <div className="p-2 my-2 w-full">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
              className="!border bg-white"
              labelProps={{ className: "hidden" }}
              placeholder="Search"
            />
          </div>

          {menuItem.map((data, index) => (
            <List>
              <NavLink
                to={data.path}
                key={index}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <ListItem className="hover:bg-BgPrimary focus:bg-BgPrimary">
                  <ListItemPrefix>
                    <div className="icon h-5 w-5 text-white">{data.iconL}</div>
                  </ListItemPrefix>
                  <div className="link_text text-white">{data.name}</div>
                </ListItem>
              </NavLink>
            </List>
          ))}
        </aside>

        {/* Content */}
        <div className="w-full bg-BackgroundColor">
          <NavigationComponents currentPage={currentPageName} />
          <div className="m-4 h-auto">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSidebar;
