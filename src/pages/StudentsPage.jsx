import { useMemo } from "react"
import { convertStudentsData } from "../utils/tableDataUtils"
import { students } from "../data/mockStudentData"
import PersonsPage from "./PersonsPage"
import { studentTableColumns } from "../data/tableColumns"

const StudentsPage = () => {

    const studentsData = useMemo(() => convertStudentsData(students), [])

    return (
        <>
            <PersonsPage data={studentsData} tableColumns={studentTableColumns}/>
        </>
    )
}

export default StudentsPage