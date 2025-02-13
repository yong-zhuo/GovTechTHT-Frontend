/* eslint-disable react/prop-types */
import { Route, Routes, useLocation } from "react-router"
import DataTable from "../components/common/DataTable"
import { students } from "../data/mockStudentData"
import GPADoubleLineChart from "../components/common/GPADoubleLineChart"
import { getAverageCumulativeGpas, getAverageSemesterGpas } from "../utils/gpaUtils"

const PersonsPage = ({ data, tableColumns, SubRoute }) => {

  const location  = useLocation()
  const pageType = location.pathname.split('/')[1]

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
      <span className="text-3xl font-semibold text-slate-400 text-center sm:text-left capitalize">{pageType}</span>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-full sm:w-3/4">
          <span className="text-xl mb-3 font-semibold">GPA Line Chart</span>
          <GPADoubleLineChart firstDataSet={averageSemesterGpas} secondDataSet={averageCumulativeGpas} />
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-full sm:w-3/4">
          <span className="text-xl mb-3 font-semibold capitalize">List of {pageType}</span>
          <DataTable data={data} columns={tableColumns} />
        </div>
      </div>
      <Routes>
        <Route path=":id" element={<SubRoute />} />
      </Routes>
    </div>
  )
}

export default PersonsPage