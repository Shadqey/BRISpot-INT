import "./dist/css/index.css";
import { Routes, Route } from "react-router-dom";

import BerandaPage from "./pages/BerandaPage";
import TestSidebar from "./components/TestSidebar";
import KunjunganNasabah from "./pages/KunjunganNasabah";
import PipelinePage from "./pages/PipelinePage";
import DaftarPengajuan from "./pages/DaftarPengajuan";
import DaftarPerusahaan from "./pages/DaftarPerusahaan";
import NewPipeline from "./pages/NewPipeline";
import UploadDokumen from "./pages/UploadDokumen";

function App() {
  return (
    <div>
      <TestSidebar>
        <Routes>
          <Route path="/" Component={BerandaPage}></Route>
          <Route path="/kunjungannasabah" Component={KunjunganNasabah}></Route>
          <Route path="/pipeline" Component={PipelinePage}></Route>
          <Route path="/newpipeline" Component={NewPipeline}></Route>
          <Route path="/uploaddokumen" Component={UploadDokumen}></Route>
          <Route path="/daftarpengajuan" Component={DaftarPengajuan}></Route>
          <Route path="/daftarperusahaan" Component={DaftarPerusahaan}></Route>
        </Routes>
      </TestSidebar>
    </div>
  );
}

export default App;
