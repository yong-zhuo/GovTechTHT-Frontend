import { useParams } from "react-router";
import BackButton from "../components/profile/BackButton";
import { findStudentsTaughtByTeacher, findTeacherById } from "../utils/findUtils";
import ProfilePage from "./ProfilePage";
import { getAverageCumulativeGpas, getAverageSemesterGpas, getTeacherAverageGpas, semesters } from "../utils/gpaUtils";

const TeacherProfilePage = () => {

    const { id } = useParams()
    const teacher = findTeacherById(id)

    if (!teacher) {
        return (
            <div className="p-5 m-10 font-bold flex items-center flex-col gap-y-4">
                Teacher not found
                <BackButton />
            </div>);
    }
    const teacherName = teacher.name
    const teacherStudents = findStudentsTaughtByTeacher(teacher)

    const semesterGpas = getAverageSemesterGpas(teacherStudents)
    const cumulativeGpas = getAverageCumulativeGpas(teacherStudents)
    const teacherDataset = [
        { label: 'Average Semester GPA', data: semesterGpas },
        { label: 'Average Cumulative GPA', data: cumulativeGpas }
    ];

    const { avgLastSemesterGPA, avgCumulativeGPA } = getTeacherAverageGpas(teacher, semesters);
    const teacherDetails = [
        { label: 'Average GPA of Students Last Semester', value: avgLastSemesterGPA },
        { label: 'Average Cumulative GPA of Students', value: avgCumulativeGPA }
    ]

    return (
        <>
            <ProfilePage id={id} role={'Teacher'} dataset={teacherDataset} name={teacherName} details={teacherDetails} />
        </>
    )

}

export default TeacherProfilePage