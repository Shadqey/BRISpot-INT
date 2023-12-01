import React from "react";

import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Input,
} from "@material-tailwind/react";

import {
  BuildingOfficeIcon,
  UserGroupIcon,
  UserIcon,
  HomeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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

  const pageItem = [
    {
      id: 1,
      path: "/newpipeline",
      name: "New Pipeline",
      iconL: <HomeIcon />,
    },

    {
      id: 2,
      path: "/uploaddokumen",
      name: "New Pipeline",
      iconL: <HomeIcon />,
    },
  ];

  const currentPath = useLocation().pathname;
  const currentMenuItem = menuItem.find((item) => item.path === currentPath);
  const currentPageItem = pageItem.find((item) => item.path === currentPath);

  var currentPageName;

  if (currentMenuItem) {
    currentPageName = currentMenuItem.name;
  } else {
    currentPageName = currentPageItem.name;
  }

  return (
    <div className="bg-BackgroundColor">
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-Blue1">
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

      <div className="ml-64">
        <NavigationComponents currentPage={currentPageName} />
        <div className="ml-4 mr-4 pb-4">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default TestSidebar;
