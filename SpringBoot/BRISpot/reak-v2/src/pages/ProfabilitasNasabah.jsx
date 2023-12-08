import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import { Button, Datepicker, TextInput } from "flowbite-react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

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
                padding: "0px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontSize: "16px",
                ":focus": {
                  fontWeight: "bold",
                  color: "#084F8C",
                },
              }}
            ></Tab>
          </Tabs>
        </Card>

        <TabPanel value="1" sx={{ padding: "0px" }}>
          <Card>
            <CardBody>
              <Typography className="text-Blue1 font-nunito text-xl font-bold mb-2">
                2.1 Data Nasabah
              </Typography>
              <Typography className="text-Gray1 font-nunito text-base font-semibold">
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

              <div className="grid grid-cols-4 gap-4 py-3 px-4 border items-center p-0">
                <div className="col-span-4">
                  <Typography className="text-Blue1 font-nunito font-semibold text-base">
                    Pnl (IDR juta)
                  </Typography>
                </div>
                <Typography className="font-nunito">Asset Spread</Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito">
                  Liability Spread
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>

                <Typography className="font-nunito">
                  Fee Based Income
                </Typography>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
              </div>
            </CardBody>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
}
