import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SideBar from './components/SideBar'
import StudentsPage from './pages/StudentsPage'
import TeachersPage from './pages/TeachersPage'
import StudentProfilePage from './pages/StudentProfilePage'
import TeacherProfilePage from './pages/TeacherProfilePage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-row bg-gray-50 min-h-screen overflow-auto">
          <div className="hidden md:block fixed">
            <SideBar />
          </div>
          <div className="md:hidden block fixed">
            <NavBar />
          </div>
          <div className="flex-1 md:ml-48">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />
              {/* Student Page*/}
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/students/:id" element={<StudentProfilePage />} />
              {/* Teacher Page */}
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/teachers/:id" element={<TeacherProfilePage />} />
              {/* Not Found Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
