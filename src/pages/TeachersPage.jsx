import { useEffect, useMemo, useState } from "react"
import PersonsPage from "./PersonsPage"
import { convertTeachersData } from "../utils/tableDataUtils"
import { teacherTableColumns } from "../data/tableColumns"
import Loading from "../components/Loading"

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
    return <Loading />
  }

  return (
    <>
      <PersonsPage data={teachersData} tableColumns={teacherTableColumns} />
    </>
  )
}

export default TeachersPage