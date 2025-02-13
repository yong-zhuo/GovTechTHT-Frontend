import { students } from "../data/mockStudentData";

/** Get total semesters */
const semesters = students[0].semesterGpa.length;

/** Get the cumulative GPA for a student given their GPAs across 8 semesters*/
export const getCumulativeGpa = (semesterGpas, semesterIndex) => {
    if (semesterIndex < 0 || semesterIndex > semesters) {
        throw new Error('Invalid number of semesters')
    }
    const totalGpa = semesterGpas.slice(0, semesterIndex + 1).reduce((acc, curr) => acc + curr, 0);
    
    return parseFloat((totalGpa / (semesterIndex + 1)).toFixed(2))
}

/** Get the GPA for a student in a particular semester*/
export const getSemesterGpa = (semesterGpas, semesterIndex) => {
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
        cumulativeGpas.push(getCumulativeGpa(student.semesterGpa, i))
    }
    return cumulativeGpas
}

/** Get the average semester GPA for a student in a particular semester */
export const getAverageSemesterGpa = (students, semesterIndex) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getSemesterGpa(student.semesterGpa, semesterIndex)
    }, 0);
    return (totalGpa / students.length).toFixed(2)
};

/** Get the average cumulative GPA for a student in a particular semester */
export const getAverageCumulativeGpa = (students, semesterIndex) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getCumulativeGpa(student.semesterGpa, semesterIndex)
    }, 0);
    
    return (totalGpa / students.length).toFixed(2)
};

/** Get the average GPAs for all students across past 8 semesters */
export const getAverageSemesterGpas = (students) => {
    const averageSemesterGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageSemesterGpas.push(getAverageSemesterGpa(students, i))
    }

    return averageSemesterGpas
}

/** Get the average cumulative GPAs for all students across past 8 semesters */
export const getAverageCumulativeGpas = (students) => {
    const averageCumulativeGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageCumulativeGpas.push(getAverageCumulativeGpa(students, i))
        
    }
    return averageCumulativeGpas
};

/** Get the average cumulative and last semester GPA for all students taught by the teacher*/
export const getTeacherAverageGpas = (students, teacher, semesterIndex) => {
    //Get the students taught by the teacher
    const teacherStudents = students.filter(student => teacher.students.includes(student.id))
    const avgLastSemesterGPA = getAverageSemesterGpa(teacherStudents, semesterIndex)
    const avgCumulativeGPA = getAverageCumulativeGpa(teacherStudents, semesterIndex)
    return { avgLastSemesterGPA, avgCumulativeGPA }
};