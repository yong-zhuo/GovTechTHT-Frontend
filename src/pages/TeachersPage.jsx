import { useEffect, useMemo, useState } from "react"
import PersonsPage from "./PersonsPage"
import { convertTeachersData } from "../utils/tableDataUtils"
import { teacherTableColumns } from "../data/tableColumns"
import { LuLoaderCircle } from "react-icons/lu"

const TeachersPage = () => {

  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('/data/teachers.json')
        const data = await response.json()
        setTeachers(data)
      } catch (e) {
        alert('Error fetching students data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchTeachers()
  }, [])

  const teachersData = useMemo(() => convertTeachersData(teachers), [teachers])

  if (isLoading) {
    return <div className="flex flex-row items-center text-slate-600 gap-1 h-screen justify-center text-3xl">Loading<LuLoaderCircle className="animate-spin" /></div>
  }

  return (
    <>
      <PersonsPage data={teachersData} tableColumns={teacherTableColumns} />
    </>
  )
}

export default TeachersPage