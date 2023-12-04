import { Card, Progress } from "flowbite-react";
import React from "react";
import { Buildings } from "iconsax-react";
import { Typography } from "@material-tailwind/react";
import logoCiti from "../assets/logo-citi.svg";

const ListMab = () => {
  return (
    <div className="h-screen">
      <Card className="mt-[16px]">
        <div className="flex items-center gap-3">
          <Buildings color="#00529C" variant="Bold" />
          <Typography className="font-nunit text-base font-semibold text-Blue1">
            Detail MAB Perusahaan
          </Typography>
        </div>

        <div className="grid md:grid-cols-4 gap-6 w-full">
          <div className="">
            <img src={logoCiti} alt="" className="w-20" />
          </div>

          <div className="w-[505px]">
            <Typography className="font-bold font-nunito text-Black text-2xl">
              Citibank
            </Typography>
            <div className="flex items-start gap-6 mt-[8px]">
              <div className="w-[300px]">
                <Typography className="font-nunito text-Black font-semibold text-base">
                  Alamat
                </Typography>
                <p className="font-nunito text-Black font-normal text-base">
                  World Trade Center Lt. 1, Jl. Jenderal Sudirman Kav. 29-31
                  Jakarta Selatan
                </p>
              </div>

              <div className="">
                <Typography className="font-nunito text-Black font-semibold text-base">
                  Sektor Industri
                </Typography>
                <p className="font-nunito text-Black font-normal text-base">
                  Perbankan
                </p>
              </div>
            </div>

            <div className="mt-[22px]">
              <Progress
                progress={45}
                progressLabelPosition="inside"
                textLabel="SLA Prakarsa Bisnis"
                textLabelPosition="outside"
                className="font-nunito font-bold"
                size="lg"
                labelProgress
                labelText
              />
            </div>
          </div>

          <div className=""></div>
        </div>
      </Card>
    </div>
  );
};

export default ListMab;
