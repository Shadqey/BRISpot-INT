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

      <div className="pl-[30px] mt-[30px]">
        <form action="">
          <div className="w-[full] mr-[30px] mb-2">
            {/* Grid dengan 2 Col */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Kode Perusahaan */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Kode Perusahaan
                </label>
                <Select
                  label="Kode Perusahaan"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  <Option>PLE9322</Option>
                  <Option>SXC9474</Option>
                  <Option>EF96743</Option>
                  <Option>P593442</Option>
                  <Option>ADLV074</Option>
                  <Option>SYA1003</Option>
                  <Option>MJJY547</Option>
                  <Option>AXLD668</Option>
                  <Option>BFV3873</Option>
                </Select>
              </div>

              {/* Nama Perusahaan */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Nama Perusahaan
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="Nama Perusahaan"
                />
              </div>

              {/* Grup Usaha */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Grup Usaha
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="Grup Usaha"
                />
              </div>

              {/* Kategori Bank */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Kategori Bank
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>

              {/* Negara Asal */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Negara Asal
                </label>
                <Select
                  label="Select Country"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  {countries.map(({ name }) => (
                    <Option key={name} value={name}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </div>

              {/* Kategori Perusahaan */}
              <div>
                <label className="block mb-2 text-[16px] font-semibold text-Black">
                  Kategori Perusahaan
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </div>

            {/* Alamat Perusahaan */}
            <label className="block mt-6 mb-2 text-[16px] font-semibold text-Black">
              Alamat Perusahaan
            </label>
            <Textarea
              type="email"
              className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />

            {/* Deskripsi Perusahaan */}
            <label className="block mt-5 mb-2 text-[16px] font-semibold text-Black">
              Deskripsi Perusahaan
            </label>
            <Textarea
              type="email"
              className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />

            <div className="grid gap-2 mb-6 md:grid-cols-3 mt-2">
              <div>
                <label className="block mb-2 mt-2 text-[16px] font-normal text-Black">
                  Sektor Industri
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>

              <div>
                <label className="block mb-2 mt-2 text-[16px] font-normal text-Black">
                  Nomor NPWP
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>

              <div>
                <label className="block mb-2 mt-2 text-[16px] font-normal text-Black">
                  Logo Perusahaan
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadDokumen;
