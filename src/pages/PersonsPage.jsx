/* eslint-disable react/prop-types */
import { useLocation } from "react-router"
import DataTable from "../components/DataTable"
import { students } from "../data/mockStudentData"
import GPADoubleLineChart from "../components/GPADoubleLineChart"
import { getAverageCumulativeGpas, getAverageSemesterGpas } from "../utils/gpaUtils"

const PersonsPage = ({ data, tableColumns}) => {

  const location  = useLocation()
  const role = location.pathname.split('/')[1]

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
      <span className="text-3xl font-semibold text-slate-400 text-center sm:text-left capitalize">{role}</span>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-full sm:w-3/4">
          <span className="text-xl mb-3 font-semibold">GPA Line Chart</span>
          <GPADoubleLineChart firstDataSet={averageSemesterGpas} secondDataSet={averageCumulativeGpas} />
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-full sm:w-3/4">
          <span className="text-xl mb-3 font-semibold capitalize">List of {role}</span>
          <DataTable data={data} columns={tableColumns} />
        </div>
      </div>
    </div>
  )
}

export default PersonsPage