import { useParams } from "react-router";
import BackButton from "../components/profile/BackButton";
import { findStudentsTaughtByTeacher, findTeacherById } from "../utils/findUtils";
import ProfilePage from "./ProfilePage";
import { getAverageCumulativeGpas, getAverageSemesterGpas, getTeacherAverageGpas, semesters } from "../utils/gpaUtils";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const TeacherProfilePage = () => {

    const { id } = useParams()

    const [teacher, setTeacher] = useState(null)
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [teachersResponse, studentsResponse] = await Promise.all([
                    fetch("/data/teachers.json"),
                    fetch("/data/students.json")
                ]);

                const teachersData = await teachersResponse.json();
                const studentsData = await studentsResponse.json();
                setTeacher(findTeacherById(teachersData, id));
                setStudents(studentsData);
            } catch (e) {
                alert("Error fetching data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Loading />
    }

    if (!teacher) {
        return (
            <div className="p-5 m-10 font-bold flex items-center flex-col gap-y-4">
                Teacher not found
                <BackButton />
            </div>);
    }

    const teacherName = teacher.name
    const teacherStudents = findStudentsTaughtByTeacher(students, teacher)

    const semesterGpas = getAverageSemesterGpas(teacherStudents)
    const cumulativeGpas = getAverageCumulativeGpas(teacherStudents)
    const teacherDataset = [
        { label: 'Average Semester GPA', data: semesterGpas },
        { label: 'Average Cumulative GPA', data: cumulativeGpas }
    ];

    const { avgLastSemesterGPA, avgCumulativeGPA } = getTeacherAverageGpas(students, teacher, semesters);
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