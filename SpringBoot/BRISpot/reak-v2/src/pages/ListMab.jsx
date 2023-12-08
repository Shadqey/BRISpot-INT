import {
  Card,
  Progress,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTitle,
  TimelineTime,
  TimelineBody,
  Button,
  Badge,
} from "flowbite-react";
import React from "react";
import { ArrowRight, Buildings } from "iconsax-react";
import { Chip, Typography } from "@material-tailwind/react";
import logoCiti from "../assets/logo-citi.svg";
import { CircularProgress } from "@mui/joy";
import { Link } from "react-router-dom";

const ListMab = () => {
  return (
    <div className="h-full">
      <Card className="mt-[16px]">
        <div className="flex items-center gap-3">
          <Buildings color="#00529C" variant="Bold" />
          <Typography className="font-nunit text-base font-semibold text-Blue1">
            Detail MAB Perusahaan
          </Typography>
        </div>

        <div className="grid md:grid-cols-4 gap-6 w-full items-center">
          <div className="justify-center ml-10">
            <img src={logoCiti} alt="" className="w-20" />
          </div>

          <div className="w-[505px]">
            <Typography className="font-bold font-nunito text-Black text-2xl">
              Citibank
            </Typography>
            <div className="flex items-start gap-6 mt-[8px]">
              <div className="w-[300px]">
                <Typography className="font-nunito text-Black font-semibold text-base">
                  Alamat
                </Typography>
                <p className="font-nunito text-Black font-normal text-base">
                  World Trade Center Lt. 1, Jl. Jenderal Sudirman Kav. 29-31
                  Jakarta Selatan
                </p>
              </div>

              <div className="">
                <Typography className="font-nunito text-Black font-semibold text-base">
                  Sektor Industri
                </Typography>
                <p className="font-nunito text-Black font-normal text-base">
                  Perbankan
                </p>
              </div>
            </div>

            <div className="mt-[22px] flex items-center gap-2">
              <Typography className="font-bold text-xs font-nunito text-Black">
                SLA Prakarsa Bisnis
              </Typography>
              <Progress
                progress={20}
                className="w-[250px]"
                size="lg"
                color="green"
              />
              <Typography className="font-medium text-xs font-nunito text-Gray1">
                4/18
              </Typography>
            </div>
          </div>

          <div className="ml-[280px]">
            <CircularProgress
              size="lg"
              determinate
              value={25}
              sx={{
                "--CircularProgress-progressThickness": "16px",
                "--CircularProgress-size": "200px",
              }}
              color="success"
              className="flex"
            >
              <div className="justify-center">
                <Typography className="text-center text-3xl font-bold font-nunito text-Black">
                  2/8
                </Typography>
                <Typography className="text-center text-base font-nunito text-Gray1 font-normal">
                  Progress
                </Typography>
              </div>
            </CircularProgress>
          </div>
        </div>
      </Card>

      <Timeline horizontal className="mt-[20px] ml-2 justify-center ">
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-BgPrimary font-bold font-nunito">
              Prakarsa Kredit Bisnis
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Prakarsa Kredit Risk
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="w-[110px]">
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Pra-Komite
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Komite Kredit
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Proses Uji Kepatuhan
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Offering Letter
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-Gray2 font-medium font-nunito">
              Pencairan
            </TimelineTime>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <div className="grid grid-cols-7 gap-4 mt-[16px]">
        <Button size="sm" as="span" className="cursor-pointer bg-Green">
          Prakarsa Kredit Bisnis
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Prakarsa Kredit Risk
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Pra-Komite
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Komite Kredit
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Proses Uji Kepatuhan
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Offering Letter
        </Button>
        <Button size="sm" disabled className="cursor-pointer">
          Pencairan
        </Button>
      </div>

      <div className="grid grid-cols-3 mt-[32px] gap-6">
        <Card className="w-full">
          <div className="flex items-center justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Informasi Nasabah
            </Typography>
            <Badge color="success" size="sm">
              SELESAI
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[80px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link to="/informasinasabah">
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-start justify-between">
            <Typography className="font-bold font-nunito w-[200px] text-Black text-base">
              Profitabilitas dan Hubungan Nasabah
            </Typography>
            <Badge color="success" size="sm">
              SELESAI
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[52px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link to={"/profitnasabah"}>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-start justify-between">
            <Typography className="font-bold font-nunito w-[200px] text-Black text-base">
              Pengajuan dan Fasilitas Kredit
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[52px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-start justify-between">
            <Typography className="font-bold font-nunito w-[200px] text-Black text-base">
              Analisis Risiko Kredit Nasabah
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[52px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-center justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Credit Risk Rating
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[80px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-center justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Rekomendasi Putusan
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[80px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-start justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Risk Assessment & Komentar
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[52px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-center justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Appendix
            </Typography>
            <Badge color="indigo" size="sm">
              KOSONG
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[80px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex items-center justify-between">
            <Typography className="font-bold font-nunito text-Black text-base">
              Ringkasan Eksekutif
            </Typography>
            <Badge color="success" size="sm">
              SELESAI
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-[80px]">
            <div>
              <Typography className="font-medium font-nunito text-Black text-xs mb-[6px]">
                Update Terakhir
              </Typography>
              <Typography className="font-medium font-nunito text-Black text-xs">
                26/10/2023
              </Typography>
            </div>
            <Link>
              <Button color="blue" className="bg-Blue1">
                Mulai
                <ArrowRight
                  size="32"
                  color="#FFFFFF"
                  className="ml-2 h-5 w-5"
                />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ListMab;
