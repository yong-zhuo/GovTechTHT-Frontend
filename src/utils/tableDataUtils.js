import { students } from "../data/mockStudentData";
import { getCumulativeGpa, getSemesterGpa, getTeacherAverageGpas } from "./gpaUtils";

/** Get the last semester count*/
const lastSemester= students[0].semesterGpa.length;

/** Calculate the required GPA parameters and return a formatted object for the DataTable */
export const convertStudentsData = (students) => {
    return students.map(student => ({
        id: student.id,
        name: student.name,
        lastSemesterGPA: getSemesterGpa(student.semesterGpa, lastSemester),
        cumulativeGPA: getCumulativeGpa(student.semesterGpa, lastSemester)
    }));
};

export const convertTeachersData = (teachers) => {
    return teachers.map(teacher => {
        const { avgLastSemesterGPA, avgCumulativeGPA } = getTeacherAverageGpas(students, teacher, lastSemester);
        
        return {
            id: teacher.id,
            name: teacher.name,
            avgLastSemesterGPA,
            avgCumulativeGPA
        }
    });
}

