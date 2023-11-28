import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import searchIcon from "../assets/search.svg";
import logoBOT from "../assets/logo-bot.svg";
import logoFCB from "../assets/logo-fcb.svg";
import logoADB from "../assets/logo-adb.svg";
import { Link } from "react-router-dom";

const PipelinePage = () => {
  return (
    <div>
      <Typography
        variant="h5"
        className="font-Nunito font-extrabold text-Gray1"
      >
        New Pipeline
      </Typography>
      <div className="flex flex-col items-center mb-[100px] mt-[50px]">
        <Link to="/newpipeline">
          <Button className="bg-BgPrimary w-96 py-4 text-white font-bold rounded-lg">
            Tambahkan Pipeline
          </Button>
        </Link>
      </div>

      <Typography
        variant="h5"
        className="font-Nunito font-extrabold text-Gray1"
      >
        Existing Pipeline
      </Typography>

      <div className="existing w-full bg-white rounded-xl h-[237px] mt-[16px]">
        <div className="filter flex w-full bg-BgPrimary h-[56px] rounded-t-lg items-center gap-2">
          <img src={searchIcon} alt="" className="h-6 w-6 ml-[20px]" />
          <Typography className="font-Nunito text-[16px] font-bold text-white">
            Filter
          </Typography>
        </div>

        <form action="" className="mt-[16px]">
          <div className="grid gap-2 mb-6 ml-[20px] md:grid-cols-2">
            <div>
              <label className="block mb-2 text-[16px] font-bold text-Black">
                Nama Nasabah
              </label>
              <input
                type="text"
                className="bg-gray border border-blue-300 text-gray-900 text-sm focus:ring-2 focus:outline-none rounded-lg w-[480px] p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-bold text-Black">
                Grup Usaha
              </label>
              <input
                type="text"
                className="bg-gray border border-blue-300 text-gray-900 text-sm focus:ring-2 focus:outline-none rounded-lg w-[480px] p-2.5"
              />
            </div>
          </div>
        </form>

        <div className="tombol gap-2 flex ml-[20px]">
          <button
            type="button"
            className="text-BrandSecondary gap-2 items-center hover:text-white border border-BrandSecondary hover:bg-BrandSecondary focus:ring-2 focus:outline-none focus:ring-BrandSecondary font-bold rounded-lg text-[14px] px-5 py-2.5 text-center me-2 mb-2 inline-flex"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.487 0.32074C8.92889 0.32074 4.90632 2.95084 3.03318 6.93793L1.73017 4.23236L0.0859375 5.02434L2.79197 10.6414L8.40904 7.93523L7.61691 6.2913L4.69074 7.70068C6.27146 4.35254 9.65432 2.14574 13.487 2.14574C18.853 2.14574 23.2184 6.51134 23.2184 11.8773C23.2184 17.2433 18.853 21.609 13.487 21.609C10.3274 21.609 7.35222 20.0654 5.52891 17.48L4.03724 18.5321C6.20282 21.6014 9.73522 23.4339 13.487 23.4339C19.8588 23.4339 25.0429 18.2496 25.0429 11.8773C25.0429 5.50497 19.8588 0.32074 13.487 0.32074Z"
                fill="#F18B41"
              />
            </svg>
            Reset
          </button>

          <button
            type="button"
            className="py-2.5 gap-2 px-5 me-2 mb-2 text-[14px] font-Nunito font-bold text-white hover:bg-orange-400 focus:outline-none bg-BrandSecondary rounded-lg border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 inline-flex items-center"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4306 15.357L13.6254 12.5745C14.7142 11.2168 15.2416 9.49354 15.0989 7.75902C14.9562 6.02449 14.1544 4.41055 12.8583 3.24905C11.5622 2.08755 9.87035 1.46678 8.13062 1.51439C6.39088 1.56199 4.73551 2.27435 3.50487 3.50499C2.27423 4.73563 1.56187 6.39101 1.51427 8.13074C1.46666 9.87047 2.08743 11.5623 3.24893 12.8584C4.41042 14.1545 6.02437 14.9563 7.75889 15.099C9.49342 15.2417 11.2167 14.7144 12.5744 13.6255L15.3569 16.408C15.4272 16.4789 15.5108 16.5351 15.6029 16.5735C15.6951 16.6119 15.7939 16.6316 15.8937 16.6316C15.9935 16.6316 16.0924 16.6119 16.1845 16.5735C16.2766 16.5351 16.3603 16.4789 16.4306 16.408C16.5668 16.267 16.643 16.0786 16.643 15.8825C16.643 15.6864 16.5668 15.498 16.4306 15.357ZM8.33256 13.6255C7.28574 13.6255 6.26243 13.3151 5.39203 12.7335C4.52164 12.1519 3.84324 11.3253 3.44264 10.3582C3.04204 9.39102 2.93723 8.32681 3.14145 7.30011C3.34568 6.2734 3.84977 5.33031 4.58998 4.5901C5.33019 3.84989 6.27328 3.3458 7.29998 3.14157C8.32669 2.93735 9.39089 3.04217 10.358 3.44277C11.3252 3.84337 12.1518 4.52176 12.7334 5.39216C13.3149 6.26255 13.6254 7.28586 13.6254 8.33268C13.6254 9.73642 13.0677 11.0827 12.0751 12.0753C11.0825 13.0679 9.7363 13.6255 8.33256 13.6255Z"
                fill="white"
              />
            </svg>
            Cari
          </button>
        </div>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg my-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[14px] text-white uppercase bg-BgPrimary">
            <tr>
              <th scope="col" className="pl-[22px]">
                No
              </th>
              <th scope="col" className="px-6 py-4">
                Nama Nasabah
              </th>
              <th scope="col" className="px-6 py-3">
                Group Usaha
              </th>
              <th scope="col" className="px-6 py-3">
                Fasilitas Pinjaman
              </th>
              <th scope="col" className="px-6 py-3">
                Currency
              </th>
              <th scope="col" className="px-6 py-3">
                Plafond
              </th>
              <th scope="col" className="px-6 py-3">
                Status LKN
              </th>
            </tr>
          </thead>

          <tbody className="font-bold text-Black">
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 whitespace-nowrap dark:text-white"
                rowSpan={2}
              >
                1
              </th>
              <td className="px-6 py-4 w-52" rowSpan={2}>
                <div className="flex items-center gap-4">
                  <img src={logoBOT} alt="" />
                  Bank of Taiwan
                </div>
              </td>
              <td className="px-6 py-4" rowSpan={2}>
                Bank of Taiwan Group
              </td>
              <td className="px-6 py-4">KI</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">2.000.000.000.000</td>

              <td className="px-6 py-4" rowSpan={2}>
                <button
                  type="button"
                  className="text-white bg-Green hover:bg-Green1 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sudah
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">BG</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">500.000.000.000</td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 whitespace-nowrap dark:text-white"
                rowSpan={2}
              >
                2
              </th>
              <td className="px-6 py-4 w-[226px]" rowSpan={2}>
                <div className="flex items-center gap-4">
                  <img src={logoFCB} alt="" />
                  First Commercial Bank
                </div>
              </td>
              <td className="px-6 py-4" rowSpan={2}>
                Bank of Taiwan Group
              </td>
              <td className="px-6 py-4">KI</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">2.000.000.000.000</td>

              <td className="px-6 py-4" rowSpan={2}>
                <button
                  type="button"
                  className="text-white bg-Green hover:bg-Green1 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sudah
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">KMK</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">900.000.000.000</td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 whitespace-nowrap dark:text-white"
                rowSpan={3}
              >
                3
              </th>
              <td className="px-6 py-4 w-[226px]" rowSpan={3}>
                <div className="flex items-center gap-4">
                  <img
                    src={logoADB}
                    alt=""
                    className="outline outline-2 outline-BgPrimary rounded-full"
                  />
                  First Abu Dhabi Bank
                </div>
              </td>
              <td className="px-6 py-4" rowSpan={3}>
                FAB Group
              </td>
              <td className="px-6 py-4">KI</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">2.000.000.000.000</td>

              <td className="px-6 py-4" rowSpan={3}>
                <button
                  type="button"
                  className="text-white bg-Green hover:bg-Green1 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sudah
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">KMK</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">2.000.000.000.000</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">BG</td>
              <td className="px-6 py-4">IDR</td>
              <td className="px-6 py-4">900.000.000.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PipelinePage;
