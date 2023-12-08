import {
  Button,
  Card,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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
  Textarea,
} from "flowbite-react";
import React, { useRef, useState } from "react";
import { Add, ArrowUp2, Location, Trash } from "iconsax-react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const InformasiNasabah = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="h-full">
      <Tabs style="underline" className="mt-[16px] w-full gap-6">
        <TabItem
          active
          title="Data Nasabah"
          className="w-full border-BrandSecondary"
        >
          <Card>
            <Typography className="text-Blue1 font-nunito text-xl font-bold">
              2.1 Data Nasabah
            </Typography>
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
                    value="Rating Internal"
                    className="font-nunito text-base text-Black"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    required
                    className="mt-2 mb-4"
                    placeholder=""
                  />
                </div>

                <div>
                  <Select className="mt-8">
                    <option></option>
                    <option></option>
                    <option></option>
                  </Select>
                </div>

                <div>
                  <Select className="mt-8">
                    <option></option>
                    <option></option>
                    <option></option>
                  </Select>
                </div>
              </div>

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

              <Label
                htmlFor="email1"
                value="Tingkat Kesehatan Bank (Khusus Bank Domestik)"
                className="font-nunito text-base text-Black"
              />
              <Select required className="mt-2 mb-4">
                <option>-</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>

              <Typography className="text-base font-semibold text-Blue1 font-nunito mt-10">
                Daftar Counterparty Yang Mengajukan Fasilitas
              </Typography>
              <Typography className="text-sm font-semibold text-Blue1 font-nunito">
                Daftar Counterparty Yang Mengajukan Fasilitas
              </Typography>

              <Table className="mt-5">
                <TableHead>
                  <TableHeadCell className="w-5 bg-Blue1 text-white text-sm capitalize">
                    No
                  </TableHeadCell>
                  <TableHeadCell className="w-[200px] bg-Blue1 text-white text-sm capitalize">
                    Nama Nasabah
                  </TableHeadCell>
                  <TableHeadCell
                    colSpan={3}
                    className="bg-Blue1 text-white text-sm capitalize text-center"
                  >
                    Catatan
                  </TableHeadCell>
                  <TableHeadCell className="bg-Blue1 text-white text-sm capitalize">
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>

                <TableBody className="divide-y border border-slate-500">
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
                    <TableCell colSpan={3}>
                      <TextInput id="email1" type="email" required />
                    </TableCell>
                    <TableCell className="w-5">
                      <Button className="mx-auto w-10 h-10" color="blue">
                        <ArrowUp2 color="#FFFFFF" />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {/* Struktur Pejabat Perusahaan */}
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-Blue1 font-nunito font-semibold text-base"
                    >
                      Struktur Pejabat Perusahaan
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>1</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>2</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>3</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>4</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>5</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>6</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>7</TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pegawai"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Jabatan"
                      />
                    </TableCell>
                    <TableCell>
                      <Select required className="w-[190px]">
                        <option>
                          Pejabat Baru (Tidak Termasuk dalam MAK sebelumnya)
                        </option>
                        <option>Pejabat Lama</option>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="accept"
                          defaultChecked
                          color={"#FFFFFF"}
                        />
                        <Label htmlFor="accept" className="flex">
                          Terlampir pada appendix
                        </Label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell colSpan={6}>
                      <div className="flex justify-end">
                        <Button color="blue" size="sm">
                          <Add color="#FFFFFF" className="mr-2 h-5 w-5" />
                          Tambahkan
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Daftar Pemegeang Saham */}
                  <TableRow className="border-none">
                    <TableCell
                      colSpan={6}
                      className="text-Blue1 font-nunito font-semibold text-base"
                    >
                      Daftar Pemegang Saham
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell
                      colSpan={6}
                      className="text-Gray1 font-nunito font-normal text-sm"
                    >
                      PT. Astra Agro Lestari
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>1</TableCell>
                    <TableCell colSpan={3}>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pemegang Saham"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nominal Saham %"
                      />
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell>2</TableCell>
                    <TableCell colSpan={3}>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nama Pemegang Saham"
                      />
                    </TableCell>
                    <TableCell>
                      <TextInput
                        id="email1"
                        type="email"
                        placeholder="Nominal Saham %"
                      />
                    </TableCell>
                    <TableCell>
                      <Button className="mx-auto w-10 h-10" color="gray">
                        <Trash color="#999999" variant="Bold" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell colSpan={6}>
                      <div className="flex justify-end">
                        <Button color="blue" size="sm">
                          <Add color="#FFFFFF" className="mr-2 h-5 w-5" />
                          Tambahkan
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Ultimate Beneficial Owner */}
                  <TableRow className="border-none">
                    <TableCell
                      colSpan={6}
                      className="text-Blue1 font-nunito font-semibold text-base italic"
                    >
                      Ultimate Beneficial Owner
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell
                      colSpan={6}
                      className="text-Gray1 font-nunito font-normal text-sm"
                    >
                      PT. Astra Agro Lestari
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell colSpan={6}>
                      <Textarea required rows={4} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="flex justify-end mt-4">
                <Button color="blue">
                  <Add color="#FFFFFF" className="mr-2 h-5 w-5" />
                  Tambahkan
                </Button>
              </div>
            </form>
          </Card>

          <div className="flex justify-end mt-4 gap-4">
            <Link to={"/listmab"}>
              <Button outline color="blue">
                Kembali
              </Button>
            </Link>

            <Button color="blue">Selanjutnya</Button>
          </div>
        </TabItem>

        <TabItem title="Company Overview" className="w-full ">
          <Card>
            <Typography className="text-Blue1 font-nunito text-xl font-bold">
              2.2 Company Overview
            </Typography>

            <Textarea required rows={12}></Textarea>
          </Card>

          <div className="flex justify-end mt-4 gap-4">
            <Link to={"/listmab"}>
              <Button outline color="blue">
                Kembali
              </Button>
            </Link>

            <Button color="blue">Selanjutnya</Button>
          </div>
        </TabItem>

        <TabItem title="Pengecekan Kredit">
          <Card>
            <Typography className="text-Blue1 font-nunito text-xl font-bold">
              2.3 Pengecekan Kredit
            </Typography>

            <form action="">
              <Table>
                <TableHead>
                  <TableHeadCell className="w-[201px] bg-Blue1 text-white text-sm capitalize">
                    Status
                  </TableHeadCell>
                  <TableHeadCell className="w-[201px] bg-Blue1 text-center text-white text-sm capitalize">
                    Hasil
                  </TableHeadCell>
                  <TableHeadCell className="w-[201px] bg-Blue1 text-center text-white text-sm capitalize">
                    Pengecekan Lainnya
                  </TableHeadCell>
                  <TableHeadCell className="w-[201px] bg-Blue1 text-center text-white text-sm capitalize">
                    Hasil
                  </TableHeadCell>
                  <TableHeadCell className="w-[201px] bg-Blue1 text-center text-white text-sm capitalize">
                    Catatan
                  </TableHeadCell>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>Slik Nasabah</TableCell>
                    <TableCell>
                      <Select>
                        <option>-</option>
                        <option>Lancar</option>
                        <option>Dalam Perhatian Khusus</option>
                        <option>Kurang Lancar</option>
                        <option>Diragukan</option>
                        <option>Macet</option>
                      </Select>
                    </TableCell>
                    <TableCell>Sector Classification</TableCell>
                    <TableCell>
                      <Select>
                        <option>Sesuai</option>
                        <option>Tidak Sesuai</option>
                      </Select>
                    </TableCell>
                    <TableCell rowSpan={4}>
                      <Textarea rows={13}></Textarea>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Slik Manajemen</TableCell>
                    <TableCell>
                      <Select>
                        <option>-</option>
                        <option>Lancar</option>
                        <option>Dalam Perhatian Khusus</option>
                        <option>Kurang Lancar</option>
                        <option>Diragukan</option>
                        <option>Macet</option>
                      </Select>
                    </TableCell>
                    <TableCell>Sector Acceptance Criteria</TableCell>
                    <TableCell>
                      <Select>
                        <option>Sesuai</option>
                        <option>Tidak Sesuai</option>
                      </Select>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Sanction Screening</TableCell>
                    <TableCell>
                      <Select>
                        <option>Terindikasi</option>
                        <option>Tidak Terindikasi</option>
                      </Select>
                    </TableCell>
                    <TableCell colSpan={2}>
                      <div className="flex items-center gap-4">
                        <Typography className="font-nunito font-bold text-Blue1">
                          Catatan:
                        </Typography>

                        <TextInput className="w-full" required />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>RMA</TableCell>
                    <TableCell>
                      <Select>
                        <option>Ada</option>
                        <option>Tidak Ada</option>
                      </Select>
                    </TableCell>
                    <TableCell colSpan={2}>
                      <div className="flex items-center gap-4">
                        <Typography className="font-nunito font-bold text-Blue1">
                          Catatan:
                        </Typography>

                        <TextInput className="w-full" required />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </form>
          </Card>

          <div className="flex items-center justify-end mt-8 gap-4">
            <Button outline color="success">
              Kembali
            </Button>
            <Link to="/listmab">
              <Button color="success">Simpan</Button>
            </Link>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default InformasiNasabah;
