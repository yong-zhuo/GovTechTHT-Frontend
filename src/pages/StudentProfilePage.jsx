import { useParams } from "react-router"
import ProfilePage from "./ProfilePage"
import { findStudentById } from "../utils/findUtils"
import { getCumulativeGpa, getSemesterGpa, getStudentCumulativeGpas, getStudentSemesterGpas, semesters } from "../utils/gpaUtils"

const StudentProfilePage = () => {

    const { id } = useParams()
    const student = findStudentById(id)

    if (!student) {
        return <div>Student not found</div>;
    }
    const studentName = student.name

    const semesterGpas = getStudentSemesterGpas(student)
    const cumulativeGpas = getStudentCumulativeGpas(student)
    const studentDataset = [
        { label: 'Semester GPA', data: semesterGpas },
        { label: 'Cumulative GPA', data: cumulativeGpas }
    ];

    const lastSemesterGpa = getSemesterGpa(semesterGpas, semesters)
    const cumulativeGpa = getCumulativeGpa(semesterGpas, semesters)
    const studentDetails = [
        { label: 'Last Semester GPA', value: lastSemesterGpa },
        { label: 'Cumulative GPA', value: cumulativeGpa }
    ]

    return (
        <>
            <ProfilePage id={id} role={'Student'} dataset={studentDataset} name={studentName} details={studentDetails}/>
        </>
    )
}

export default StudentProfilePage