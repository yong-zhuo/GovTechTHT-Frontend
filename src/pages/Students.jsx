import { Route, Routes } from "react-router"
import Student from "./Student"
import DataTable from "../components/common/DataTable"
import { useMemo } from "react"
import { students } from "../data/mockStudentData"
import { studentTableColumns } from "../data/tableColumns"
import { convertStudentsData } from "../utils/convertData"
import GPALineChart from "../components/common/GPALineChart"
import { getAverageCumulativeGpas, getAverageSemesterGpas } from "../utils/gpaUtils"

const Students = () => {

  const studentData = useMemo(() => convertStudentsData(students), [])
  const averageSemesterGpas = {
    label: 'Average Semester GPA',
    data: getAverageSemesterGpas(students)
  }
  
  const averageCumulativeGpas = {
    label: 'Average Cumulative GPA',
    data: getAverageCumulativeGpas(students)
  }

  return (
    <div className="flex flex-col p-5 sm:ml-5">
      <span className="text-3xl font-semibold text-slate-400 text-center sm:text-left">Students</span>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-3/4">
          <span className="text-xl mb-3 font-semibold">GPA Line Chart</span>
          <GPALineChart firstDataSet={averageSemesterGpas} secondDataSet={averageCumulativeGpas} />
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