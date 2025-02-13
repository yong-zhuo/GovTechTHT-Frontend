import { Route, Routes } from "react-router"
import Student from "./Student"
import DataTable from "../components/common/DataTable"
import { useMemo } from "react"
import { students } from "../data/mockStudentData"
import { studentTableColumns } from "../data/tableColumns"
import { convertStudentsData } from "../utils/convertData"

const Students = () => {

  const studentData = useMemo(() => convertStudentsData(students), [])

  return (
    <div className="flex flex-col p-5 sm:ml-5">
      <span className="text-3xl font-semibold text-slate-400">Students</span>
      <div className="flex items-center justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-3/4">
          <span className="text-xl mb-3 font-semibold">GPA Charts</span>

        </div>
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-3/4">
          <span className="text-xl mb-3 font-semibold">List of Students</span>
          <DataTable data={studentData} columns={studentTableColumns} />
        </div>
      </div>
      <Routes>
        <Route path=":id" element={<Student />} />
      </Routes>
    </div>
  )
}

export default Students