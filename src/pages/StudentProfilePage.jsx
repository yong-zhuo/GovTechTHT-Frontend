/* eslint-disable no-unused-vars */
import { useParams } from 'react-router'
import ProfilePage from './ProfilePage'
import { findStudentById } from '../utils/findUtils'
import {
  getCumulativeGpa,
  getSemesterGpa,
  getStudentCumulativeGpas,
  getStudentSemesterGpas,
  semesters,
} from '../utils/gpaUtils'
import BackButton from '../components/profile/BackButton'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const StudentProfilePage = () => {
  const { id } = useParams()

  const [student, setStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStudent = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('/data/students.json')
        const data = await response.json()
        setStudent(findStudentById(data, id))
      } catch (e) {
        alert('Error fetching student data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (!student) {
    return (
      <div className="p-5 m-10 font-bold flex items-center flex-col gap-y-4">
        Student not found
        <BackButton />
      </div>
    )
  }
  const studentName = student.name

  const semesterGpas = getStudentSemesterGpas(student)
  const cumulativeGpas = getStudentCumulativeGpas(student)
  const studentDataset = [
    { label: 'Semester GPA', data: semesterGpas },
    { label: 'Cumulative GPA', data: cumulativeGpas },
  ]

  const lastSemesterGpa = getSemesterGpa(semesterGpas, semesters)
  const cumulativeGpa = getCumulativeGpa(semesterGpas, semesters)
  const studentDetails = [
    { label: 'Last Semester GPA', value: lastSemesterGpa },
    { label: 'Cumulative GPA', value: cumulativeGpa },
  ]

  return (
    <>
      <ProfilePage
        id={id}
        role={'Student'}
        dataset={studentDataset}
        name={studentName}
        details={studentDetails}
      />
    </>
  )
}

export default StudentProfilePage
