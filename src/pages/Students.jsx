import { Route, Routes } from "react-router"
import Student from "./Student"

const Students = () => {

  return (
    <div className="flex flex-col">
      <span className="text-3xl p-5 font-semibold text-slate-400">Students</span>
      

      <Routes>
        <Route path=":id" element={<Student />} />
      </Routes>
    </div>
  )
}

export default Students