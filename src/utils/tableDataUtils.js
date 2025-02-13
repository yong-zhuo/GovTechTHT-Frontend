import { students } from "../data/mockStudentData";
import { getCumulativeGpa, getSemesterGpa, getTeacherAverageGpas } from "./gpaUtils";

/** Get the last semester count*/
const lastSemesterIndex = students[0].semesterGpa.length - 1;

/** Calculate the required GPA parameters and return a formatted object for the DataTable */
export const convertStudentsData = (students) => {
    return students.map(student => ({
        id: student.id,
        name: student.name,
        lastSemesterGPA: getSemesterGpa(student.semesterGpa, lastSemesterIndex),
        cumulativeGPA: getCumulativeGpa(student.semesterGpa, lastSemesterIndex)
    }));
};

export const convertTeachersData = (teachers) => {
    return teachers.map(teacher => {
        const { avgLastSemesterGPA, avgCumulativeGPA } = getTeacherAverageGpas(students, teacher, lastSemesterIndex);
        
        return {
            id: teacher.id,
            name: teacher.name,
            avgLastSemesterGPA,
            avgCumulativeGPA
        }
    });
}

