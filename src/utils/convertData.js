import { students } from "../data/mockStudentData";
import { getAverageCumulativeGpa, getAverageSemesterGpa, getCumulativeGpa, getSemesterGpa } from "./gpaUtils";

/** Get the last semester count*/
const lastSemester = students[0].semesterGpa.length - 1;

export const convertStudentsData = (students) => {
    return students.map(student => ({
        id: student.id,
        name: student.name,
        lastSemesterGPA: getSemesterGpa(student.semesterGpa, lastSemester),
        cumulativeGPA: getCumulativeGpa(student.semesterGpa)
    }));
};

export const convertTeachersData = (teachers) => {
    return teachers.map(teacher => ({
        id: teacher.id,
        name: teacher.name,
        avgLastSemesterGPA: getAverageSemesterGpa(teacher.semesterGpa, lastSemester),
        avgCumulativeGPA: getAverageCumulativeGpa(teacher.semesterGpa)
    }));
}