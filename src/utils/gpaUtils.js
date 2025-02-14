import { findStudentsTaughtByTeacher } from "./findUtils";

/** Get total semesters */
export const semesters = 8;

/** Get the cumulative GPA for a student given their GPAs across 8 semesters*/
export const getCumulativeGpa = (semesterGpas, semester) => {

    const totalGpa = semesterGpas.slice(0, semester).reduce((acc, curr) => acc + curr, 0);
    
    return parseFloat((totalGpa / (semester)).toFixed(2))
}

/** Get the GPA for a student in a particular semester*/
export const getSemesterGpa = (semesterGpas, semester) => {
    const semesterIndex = semester - 1;
    if (semesterIndex < 0 || semesterIndex > semesters) {
        throw new Error('Invalid semester index')
    }
    return semesterGpas[semesterIndex]
};

/** Get all the semester GPAs across the 8 semesters for a student */
export const getStudentSemesterGpas = (student) => {
    return student['semesterGpa']
}

/** Get all the cumulative GPAs across the 8 semesters for a student */
export const getStudentCumulativeGpas = (student) => {
    const cumulativeGpas = [];
    for (let i = 0; i < semesters; i++) {
        cumulativeGpas.push(getCumulativeGpa(student.semesterGpa, i + 1))
    }
    return cumulativeGpas
}

/** Get the average semester GPA for a student in a particular semester */
export const getAverageSemesterGpa = (students, semester) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getSemesterGpa(student.semesterGpa, semester)
    }, 0);
    return (totalGpa / students.length).toFixed(2)
};

/** Get the average cumulative GPA for a student in a particular semester */
export const getAverageCumulativeGpa = (students, semester) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getCumulativeGpa(student.semesterGpa, semester)
    }, 0);
    
    return (totalGpa / students.length).toFixed(2)
};

/** Get the average GPAs for all students across past 8 semesters */
export const getAverageSemesterGpas = (students) => {
    const averageSemesterGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageSemesterGpas.push(getAverageSemesterGpa(students, i + 1))
    }

    return averageSemesterGpas
}

/** Get the average cumulative GPAs for all students across past 8 semesters */
export const getAverageCumulativeGpas = (students) => {
    const averageCumulativeGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageCumulativeGpas.push(getAverageCumulativeGpa(students, i + 1))
        
    }
    return averageCumulativeGpas
};

/** Get the average cumulative and last semester GPA for all students taught by the teacher*/
export const getTeacherAverageGpas = (students, teacher, semester) => {
    //Get the students taught by the teacher
    const teacherStudents = findStudentsTaughtByTeacher(students, teacher)
    const avgLastSemesterGPA = getAverageSemesterGpa(teacherStudents, semester)
    const avgCumulativeGPA = getAverageCumulativeGpa(teacherStudents, semester)
    return { avgLastSemesterGPA, avgCumulativeGPA }
};