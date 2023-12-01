import React from "react";
import searchIcon from "../assets/search.svg";
import { Typography } from "@material-tailwind/react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const DaftarPerusahaan = () => {
  return (
    <div>
      <div className="w-full bg-white rounded-xl h-[250px] mt-[16px]">
        <div className="flex w-full bg-BgPrimary h-[56px] rounded-t-lg items-center gap-2">
          <img src={searchIcon} alt="" className="h-6 w-6 ml-[20px]" />
          <Typography className="font-Nunito text-[16px] font-bold text-white">
            Filter
          </Typography>
        </div>

        <form className="mt-[26px] mr-[20px] mb-[26px]">
          <div className="grid gap-4 mb-6 ml-[20px] md:grid-cols-3">
            <div>
              <label className="block mb-2 text-[16px] font-bold text-Black">
                Nama Nasabah
              </label>
              <input
                type="text"
                className="bg-gray border border-blue-300 text-gray-900 text-sm focus:ring-2 focus:outline-none rounded-lg w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-bold text-Black">
                Nomor VCIF
              </label>
              <input
                type="text"
                className="bg-gray border border-blue-300 text-gray-900 text-sm focus:ring-2 focus:outline-none rounded-lg w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-bold text-Black">
                Nomor CIF
              </label>
              <input
                type="text"
                className="bg-gray border border-blue-300 text-gray-900 text-sm focus:ring-2 focus:outline-none rounded-lg w-full p-2.5"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 ml-[78%]">
            <Button outline className="ml-[20px] font-Nunito" color="warning">
              <svg
                width="19"
                height="19"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M13.487 0.32074C8.92889 0.32074 4.90632 2.95084 3.03318 6.93793L1.73017 4.23236L0.0859375 5.02434L2.79197 10.6414L8.40904 7.93523L7.61691 6.2913L4.69074 7.70068C6.27146 4.35254 9.65432 2.14574 13.487 2.14574C18.853 2.14574 23.2184 6.51134 23.2184 11.8773C23.2184 17.2433 18.853 21.609 13.487 21.609C10.3274 21.609 7.35222 20.0654 5.52891 17.48L4.03724 18.5321C6.20282 21.6014 9.73522 23.4339 13.487 23.4339C19.8588 23.4339 25.0429 18.2496 25.0429 11.8773C25.0429 5.50497 19.8588 0.32074 13.487 0.32074Z"
                  fill="#F18B41"
                />
              </svg>
              Reset
            </Button>

            <Button className="font-Nunito" color="warning">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M16.4306 15.357L13.6254 12.5745C14.7142 11.2168 15.2416 9.49354 15.0989 7.75902C14.9562 6.02449 14.1544 4.41055 12.8583 3.24905C11.5622 2.08755 9.87035 1.46678 8.13062 1.51439C6.39088 1.56199 4.73551 2.27435 3.50487 3.50499C2.27423 4.73563 1.56187 6.39101 1.51427 8.13074C1.46666 9.87047 2.08743 11.5623 3.24893 12.8584C4.41042 14.1545 6.02437 14.9563 7.75889 15.099C9.49342 15.2417 11.2167 14.7144 12.5744 13.6255L15.3569 16.408C15.4272 16.4789 15.5108 16.5351 15.6029 16.5735C15.6951 16.6119 15.7939 16.6316 15.8937 16.6316C15.9935 16.6316 16.0924 16.6119 16.1845 16.5735C16.2766 16.5351 16.3603 16.4789 16.4306 16.408C16.5668 16.267 16.643 16.0786 16.643 15.8825C16.643 15.6864 16.5668 15.498 16.4306 15.357ZM8.33256 13.6255C7.28574 13.6255 6.26243 13.3151 5.39203 12.7335C4.52164 12.1519 3.84324 11.3253 3.44264 10.3582C3.04204 9.39102 2.93723 8.32681 3.14145 7.30011C3.34568 6.2734 3.84977 5.33031 4.58998 4.5901C5.33019 3.84989 6.27328 3.3458 7.29998 3.14157C8.32669 2.93735 9.39089 3.04217 10.358 3.44277C11.3252 3.84337 12.1518 4.52176 12.7334 5.39216C13.3149 6.26255 13.6254 7.28586 13.6254 8.33268C13.6254 9.73642 13.0677 11.0827 12.0751 12.0753C11.0825 13.0679 9.7363 13.6255 8.33256 13.6255Z"
                  fill="white"
                />
              </svg>
              Cari
            </Button>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto mt-[50px]">
        <Table striped>
          <TableHead className="">
            <TableHeadCell className="font-Nunito text-sm bg-BgPrimary text-white">
              VCIF
            </TableHeadCell>
            <TableHeadCell className="font-Nunito text-sm bg-BgPrimary text-white">
              CIF
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Nasabah
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Fasilitas
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Nomor Rekening
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Plafond
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Outstanding
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Tanggal Realisasi
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Jatuh Tempo
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Suku Bunga
            </TableHeadCell>
            <TableHeadCell className="capitalize font-Nunito text-sm bg-BgPrimary text-white">
              Activity
            </TableHeadCell>
          </TableHead>

          <TableBody className="font-normal text-Black">
            {/* Row 1 */}
            <TableRow className="border-b">
              <TableCell rowSpan={2}>VCIF213</TableCell>
              <TableCell rowSpan={2}>JBK3341</TableCell>
              <TableCell rowSpan={2}>PT Multifabrindo Gemilang</TableCell>
              <TableCell>KI</TableCell>
              <TableCell>372910563902481</TableCell>
              <TableCell className="">Rp.1.000.000.000.000</TableCell>
              <TableCell>Rp.500.000.000.000</TableCell>
              <TableCell>06/07/2023</TableCell>
              <TableCell>07/07/2024</TableCell>
              <TableCell>12,5%</TableCell>
              <TableCell
                rowSpan={2}
                className="font-bold font-Nunito text-Blue1"
              >
                Lihat
              </TableCell>
            </TableRow>
            <TableRow className="border-b">
              <TableCell>KMK</TableCell>
              <TableCell>518247309725039</TableCell>
              <TableCell>Rp.3.000.000.000.000</TableCell>
              <Table.Cell>Rp.2.400.000.000.000</Table.Cell>
              <TableCell>10/05/2023</TableCell>
              <TableCell>11/05/2024</TableCell>
              <TableCell>11,5%</TableCell>
            </TableRow>

            {/* Row 2 */}
            <TableRow>
              <TableCell rowSpan={2}>VCIF443</TableCell>
              <TableCell rowSpan={2}>AKB2231</TableCell>
              <TableCell rowSpan={2}>Coca Cola Indonesia</TableCell>
              <TableCell>KMK</TableCell>
              <TableCell>937012845610823</TableCell>
              <TableCell>Rp.2.000.000.000.000</TableCell>
              <TableCell>Rp.800.000.000.000</TableCell>
              <TableCell>17/05/2023</TableCell>
              <TableCell>17/05/2024</TableCell>
              <TableCell>12%</TableCell>
              <TableCell rowSpan={2} className="font-bold text-Blue1">
                Lihat
              </TableCell>
            </TableRow>
            <TableRow className="border-b">
              <TableCell>BG</TableCell>
              <TableCell>620583197406215</TableCell>
              <TableCell>Rp.500.000.000.000</TableCell>
              <TableCell>Rp.300.000.000.000</TableCell>
              <TableCell>16/06/2023</TableCell>
              <TableCell>16/06/2024</TableCell>
              <TableCell>12%</TableCell>
            </TableRow>

            {/* Row 3 */}
            <TableRow>
              <TableCell rowSpan={2}>VCIF112</TableCell>
              <TableCell rowSpan={2}>BBY7781</TableCell>
              <TableCell rowSpan={2}>PT. Astra Argo Lestari</TableCell>
              <TableCell>KMK</TableCell>
              <TableCell>204897506381259</TableCell>
              <TableCell>Rp.2.000.000.000.000</TableCell>
              <TableCell>Rp.900.000.000.000</TableCell>
              <TableCell>07/08/2023</TableCell>
              <TableCell>07/08/2024</TableCell>
              <TableCell>12%</TableCell>
              <TableCell rowSpan={2} className="font-bold text-Blue1">
                Lihat
              </TableCell>
            </TableRow>
            <TableRow className="border-b">
              <TableCell>BG</TableCell>
              <TableCell>980236571492386</TableCell>
              <TableCell>Rp.2.000.000.000.000</TableCell>
              <TableCell>Rp.1.200.000.000.000</TableCell>
              <TableCell>19/07/2023</TableCell>
              <TableCell>19/07/2024</TableCell>
              <TableCell>12%</TableCell>
            </TableRow>

            {/* Row 4 */}
            <TableRow>
              <TableCell rowSpan={3}>VCIF543</TableCell>
              <TableCell rowSpan={3}>LKH234</TableCell>
              <TableCell rowSpan={3}>PT. Perusahaan Gas Negara</TableCell>
              <TableCell>KI</TableCell>
              <TableCell>742103685901237</TableCell>
              <TableCell>Rp.2.000.000.000.000</TableCell>
              <TableCell>Rp.1.100.000.000.000</TableCell>
              <TableCell>08/06/2023</TableCell>
              <TableCell>08/06/2024</TableCell>
              <TableCell>12%</TableCell>
              <TableCell rowSpan={3} className="font-bold text-Blue1">
                Lihat
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KMK</TableCell>
              <TableCell>365809174293015</TableCell>
              <TableCell>Rp.2.000.000.000.000</TableCell>
              <TableCell>Rp.800.000.000.000</TableCell>
              <TableCell>04/07/2023</TableCell>
              <TableCell>04/07/2024</TableCell>
              <TableCell>12%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BG</TableCell>
              <TableCell>620453197431215</TableCell>
              <TableCell>Rp.500.000.000.000</TableCell>
              <TableCell>Rp.400.000.000.000</TableCell>
              <TableCell>12/05/2023</TableCell>
              <TableCell>12/05/2024</TableCell>
              <TableCell>12%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DaftarPerusahaan;
