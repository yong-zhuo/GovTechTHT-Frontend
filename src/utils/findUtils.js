import { students } from "../data/mockStudentData"
import { teachers } from "../data/mockTeacherData"

export const findStudentById = (id) => {
    return students.find(student => student.id === parseInt(id))
}

export const findTeacherById = (id) => {
    return teachers.find(teacher => teacher.id === parseInt(id))
}

export const findStudentsTaughtByTeacher = (teacher) => {
    return students.filter(student => teacher.students.includes(student.id))
}