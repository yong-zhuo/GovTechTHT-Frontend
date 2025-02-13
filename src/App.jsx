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
          <div className='flex flex-row bg-gray-50 min-h-screen justify-between'>
            <div className='hidden sm:block'>
              <SideBar />
            </div>
            <div className='flex-1'>
              <Routes>
                {/* Student Page*/}
                <Route path="/students" element={<Students />} />
                {/* Teacher Page */}
                <Route path="/teachers" element={<Teachers />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
