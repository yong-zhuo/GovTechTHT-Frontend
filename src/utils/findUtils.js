/** Find student by their Id */
export const findStudentById = (students, id) => {
    return students.find(student => student.id === parseInt(id))
}

/** Find teacher by their Id */
export const findTeacherById = (teachers, id) => {
    return teachers.find(teacher => teacher.id === parseInt(id))
}

/** Find students taught by a particular teacher*/
export const findStudentsTaughtByTeacher = (students, teacher) => {
    return students.filter(student => teacher.students.includes(student.id))
}