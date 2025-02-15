/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react'
import { convertStudentsData } from '../utils/tableDataUtils'
import PersonsPage from './PersonsPage'
import { studentTableColumns } from '../constants/tableColumns'
import Loading from '../components/Loading'

const StudentsPage = () => {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('/data/students.json')
        const data = await response.json()
        setStudents(data)
      } catch (e) {
        alert('Error fetching students data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchStudents()
  }, [])

  const studentsData = useMemo(() => convertStudentsData(students), [students])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <PersonsPage
        data={studentsData}
        tableColumns={studentTableColumns}
        students={students}
      />
    </>
  )
}

export default StudentsPage
