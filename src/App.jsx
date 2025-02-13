import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SideBar from './components/SideBar'
import StudentsPage from './pages/StudentsPage'
import TeachersPage from './pages/TeachersPage'
import StudentProfilePage from './pages/StudentProfilePage'
import TeacherProfilePage from './pages/TeacherProfilePage'
import HomePage from './pages/HomePage'

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
                {/* Home Page */}
                <Route path="/" element={<HomePage />} />
                {/* Student Page*/}
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/students/:id" element={<StudentProfilePage />} />
                {/* Teacher Page */}
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/teachers/:id" element={<TeacherProfilePage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
