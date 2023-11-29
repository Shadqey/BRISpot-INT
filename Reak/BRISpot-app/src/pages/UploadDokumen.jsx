import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const UploadDokumen = () => {
  return (
    <div>
      <div className="w-full grid md:grid-cols-2 gap-2">
        <div className="text-center">
          <Link to="/newpipeline">
            <Button className="w-full bg-blue-gray-200">
              Form New Pipeline
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/uploaddokumen">
            <Button className="w-full bg-BgPrimary">Upload Dokumen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadDokumen;
