import { getCumulativeGpa, getSemesterGpa, getTeacherAverageGpas, semesters } from "./gpaUtils";


/** Calculate the required GPA parameters and return a formatted object for the DataTable */
export const convertStudentsData = (students) => {
    return students.map(student => ({
        id: student.id,
        name: student.name,
        lastSemesterGPA: getSemesterGpa(student.semesterGpa, semesters),
        cumulativeGPA: getCumulativeGpa(student.semesterGpa, semesters)
    }))
}

export const convertTeachersData = (students, teachers) => {
    return teachers.map(teacher => {
        const { avgLastSemesterGPA, avgCumulativeGPA } = getTeacherAverageGpas(students, teacher, semesters)
        
        return {
            id: teacher.id,
            name: teacher.name,
            avgLastSemesterGPA,
            avgCumulativeGPA
        }
    })
}

