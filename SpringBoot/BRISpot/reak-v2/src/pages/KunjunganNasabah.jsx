import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import {
  Button,
  Card,
  Datepicker,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { Link } from "react-router-dom";
import imageLKN from "../assets/img-lkn.svg";
import { Typography } from "@material-tailwind/react";

const KunjunganNasabah = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-screen">
      <Card className="mt-[16px]">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="text-center">
            <Link to="/kunjungannasabah">
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
        <div className="text-center">
          <img src={imageLKN} alt="" className="mx-auto h-44" />
          <Typography className="text-Gray1 font-nunito text-3xl font-bold mt-2">
            Perhatian!
          </Typography>
          <Typography className="text-Gray1 font-nunito font-normal">
            Anda belum membuat jadwal Kunjungan
          </Typography>
        </div>
        <Button
          className="mx-auto w-3/5 bg-Blue1 hover:bg-Blue2 font-nunito font-semibold"
          color="blue"
          onClick={() => setOpenModal(true)}
        >
          Tambah Kunjungan
        </Button>
      </Card>

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
    </div>
  );
};

export default KunjunganNasabah;
