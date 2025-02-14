import { useEffect, useMemo, useState } from "react"
import { convertStudentsData } from "../utils/tableDataUtils"
import PersonsPage from "./PersonsPage"
import { studentTableColumns } from "../data/tableColumns"
import { LuLoaderCircle } from "react-icons/lu"

const StudentsPage = () => {

    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchStudents = async () => {
            setIsLoading(true)

            try {
                const response = await fetch('/data/students.json')
                const data = await response.json()
                setStudents(data)
            } catch (e) {
                alert('Error fetching students data')
            } finally {
                setIsLoading(false)
            }
        }
        fetchStudents()
    }, [])


    const studentsData = useMemo(() => convertStudentsData(students), [students])

    if (isLoading) {
        return <div className="flex flex-row items-center text-slate-600 gap-1 h-screen justify-center text-3xl">Loading<LuLoaderCircle className="animate-spin" /></div>
    }

    return (
        <>
            <PersonsPage data={studentsData} tableColumns={studentTableColumns} />
        </>
    )
}

export default StudentsPage