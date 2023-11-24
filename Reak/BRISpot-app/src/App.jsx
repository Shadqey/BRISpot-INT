import './dist/css/index.css'
import {Routes, Route} from 'react-router-dom'

import BerandaPage from './pages/BerandaPage'
import TestSidebar from './components/TestSidebar'  
import KunjunganNasabah from './pages/KunjunganNasabah'
import PipelinePage from './pages/PipelinePage'

function App() {
  return (
    <div>
      <TestSidebar>
        <Routes>
          <Route path='/' Component={BerandaPage}></Route>
          <Route path='/kunjungannasabah' Component={KunjunganNasabah}></Route>
          <Route path='/pipeline' Component={PipelinePage}></Route>
        </Routes>
      </TestSidebar>
    </div>
  )
}

export default App