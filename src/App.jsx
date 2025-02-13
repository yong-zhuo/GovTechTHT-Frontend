import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SideBar from './components/SideBar'
import StudentsPage from './pages/StudentsPage'
import TeachersPage from './pages/TeachersPage'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <div className='flex flex-row bg-gray-50 min-h-screen justify-between'>
            <div className='hidden md:block fixed'>
              <SideBar />
            </div>
            <div className='flex-1 md:ml-48'>
              <Routes>
                {/* Student Page*/}
                <Route path="/students" element={<StudentsPage />} />
                {/* Teacher Page */}
                <Route path="/teachers" element={<TeachersPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
