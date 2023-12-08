import { Typography } from "@material-tailwind/react";
import {
  Button,
  Card,
  Checkbox,
  Datepicker,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const LaporanKunjungan = () => {
  return (
    <div>
      <Card className="mt-[16px]">
        <Typography className="font-nunito font-semibold text-Blue1 text-base">
          Data Rencana Kunjungan
        </Typography>

        <form action="#" className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                value="Nama Pipeline"
                className="font-nunito text-Gray1 font-semibold text-base"
              />
            </div>
            <TextInput required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="Lokasi Kunjungan"
                className="font-nunito text-Gray1 font-semibold text-base"
              />
            </div>
            <Textarea required />
          </div>

          <div className="grid grid-cols-3 gap-6 w-full">
            <div>
              <div className="mb-2 block">
                <Label
                  value="Tujuan Kunjungan"
                  className="font-nunito text-Gray1 font-semibold text-base"
                />
              </div>
              <Select required>
                <option>Negosiasi</option>
                <option>Pembinaan</option>
                <option>Penagihan</option>
                <option>Lainnya</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  value="Tanggal Kunjungan"
                  className="font-nunito text-Gray1 font-semibold text-base"
                />
              </div>
              <Datepicker />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  value="Waktu Kunjungan"
                  className="font-nunito text-Gray1 font-semibold text-base"
                />
              </div>
              <TextInput required />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox defaultChecked></Checkbox>
            <Label className="font-bold text-black text-base">
              Data Sesuai Dengan Rencana Kunjungan
            </Label>
          </div>

          <Typography className="font-nunito font-semibold text-base text-Blue1">
            Upload File Kunjungan
          </Typography>
          <Card>
            <div className="w-full items-center justify-center">
              <Label className="flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Unggah
                    <span className="font-semibold text-Blue1"> Dokumen </span>
                    Disini
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or PDF
                  </p>
                </div>
                <FileInput className="hidden" />
              </Label>
              <FileInput className="mt-5" />
            </div>
          </Card>

          <Typography className="font-nunito font-semibold text-base text-Blue1">
            Hasil Kunjungan
          </Typography>
          <Textarea />
        </form>
      </Card>

      <div className="flex justify-end mt-6">
        <Link to="/riwayatkunjungan">
          <Button outline color="failure">
            Kembali
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LaporanKunjungan;
