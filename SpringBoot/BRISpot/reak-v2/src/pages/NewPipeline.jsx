import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import axios from 'axios';
import { FileInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconForm from "../assets/icon-form.svg";
import { useCountries } from "use-react-countries";

const NewPipeline = () => {
  const { countries } = useCountries();
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const initialPipelineState = {
    kodePerusahaan: '',
    namaPerusahaan: '',
    grupUsaha: '',
    kategoriBank: '',
    negaraAsal: '',
    jenisBank: '',
    alamatPerusahaan: '',
    deskripsiPerusahaan: '',
    logoPerusahaan: null,
    fasilitasPinjaman: '',
    currency: '',
    plafond: '',
    eksposure: '',
  };

  const [pipeline, setPipeline] = useState(initialPipelineState);
  // const navigate = useNavigate();
  // const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add Pipeline Method
    try {
      const response = await axios.post("http://localhost:8080/pipeline", pipeline);
      console.log("Pipeline added:", response.data);
    } catch (error) {
      console.error("Pipeline NOT added:", error);
    }
  }

  function handleMultipleChange(event) {
    setFiles([...event.target.files]);
  }

  function handleMultipleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:5173/uploadFiles";
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };



    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles(response.data.files);
      })
      .catch((error) => {
        console.error("Error uploading files: ", error);
      });
  }

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-4 mr-[30px] w-full">
        <div className="text-center">
          <Link to="/newpipeline">
            <Button className="w-full bg-BgPrimary">Form New Pipeline</Button>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/uploaddokumen">
            <Button className="w-full bg-blue-gray-300">Upload Dokumen</Button>
          </Link>
        </div>
      </div>

      <div className=" bg-white mt-6 rounded-xl">
        <div className="flex items-center pl-[30px] pt-[30px] gap-4">
          <img src={iconForm} alt="" className="h-6 w-6" />
          <Typography className="font-bold text-[18px] text-Blue1 font-Nunito">
            Forum New Pipeline
          </Typography>
        </div>

        <form
          action=""
          onSubmit={handleMultipleSubmit}
          className="ml-[30px] mt-[30px] pb-10"
        >
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
                <Select
                  label="Kode Perusahaan"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  <Option>Internasional</Option>
                  <Option>Domestik</Option>
                </Select>
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
                  Jenis Bank
                </label>
                <Select
                  label="Kode Perusahaan"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  <Option>Commercial Bank</Option>
                  <Option>Investment Bank</Option>
                  <Option>Universal Bank</Option>
                  <Option>Syariah/Islamic Bank</Option>
                </Select>
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

            <div>
              <div className="mb-2">
                <label class="block mb-2 mt-2 text-[16px] font-semibold text-Black">
                  Logo Perusahaan
                </label>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="PNG, JPG or GIF (MAX. 800x400px)."
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-5 mt-2">
              <div>
                <label className="block mt-2 mb-2 text-[16px] font-semibold text-Black">
                  Fasilitas Pinjaman
                </label>
                <Select
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  <Option>Bank Loan</Option>
                  <Option>Trade Finance Line</Option>
                  <Option>Forex Line</Option>
                  <Option>Security Line</Option>
                  <Option>Repo Line</Option>
                  <Option>Money Market Line</Option>
                  <Option>Nostro Line</Option>
                </Select>
              </div>

              <div>
                <label className="block mt-2 mb-2 text-[16px] font-semibold text-Black">
                  Currency
                </label>
                <Select
                  label="Kode Perusahaan"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                >
                  <Option>USD</Option>
                  <Option>EUR</Option>
                  <Option>IDR</Option>
                  <Option>NTD</Option>
                </Select>
              </div>

              <div>
                <label className="block mb-2 mt-2 text-[16px] font-semibold text-Black">
                  Plafond
                </label>
                <Input
                  type="email"
                  className="!border !border-Gray4 bg-white text-gray-900 focus:ring-2 focus:outline-none"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block mb-2 mt-2 text-[16px] font-semibold text-Black">
                  Eksposure
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
                <IconButton className="mt-10 w-full">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8085 2.33325C14.1953 2.33325 14.5662 2.4869 14.8397 2.76039C15.1132 3.03388 15.2668 3.40481 15.2668 3.79159V12.5416H24.0168C24.4036 12.5416 24.7746 12.6952 25.048 12.9687C25.3215 13.2422 25.4752 13.6131 25.4752 13.9999C25.4752 14.3867 25.3215 14.7576 25.048 15.0311C24.7746 15.3046 24.4036 15.4583 24.0168 15.4583H15.2668V24.2083C15.2668 24.595 15.1132 24.966 14.8397 25.2394C14.5662 25.5129 14.1953 25.6666 13.8085 25.6666C13.4217 25.6666 13.0508 25.5129 12.7773 25.2394C12.5038 24.966 12.3502 24.595 12.3502 24.2083V15.4583H3.60018C3.2134 15.4583 2.84247 15.3046 2.56898 15.0311C2.29549 14.7576 2.14185 14.3867 2.14185 13.9999C2.14185 13.6131 2.29549 13.2422 2.56898 12.9687C2.84247 12.6952 3.2134 12.5416 3.60018 12.5416H12.3502V3.79159C12.3502 3.40481 12.5038 3.03388 12.7773 2.76039C13.0508 2.4869 13.4217 2.33325 13.8085 2.33325V2.33325Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </form>

        {uploadedFiles.map((file, index) => (
          <img key={index} src={file} alt={`Uploaded content ${index}`} />
        ))}
      </div>

      <div className="flex flex-row gap-4 mt-6 ml-[63%]">
        <Button className="bg-BgPrimary capitalize font-Nunito text-base font-bold flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8085 2.33325C14.1953 2.33325 14.5662 2.4869 14.8397 2.76039C15.1132 3.03388 15.2668 3.40481 15.2668 3.79159V12.5416H24.0168C24.4036 12.5416 24.7746 12.6952 25.048 12.9687C25.3215 13.2422 25.4752 13.6131 25.4752 13.9999C25.4752 14.3867 25.3215 14.7576 25.048 15.0311C24.7746 15.3046 24.4036 15.4583 24.0168 15.4583H15.2668V24.2083C15.2668 24.595 15.1132 24.966 14.8397 25.2394C14.5662 25.5129 14.1953 25.6666 13.8085 25.6666C13.4217 25.6666 13.0508 25.5129 12.7773 25.2394C12.5038 24.966 12.3502 24.595 12.3502 24.2083V15.4583H3.60018C3.2134 15.4583 2.84247 15.3046 2.56898 15.0311C2.29549 14.7576 2.14185 14.3867 2.14185 13.9999C2.14185 13.6131 2.29549 13.2422 2.56898 12.9687C2.84247 12.6952 3.2134 12.5416 3.60018 12.5416H12.3502V3.79159C12.3502 3.40481 12.5038 3.03388 12.7773 2.76039C13.0508 2.4869 13.4217 2.33325 13.8085 2.33325V2.33325Z"
              fill="white"
            />
          </svg>
          Tambah Perusahaan
        </Button>
        <Link to="/uploaddokumen">
          <Button className="capitalize bg-BrandSecondary font-Nunito text-base">
            Selanjutnya
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewPipeline;
