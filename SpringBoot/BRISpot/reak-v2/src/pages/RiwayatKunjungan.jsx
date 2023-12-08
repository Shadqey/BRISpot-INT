import { Badge, Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logoHSBC from "../assets/logo-hsbc.svg";
import { Typography } from "@material-tailwind/react";
import { Calendar, Clock } from "iconsax-react";

const RiwayatKunjungan = () => {
  return (
    <div className="h-screen">
      <Card className="mt-[16px]">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="text-center">
            <Link to="/kunjunganaktif">
              <Button
                className="w-full bg-Gray4 hover:bg-Gray3 font-nunio text-Gray2"
                color="gray"
              >
                Kunjungan Aktif
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Link to="">
              <Button className="w-full bg-Blue1 font-Nunito" color="blue">
                Riwayat Kunjungan
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      <Card className="mt-[32px]">
        <div className="grid grid-cols-3 gap-6 w-full grid-flow-col justify-between">
          <Card>
            <div className="flex justify-end text-center">
              <Badge color="success" size="sm">
                Sudah Dikunjungi
              </Badge>
            </div>

            <img
              src={logoHSBC}
              className="mx-auto h-24 outline outline-2 outline-Blue1 rounded-full mt-6"
            />

            <Typography className="font-nunito text-base font-semibold text-Gray1">
              HSBC Indonesia
            </Typography>

            <Typography className="font-nunito text-sm font-normal text-Gray2">
              Negosiasi
            </Typography>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex items-center gap-2">
                <Calendar color="#999999" />
                <Typography className="font-semibold font-nunito text-Gray1 text-sm">
                  2023-10-24
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <Clock color="#999999" />
                <Typography className="font-semibold font-nunito text-Gray1 text-sm">
                  08.00 WIB
                </Typography>
              </div>
            </div>

            <Link to="/laporankunjungan">
              <Button color="blue" className="bg-Blue1 hover:bg-Blue2 w-full">
                Lihat Laporan
              </Button>
            </Link>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default RiwayatKunjungan;
