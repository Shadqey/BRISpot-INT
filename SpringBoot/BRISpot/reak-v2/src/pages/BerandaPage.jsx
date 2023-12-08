import React, { useEffect, useState } from "react";
import NavigationComponents from "../components/NavigationComponents";
import { Typography } from "@material-tailwind/react";
import { dataProfile } from "../data/index.js";
import { Card } from "flowbite-react";

const BerandaPage = ({ currentPage }) => {
  const [userObject, setUserObject] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/api/user/90168000")
      .then((response) => response.json())
      .then((data) => {
        setUserObject(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Typography
        variant="h4"
        className="text-center mt-10 mb-4 font-nunito font-extrabold text-BgPrimary"
      >
        Selamat Datang di Aplikasi BRISPOT WEB
      </Typography>

      <Card>
        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Nama
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
            {userObject.nama}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            PN
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
            {userObject.personalNumber}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            NIP
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
            {userObject.nip}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Jenis Kelamin
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
            {userObject.jenisKelamin}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Eselon
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
            {userObject.eselon}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Jabatan
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
            {userObject.jabatan}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Area Kerja
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
            {userObject.areaKerja}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Sub Area Kerja
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
            {userObject.subAreaKerja}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Unit Kerja
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
            {userObject.unitKerja}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Level ID
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
            {userObject.levelId}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Role Pengguna
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
            {userObject.rolePengguna}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Email
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
            {userObject.email}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-nunito font-bold text-Gray1 text-[16px] w-[193px]"
          >
            Nomor Handphone
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
            {userObject.nomorHandphone}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default BerandaPage;
