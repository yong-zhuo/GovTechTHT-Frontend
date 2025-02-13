import { Route, Routes } from "react-router"
import Student from "./Student"
import Table from "../components/common/Table"
import { useMemo } from "react"
import { students } from "../data/mockStudentData"
import { studentTableColumns } from "../data/tableColumns"
import { convertStudentsData } from "../utils/convertData"

const Students = () => {

  const studentData = useMemo(() => convertStudentsData(students) , [])

  return (
    <div className="flex flex-col p-5 sm:ml-5">
      <span className="text-3xl font-semibold text-slate-400">Students</span>
      <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-3/4">
        <Table data={studentData} columns={studentTableColumns} />
      </div>
      <Routes>
        <Route path=":id" element={<Student />} />
      </Routes>
    </div>
  )
}

export default Students