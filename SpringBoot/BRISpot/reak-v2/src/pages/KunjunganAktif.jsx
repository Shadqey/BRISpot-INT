import React, { useState } from "react";
import {
  Button,
  Card,
  Datepicker,
  Modal,
  Select,
  TextInput,
  Textarea,
  Badge,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Calendar, Clock } from "iconsax-react";

import logoNBD from "../assets/logo-nbd.svg";
import logoKDB from "../assets/logo-kdb.svg";

const KunjunganAktif = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-screen">
      <Card className="mt-[16px]">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="text-center">
            <Link to="/kunjunganaktif">
              <Button className="w-full bg-Blue1 font-Nunito" color="blue">
                Kunjungan Aktif
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/riwayatkunjungan">
              <Button
                className="w-full bg-Gray4 hover:bg-Gray3 font-nunio text-Gray2"
                color="gray"
              >
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
              <Badge color="failure" size="sm">
                Belum Dikunjungi
              </Badge>
            </div>

            <img
              src={logoNBD}
              className="mx-auto h-24 outline outline-2 outline-Blue1 rounded-full mt-6"
            />

            <Typography className="font-nunito text-base font-semibold text-Gray1">
              Emirates NBD
            </Typography>

            <Typography className="font-nunito text-sm font-normal text-Gray2">
              Penagihan
            </Typography>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex items-center gap-2">
                <Calendar color="#999999" />
                <Typography className="font-semibold font-nunito text-Gray1 text-sm">
                  2023-11-24
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
              <Button
                color="gray"
                className="bg-Gray4 hover:bg-Gray3 w-full"
                disabled
              >
                Buat Laporan
              </Button>
            </Link>
          </Card>

          <Card>
            <div className="flex justify-end text-center">
              <Badge color="failure" size="sm">
                Belum Dikunjungi
              </Badge>
            </div>

            <img
              src={logoKDB}
              className="mx-auto h-24 outline outline-2 outline-Blue1 rounded-full mt-6"
            />

            <Typography className="font-nunito text-base font-semibold text-Gray1">
              KDB Bank
            </Typography>

            <Typography className="font-nunito text-sm font-normal text-Gray2">
              Pembinaan
            </Typography>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex items-center gap-2">
                <Calendar color="#999999" />
                <Typography className="font-semibold font-nunito text-Gray1 text-sm">
                  2023-12-24
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
              <Button
                color="gray"
                className="bg-Gray4 hover:bg-Gray3 w-full"
                disabled
              >
                Buat Laporan
              </Button>
            </Link>
          </Card>
        </div>

        <Button
          color="blue"
          className="mx-auto w-3/5 bg-Blue1 hover:bg-Blue2 font-nunito font-semibold mt-1"
          onClick={() => setOpenModal(true)}
        >
          Tambah Kunjungan
        </Button>

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="bg-Blue1 h-16 items-center text-white">
            <p className="text-white font-nunito text-base">
              Tambah Data Kunjungan
            </p>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Typography className="w-full font-nunito text-base font-semibold text-Gray1">
                  Nama Pipeline
                </Typography>
                <TextInput required className="w-[1900px]"></TextInput>
              </div>
              <div className="flex items-center gap-4">
                <Typography className="w-full font-nunito text-base font-semibold text-Gray1">
                  Tujuan Kunjungan
                </Typography>
                <Select required className="w-[1900px]">
                  <option>Negosiasi</option>
                  <option>Pembinaan</option>
                  <option>Penagihan</option>
                  <option>Lainnya</option>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Typography className="w-full font-nunito text-base font-semibold text-Gray1">
                  Tanggal Kunjungan
                </Typography>
                <Datepicker required className="w-[1900px]" />
              </div>
              <div className="flex items-center gap-4">
                <Typography className="w-full font-nunito text-base font-semibold text-Gray1">
                  Waktu Kunjungan
                </Typography>
                <TextInput required className="w-[1900px]"></TextInput>
              </div>
              <div className="flex items-center gap-4">
                <Typography className="w-full font-nunito text-base font-semibold text-Gray1">
                  Lokasi Kunjungan
                </Typography>
                <Textarea required className="w-[1800px]" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setOpenModal(false)}
              color="blue"
              className="bg-Blue1 hover:bg-Blue2"
            >
              Simpan
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </div>
  );
};

export default KunjunganAktif;
