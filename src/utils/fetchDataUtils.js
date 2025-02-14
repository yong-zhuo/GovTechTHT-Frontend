/** Fetch all students data */
export const fetchStudents = async () => {
    const response = await fetch('/data/students.json');
    const data = await response.json();
    return data;
}

/** Fetch all teachers data */
export const fetchTeachers = async () => {
    const response = await fetch('/data/teachers.json');
    const data = await response.json();
    return data;
}