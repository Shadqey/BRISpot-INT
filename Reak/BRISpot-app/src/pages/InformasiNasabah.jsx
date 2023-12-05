import {
  Button,
  Card,
  Label,
  Select,
  TabItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Add, ArrowUp2, Location } from "iconsax-react";
import { Typography } from "@material-tailwind/react";

const InformasiNasabah = () => {
  return (
    <div className="h-full">
      <Tabs style="underline" className="mt-[16px] w-full gap-6">
        <TabItem
          active
          title="Data Nasabah"
          className="w-full border-BrandSecondary"
        >
          <Card>
            <form action="#">
              <Label
                htmlFor="email1"
                value="Alamat"
                className="font-nunito text-base text-Black"
              />
              <TextInput
                id="email1"
                type="email"
                required
                className="mt-2 mb-4"
                rightIcon={Location}
              />

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="email1"
                    value="Sektor Usaha"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                    placeholder="Perbankan"
                    disabled
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email1"
                    value="Tahun Menjadi Nasabah BRI"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email1"
                    value="Rating Internal"
                    className="font-nunito text-base text-Black"
                  />
                  <Select required className="mt-2 mb-4">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Select>
                </div>
              </div>

              <Label
                htmlFor="email1"
                value="Jenis Bank"
                className="font-nunito text-base text-Black"
              />
              <Select required className="mt-2 mb-4">
                <option>Commercial Bank</option>
                <option>Universal Bank</option>
                <option>Invesment Bank</option>
                <option>Syariah/Islamic Bank</option>
              </Select>

              <Label
                htmlFor="email1"
                value="ESG Rating"
                className="font-nunito text-base text-Black"
              />
              <TextInput
                id="email1"
                type="email"
                required
                className="mt-2 mb-4"
              />

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="email1"
                    value="World Rank"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Lembaga Pemeringkat"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Date"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="email1"
                    value="Country Rank"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Lembaga Pemeringkat"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Date"
                  />
                </div>
              </div>

              <Label
                htmlFor="email1"
                value="Tingkat Kesehatan Bank (Khusus Bank Domestik)"
                className="font-nunito text-base text-Black"
              />
              <Select required className="mt-2 mb-4">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>

              <div className="grid grid-cols-3 gap-6 ">
                <div>
                  <Label
                    htmlFor="email1"
                    value="Rating Eksternal"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                    placeholder="Credit Rating"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Lembaga Pemeringkat"
                  />
                </div>

                <div>
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-8 mb-4"
                    placeholder="Date"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button color="blue">
                  <Add color="#FFFFFF" className="mr-2 h-5 w-5" />
                  Tambahkan
                </Button>
              </div>

              <Typography className="text-base font-semibold text-Blue1 font-nunito">
                Daftar Counterparty Yang Mengajukan Fasilitas
              </Typography>
              <Typography className="text-sm font-semibold text-Blue1 font-nunito">
                Daftar Counterparty Yang Mengajukan Fasilitas
              </Typography>

              <Table className="mt-5 border-2">
                <TableHead>
                  <TableHeadCell className="w-5 bg-Blue1 text-white text-sm capitalize">
                    No
                  </TableHeadCell>
                  <TableHeadCell className="w-[200px] bg-Blue1 text-white text-sm capitalize">
                    Nama Nasabah
                  </TableHeadCell>
                  <TableHeadCell className="bg-Blue1 text-white text-sm capitalize text-center">
                    Catatan
                  </TableHeadCell>
                  <TableHeadCell className="bg-Blue1 text-white text-sm capitalize">
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>

                <TableBody className="divide-y">
                  <TableRow className="border-gray-700">
                    <TableCell>1</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        disabled
                        placeholder="HSBC Indonesia"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput id="email1" type="email" required />
                    </TableCell>
                    <TableCell className="w-5">
                      <Button className="mx-auto w-10 h-10" color="blue">
                        <ArrowUp2 color="#FFFFFF" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </form>
          </Card>
        </TabItem>

        <TabItem title="Tab 2" className="w-full"></TabItem>
      </Tabs>
    </div>
  );
};

export default InformasiNasabah;
