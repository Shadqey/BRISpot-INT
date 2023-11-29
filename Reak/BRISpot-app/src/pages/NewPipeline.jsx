import {
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import iconForm from "../assets/icon-form.svg";

const NewPipeline = () => {
  return (
    <div>
      <div className="w-full grid md:grid-cols-2 gap-2">
        <div className="text-center">
          <Link to="/newpipeline">
            <Button className="w-full bg-BgPrimary">Form New Pipeline</Button>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/uploaddokumen">
            <Button className="w-full bg-blue-gray-300">Upload Dokumen</Button>
          </Link>
        </div>
      </div>

      <div className="w-full bg-white mt-6 rounded-xl">
        <div className="flex items-center pl-[30px] pt-[30px]">
          <img src={iconForm} alt="" className="h-6 w-6" />
          <Typography className="font-bold text-[18px] text-Blue1 font-Nunito">
            Forum New Pipeline
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NewPipeline;
