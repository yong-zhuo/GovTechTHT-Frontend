import { Route, Routes } from "react-router"
import Student from "./Student"

const Students = () => {

  return (
    <div>
      Students
      <Routes>
        <Route path=":id" element={<Student />} />
      </Routes>
    </div>
  )
}

export default Students