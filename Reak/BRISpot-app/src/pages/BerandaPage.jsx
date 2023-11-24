import React from 'react'
import NavigationComponents from '../components/NavigationComponents'
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const BerandaPage = ( {currentPage }) => {

  return (
    <div>
      <Typography variant='h4' className='text-center mt-10'>Selamat Datang di Aplikasi BRISPOT WEB</Typography>
      <div>
        <Card className="mt-6 w-full">
          <CardBody>
            <div className="flex">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>

              <Typography variant="h6" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default BerandaPage