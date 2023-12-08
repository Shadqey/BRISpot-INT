import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import { Button, Datepicker, TextInput, Textarea } from "flowbite-react";
import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Add, Arrow, Trash } from "iconsax-react";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="h-full">
      <TabContext value={value}>
        <Card className="mt-4 p-0 mb-4 h-16 ">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{ padding: "0px" }}
          >
            <Tab
              label="Profitabilitas Nasabah (group)"
              value="1"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontSize: "16px",
                ":focus": {
                  fontWeight: "bold",
                  color: "#084F8C",
                },
                marginTop: "4px",
              }}
            ></Tab>

            <Tab
              label="Hubungan BRI Dengan Counterparty"
              value="2"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontSize: "16px",
                ":focus": {
                  fontWeight: "bold",
                  color: "#084F8C",
                },
                marginTop: "4px",
              }}
            ></Tab>
          </Tabs>
        </Card>

        <TabPanel value="1" sx={{ padding: "0px" }}>
          <Card>
            <CardBody>
              <Typography className="text-Blue1 font-nunito text-xl font-bold mb-2">
                3.1 Data Nasabah
              </Typography>
              <Typography className="text-Gray1 font-nunito text-base font-semibold mb-4">
                Tidak Perlu diisi Untuk Nasabah Baru
              </Typography>

              <div className="bg-Blue1 grid grid-cols-4 gap-4 py-3 px-4 rounded-t-lg items-center">
                <div>
                  <Typography className="font-bold text-white text-base font-nunito">
                    Kategori
                  </Typography>
                </div>

                <div>
                  <Typography className="font-bold text-white text-base font-nunito">
                    Tahun lalu (Rp Juta)
                  </Typography>
                </div>

                <div>
                  <Typography className="font-bold text-white text-base font-nunito text-center mb-2">
                    Tahun berjalan
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Datepicker />
                    <Datepicker />
                  </div>
                </div>
                <div>
                  <Typography className="font-bold text-white text-base font-nunito text-center">
                    Delta%
                  </Typography>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 py-3 px-4 border items-center p-0 rounded-b-lg">
                <div className="col-span-4">
                  <Typography className="text-Blue1 font-nunito font-semibold text-base">
                    Pnl (IDR juta)
                  </Typography>
                </div>
                <Typography className="font-nunito font-medium text-Black">
                  Asset Spread
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Liability Spread
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Fee Based Income
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Contribution Margin
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Laba Setelah Beban Modal
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <div className="col-span-4">
                  <Typography className="text-Blue1 font-nunito font-semibold text-base">
                    Avg Pinjaman & Simpanan (IDR juta)
                  </Typography>
                </div>

                <Typography className="font-nunito font-medium text-Black">
                  Avg Pinjaman & Simpanan (IDR juta)
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Avg. OS Pinjaman
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <div className="col-span-4">
                  <Typography className="text-Blue1 font-nunito font-semibold text-base">
                    Key ratio (%)
                  </Typography>
                </div>

                <Typography className="font-nunito font-medium text-Black">
                  ROA
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  RAROC/RARORAC
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  RORAC/ROE
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito font-medium text-Black">
                  Target
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <div className="col-span-4 mt-4">
                  <Typography className="text-Blue1 font-nunito font-semibold text-base">
                    Summary dari profitabilitas group
                  </Typography>
                </div>
                <div className="col-span-4">
                  <Textarea
                    rows={6}
                    helperText="*Tidak perlu diisi untuk nasabah baru"
                  ></Textarea>
                </div>
              </div>
            </CardBody>
          </Card>
        </TabPanel>

        <TabPanel value="2" sx={{ padding: "0px" }}>
          <Card className="mb-20">
            <CardBody>
              <Typography className="text-Blue1 font-nunito text-xl font-bold mb-6">
                3.2 Hubungan BRI dengan Counterparty
              </Typography>

              <Typography className="font-nunito text-base font-semibold text-Blue1 mb-2">
                Bank Competitor & Produk yang Digunakan
              </Typography>

              <div className="grid grid-cols-11 gap-4">
                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="flex justify-center">
                  <IconButton className="bg-Gray4">
                    <Trash color="#E84040" variant="Bold" />
                  </IconButton>
                </div>

                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="flex justify-center">
                  <IconButton className="bg-Gray4">
                    <Trash color="#E84040" variant="Bold" />
                  </IconButton>
                </div>
                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="col-span-5">
                  <TextInput></TextInput>
                </div>
                <div className="flex justify-center">
                  <IconButton className="bg-Gray4">
                    <Trash color="#E84040" variant="Bold" />
                  </IconButton>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button color="blue">
                  <Add color="#ffffff" className="mr-2" />
                  Tambahkan
                </Button>
              </div>
            </CardBody>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
}
