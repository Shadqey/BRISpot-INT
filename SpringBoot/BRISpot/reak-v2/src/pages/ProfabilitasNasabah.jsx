import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import { Card } from "flowbite-react";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        marginTop: "16px",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            borderRadius: "16px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
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
              }}
            />
            <Tab label="Hubungan BRI dengan Counterparty" value="2" />
            <Tab label="Wallet Share Simpanan" value="3" />
            <Tab label="Wallet Share Pinjaman" value="4" />
            <Tab label="Value Chain" value="5" />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <Card></Card>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
  );
}
