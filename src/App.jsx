import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <div className='flex bg-gray-50'>
            <SideBar />
          </div>

          <Routes>
            {/* Student Page*/}
            <Route path="/students" element={<Students />} />
            
            {/* Teacher Page */}
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
