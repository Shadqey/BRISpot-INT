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
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
 
export function SidebarComponents() {
  return (
    <Card className="h-[calc(100vh)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
            <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
            <Typography variant="h5" color="blue-gray">
                Sidebar
            </Typography>
        </div>

        <div className="p-2">
            <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
        </div>

        <List>
            <ListItem>
                <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
            </ListItem>

            <ListItem>
                <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
            </ListItem>
            
            <ListItem>
                <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
            </ListItem>

            <ListItem>
                <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
            </ListItem>
        </List>
    </Card>
  );
}
export default SidebarComponents