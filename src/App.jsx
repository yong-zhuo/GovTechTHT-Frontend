import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Student from './pages/Student'
import Teacher from './pages/Teacher'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <div className='flex bg-white'>

          </div>

          <Routes>
            {/* Student related pages */}
            <Route path="/students" element={<Students/>}/>
            <Route path="/student/:id" element={<Student/>}/>

            {/* Teacher related pages */}
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/teacher/:id" element={<Teacher/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
