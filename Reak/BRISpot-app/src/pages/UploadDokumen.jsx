import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Card, FileInput, Label, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageIgnore from "../assets/ignore.svg";

const UploadDokumen = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-4 mr-[30px] w-full">
        <div className="text-center">
          <Link to="/newpipeline">
            <Button className="w-full bg-blue-gray-300">
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

      <Card className="mt-6">
        {/* Upload File */}
        <div className="flex items-center gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.53 13.53C11.38 13.68 11.19 13.75 11 13.75C10.81 13.75 10.62 13.68 10.47 13.53L9.75 12.81V17C9.75 17.41 9.41 17.75 9 17.75C8.59 17.75 8.25 17.41 8.25 17V12.81L7.53 13.53C7.24 13.82 6.76 13.82 6.47 13.53C6.18 13.24 6.18 12.76 6.47 12.47L8.47 10.47C8.54 10.41 8.61 10.36 8.69 10.32C8.71 10.31 8.74 10.3 8.76 10.29C8.82 10.27 8.88 10.26 8.95 10.25C8.98 10.25 9 10.25 9.03 10.25C9.11 10.25 9.19 10.27 9.27 10.3C9.28 10.3 9.28 10.3 9.29 10.3C9.37 10.33 9.45 10.39 9.51 10.45C9.52 10.46 9.53 10.46 9.53 10.47L11.53 12.47C11.82 12.76 11.82 13.24 11.53 13.53Z"
              fill="#00529C"
            />
            <path
              d="M17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999Z"
              fill="#00529C"
            />
          </svg>
          <Typography className="font-bold text-[18px] text-Blue1 font-Nunito">
            Upload File
          </Typography>
        </div>

        {/* Card Upload */}
        <div className="grid gap-6 md:grid-cols-2 mb-4">
          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Dokumentasi Kredit
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
                      <span className="font-semibold text-Blue1">Dokumen</span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>
          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Identitas Perusahaan
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
                      <span className="font-semibold text-Blue1">
                        {" "}
                        Dokumen{" "}
                      </span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-4">
          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Data Financial
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
                      <span className="font-semibold text-Blue1">Dokumen</span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>

          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Legalitas Usaha
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
                      <span className="font-semibold text-Blue1">
                        {" "}
                        Dokumen{" "}
                      </span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Dokumen Agunan
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
                      <span className="font-semibold text-Blue1">Dokumen</span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>

          <div>
            <Typography className="font-Nunito text-base font-semibold mb-2">
              Lain-lain
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
                      <span className="font-semibold text-Blue1">
                        {" "}
                        Dokumen{" "}
                      </span>
                      Disini
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or PDF
                    </p>
                  </div>
                  <FileInput className="hidden" />
                </Label>
                <FileInput className="mt-4" />
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <div className="flex flex-row gap-4 mt-6 ml-[74.1%]">
        <Button
          variant="outlined"
          className="border-Red capitalize font-Nunito text-base text-Red font-semibold"
        >
          Kembali
        </Button>
        <Link to="/uploaddokumen">
          <Button
            className="capitalize bg-Green font-Nunito text-base font-semibold"
            onClick={() => setOpenModal(true)}
          >
            Simpan Data
          </Button>

          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <svg
                  width="160"
                  height="142"
                  viewBox="0 0 160 142"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <path
                    d="M109.641 135.932H59.4419C59.4419 135.932 18.634 136.908 6.6572 114.007C-7.86691 86.2351 22.1274 74.2564 35.5239 70.8876C66.0401 63.2139 78.4114 43.8467 82.9477 39.8277C104.728 20.5311 132.846 30.941 143.568 39.8278C163.487 56.3382 164.248 90.7466 143.568 114.007C124.075 135.932 109.641 135.932 109.641 135.932Z"
                    fill="#EAF3FA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M134.31 10.287C135.423 10.287 136.326 9.39579 136.326 8.29645C136.326 7.1971 135.423 6.30591 134.31 6.30591C133.196 6.30591 132.293 7.1971 132.293 8.29645C132.293 9.39579 133.196 10.287 134.31 10.287Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.9523 4.97888C52.0661 4.97888 52.969 4.08769 52.969 2.98834C52.969 1.889 52.0661 0.997803 50.9523 0.997803C49.8385 0.997803 48.9355 1.889 48.9355 2.98834C48.9355 4.08769 49.8385 4.97888 50.9523 4.97888Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M154.476 71.9956C155.219 71.9956 155.821 71.4015 155.821 70.6686C155.821 69.9357 155.219 69.3416 154.476 69.3416C153.734 69.3416 153.132 69.9357 153.132 70.6686C153.132 71.4015 153.734 71.9956 154.476 71.9956Z"
                    stroke="#C0DBF1"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.408 71.9956C26.1505 71.9956 26.7524 71.4015 26.7524 70.6686C26.7524 69.9357 26.1505 69.3416 25.408 69.3416C24.6654 69.3416 24.0635 69.9357 24.0635 70.6686C24.0635 71.4015 24.6654 71.9956 25.408 71.9956Z"
                    stroke="#C0DBF1"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.4086 103.844C25.7798 103.844 26.0808 103.547 26.0808 103.18C26.0808 102.814 25.7798 102.517 25.4086 102.517C25.0373 102.517 24.7363 102.814 24.7363 103.18C24.7363 103.547 25.0373 103.844 25.4086 103.844Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.87927 60.0524C2.25054 60.0524 2.55151 59.7553 2.55151 59.3889C2.55151 59.0224 2.25054 58.7253 1.87927 58.7253C1.508 58.7253 1.20703 59.0224 1.20703 59.3889C1.20703 59.7553 1.508 60.0524 1.87927 60.0524Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M107.421 14.2675C107.793 14.2675 108.094 13.9704 108.094 13.6039C108.094 13.2375 107.793 12.9404 107.421 12.9404C107.05 12.9404 106.749 13.2375 106.749 13.6039C106.749 13.9704 107.05 14.2675 107.421 14.2675Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M68.431 137.683C68.8023 137.683 69.1033 137.386 69.1033 137.02C69.1033 136.654 68.8023 136.356 68.431 136.356C68.0598 136.356 67.7588 136.654 67.7588 137.02C67.7588 137.386 68.0598 137.683 68.431 137.683Z"
                    fill="white"
                    stroke="#E37519"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M124.227 140.998C124.598 140.998 124.899 140.701 124.899 140.334C124.899 139.968 124.598 139.671 124.227 139.671C123.856 139.671 123.555 139.968 123.555 140.334C123.555 140.701 123.856 140.998 124.227 140.998Z"
                    stroke="#C0DBF1"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M157.838 30.192C158.21 30.192 158.51 29.8949 158.51 29.5285C158.51 29.1621 158.21 28.865 157.838 28.865C157.467 28.865 157.166 29.1621 157.166 29.5285C157.166 29.8949 157.467 30.192 157.838 30.192Z"
                    stroke="#C0DBF1"
                    stroke-width="1.43571"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.324 35.5005C16.0665 35.5005 16.6684 34.9064 16.6684 34.1735C16.6684 33.4406 16.0665 32.8464 15.324 32.8464C14.5814 32.8464 13.9795 33.4406 13.9795 34.1735C13.9795 34.9064 14.5814 35.5005 15.324 35.5005Z"
                    stroke="#C0DBF1"
                    stroke-width="1.43571"
                  />
                  <path
                    d="M93.2317 37.8622L123.183 87.7477C127.487 94.9125 125.373 104.339 118.458 108.8C116.138 110.302 113.432 111.103 110.668 111.106H50.7613C42.6221 111.106 36.0205 104.267 36.0205 95.8243C36.0205 92.9682 36.7938 90.1747 38.2464 87.7477L68.2018 37.8622C72.5016 30.6974 81.5928 28.5028 88.5073 32.9635C90.4203 34.1971 92.0383 35.8732 93.2317 37.8622ZM80.7167 93.2274C81.9022 93.2274 83.039 92.7565 83.8772 91.9183C84.7155 91.0801 85.1864 89.9432 85.1864 88.7578C85.1864 87.5724 84.7155 86.4355 83.8772 85.5973C83.039 84.7591 81.9022 84.2882 80.7167 84.2882C79.5313 84.2882 78.3945 84.7591 77.5563 85.5973C76.718 86.4355 76.2471 87.5724 76.2471 88.7578C76.2471 89.9432 76.718 91.0801 77.5563 91.9183C78.3945 92.7565 79.5313 93.2274 80.7167 93.2274ZM80.7167 53.0008C79.5313 53.0008 78.3945 53.4717 77.5563 54.3099C76.718 55.1481 76.2471 56.285 76.2471 57.4704V75.3489C76.2471 76.5343 76.718 77.6712 77.5563 78.5094C78.3945 79.3476 79.5313 79.8186 80.7167 79.8186C81.9022 79.8186 83.039 79.3476 83.8772 78.5094C84.7155 77.6712 85.1864 76.5343 85.1864 75.3489V57.4704C85.1864 56.285 84.7155 55.1481 83.8772 54.3099C83.039 53.4717 81.9022 53.0008 80.7167 53.0008Z"
                    fill="#E84040"
                  />
                </svg>
                <Typography
                  variant="h4"
                  className="mb-2 text-Black font-Nunito font-bold"
                >
                  Perhatian!
                </Typography>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 font-Nunito">
                  Apakah anda yakin untuk Menyimpan data? Data akan ditambahkan
                  menjadi Pipeline baru{" "}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => setOpenModal(false)}
                    className="w-full capitalize text-sm font-Nunito font-bold border-MainBlue text-MainBlue"
                    variant="outlined"
                  >
                    {"Batal"}
                  </Button>
                  <Link to="/" className="w-full">
                    <Button
                      color="gray"
                      className="w-full bg-MainBlue capitalize text-sm font-Nunito font-bold"
                    >
                      Simpan
                    </Button>
                  </Link>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Link>
      </div>
    </div>
  );
};

export default UploadDokumen;
