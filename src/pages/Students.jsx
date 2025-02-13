import { Route, Routes } from "react-router"
import Student from "./Student"
import Table from "../components/common/Table"
import { useMemo } from "react"
import { students } from "../data/mockStudentData"
import { studentTableColumns } from "../data/tableColumns"

const Students = () => {

  const studentData = useMemo(() => students, [])

  return (
    <div className="flex flex-col p-5">
      <span className="text-3xl font-semibold text-slate-400">Students</span>
      <div className="flex bg-gray-200 rounded-lg shadow-2xl">
        <Table data={studentData} columns={studentTableColumns} />
      </div>
      <Routes>
        <Route path=":id" element={<Student />} />
      </Routes>
    </div>
  )
}

export default Students