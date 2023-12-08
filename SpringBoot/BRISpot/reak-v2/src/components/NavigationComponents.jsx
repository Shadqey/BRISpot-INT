import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import iconBell from "../assets/Interface Icon.svg";

const NavigationComponents = ({ currentPage }) => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h1"
          className="text-[#303030] text-xl font-extrabold font-Nunito"
        >
          {currentPage}
        </Typography>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>

            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationComponents;
