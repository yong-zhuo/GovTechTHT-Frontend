import { students } from "../data/mockStudentData";

/** Get total semesters */
const semesters = students[0].semesterGpa.length;

export const getCumulativeGpa = (semesterGpa, semesterIndex) => {
    if (semesterIndex < 0 || semesterIndex > semesters) {
        throw new Error('Invalid number of semesters');
    }
    const totalGpa = semesterGpa.slice(0, semesterIndex + 1).reduce((acc, curr) => acc + curr, 0);
    
    return parseFloat((totalGpa / (semesterIndex + 1)).toFixed(2))
}

export const getSemesterGpa = (semesterGpa, semesterIndex) => {
    if (semesterIndex < 0 || semesterIndex > semesters) {
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

export const getAverageCumulativeGpa = (students, semesterIndex) => {
    const totalGpa = students.reduce((acc, student) => {
        return acc + getCumulativeGpa(student.semesterGpa, semesterIndex);
    }, 0);
    
    return (totalGpa / students.length).toFixed(2);
};

export const getAverageSemesterGpas = (students) => {
    const averageSemesterGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageSemesterGpas.push(getAverageSemesterGpa(students, i));
    }

    return averageSemesterGpas;
}

export const getAverageCumulativeGpas = (students) => {
    const averageCumulativeGpas = [];
    for (let i = 0; i < semesters; i++) {
        averageCumulativeGpas.push(getAverageCumulativeGpa(students, i));
        
    }
    return averageCumulativeGpas;
};

export const getTeacherAverageGpas = (students, teacher, semesterIndex) => {
    //Get the students taught by the teacher
    const teacherStudents = students.filter(student => teacher.students.includes(student.id));
    const avgLastSemesterGPA = getAverageSemesterGpa(teacherStudents, semesterIndex);
    const avgCumulativeGPA = getAverageCumulativeGpa(teacherStudents, semesterIndex);
    return { avgLastSemesterGPA, avgCumulativeGPA };
};