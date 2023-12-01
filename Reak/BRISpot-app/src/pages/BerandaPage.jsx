import React from "react";
import NavigationComponents from "../components/NavigationComponents";
import { Typography } from "@material-tailwind/react";
import { dataProfile } from "../data/index.js";
import { Card } from "flowbite-react";

const BerandaPage = ({ currentPage }) => {
  return (
    <div>
      <Typography
        variant="h4"
        className="text-center mt-10 mb-4 font-nunito font-extrabold text-BgPrimary"
      >
        Selamat Datang di Aplikasi BRISPOT WEB
      </Typography>

      <Card>
        {dataProfile.map((beranda) => {
          return (
            <div className="flex">
              <Typography
                color="blue-gray"
                className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
              >
                {beranda.nama}
              </Typography>

              <Typography
                color="blue-gray"
                className="font-nunito font-bold text-Gray1 text-[16px] pr-[24px]"
              >
                :
              </Typography>

              <Typography
                color="blue-gray"
                className="font-nunito font-normal text-Gray1 text-[16px]"
              >
                {beranda.data}
              </Typography>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default BerandaPage;
