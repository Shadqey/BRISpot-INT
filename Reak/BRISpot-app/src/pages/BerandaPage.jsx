import React from 'react'
import NavigationComponents from '../components/NavigationComponents'
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { dataProfile } from "../data/index.js";

const BerandaPage = ( {currentPage }) => {

  return (
    <div>
      <Typography variant='h4' className='text-center mt-10 mb-4 font-nunito font-extrabold text-BgPrimary'>Selamat Datang di Aplikasi BRISPOT WEB</Typography>
      <div className='bg-white rounded-lg py-[25px]'>
        {dataProfile.map((beranda) => {
                return(
                  <div className='flex ml-[30px]'>
                    <Typography color="blue-gray" className="mb-2 font-nunito font-bold text-Gray1 text-[16px] w-[193px]">
                      {beranda.nama}
                    </Typography>
                  
                    <Typography color="blue-gray" className="mb-2 font-nunito font-bold text-Gray1 text-[16px] pr-[24px]">
                      :
                    </Typography>

                    <Typography color="blue-gray" className="mb-2 font-nunito font-normal text-Gray1 text-[16px]">
                      {beranda.data}
                    </Typography>                  
                  </div>
                )
        })}
      </div>
    </div>
  )
}

export default BerandaPage