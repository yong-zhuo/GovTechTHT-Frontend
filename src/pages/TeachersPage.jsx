import { useEffect, useMemo, useState } from 'react'
import PersonsPage from './PersonsPage'
import { convertTeachersData } from '../utils/tableDataUtils'
import { teacherTableColumns } from '../constants/tableColumns'
import Loading from '../components/Loading'

const TeachersPage = () => {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const [teachersResponse, studentsResponse] = await Promise.all([
          fetch('/data/teachers.json'),
          fetch('/data/students.json'),
        ])

        const teachersData = await teachersResponse.json()
        const studentsData = await studentsResponse.json()
        setTeachers(teachersData)
        setStudents(studentsData)
      } catch (e) {
        alert('Error fetching data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const teachersData = useMemo(
    () => convertTeachersData(students, teachers),
    [students, teachers]
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <PersonsPage
        data={teachersData}
        tableColumns={teacherTableColumns}
        students={students}
      />
    </>
  )
}

export default TeachersPage
