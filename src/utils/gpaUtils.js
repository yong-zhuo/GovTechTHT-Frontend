import { students } from "../data/mockStudentData";

/** Get total semesters */
const semesters = students[0].semesterGpa.length - 1;

export const getCumulativeGpa = (semesterGpa) => {
    const totalGpa = semesterGpa.reduce((acc, curr) => acc + curr, 0)
    const semesters = semesterGpa.length

    return (totalGpa / semesters).toFixed(2)
}

export const getSemesterGpa = (semesterGpa, semesterIndex) => {
    if (semesterIndex < 0 || semesterIndex >= semesterGpa.length) {
        throw new Error('Invalid semester index');
    }
    return semesterGpa[semesterIndex];
};

export const getAverageSemesterGpa = (students, semesterIndex) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getSemesterGpa(student.semesterGpa, semesterIndex);
    }, 0);
    return (totalGpa / students.length).toFixed(2);
};

export const getAverageCumulativeGpa = (students) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getCumulativeGpa(student.semesterGpa);
    }, 0);
    return (totalGpa / students.length).toFixed(2);
};
